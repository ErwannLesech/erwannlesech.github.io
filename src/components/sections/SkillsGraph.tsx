import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { skills, type Skill, type SkillDomain } from "@/data/skills";
import { CLUSTER_COLOR, DOMAINS } from "./skillsConstants";

function getDomainLayout(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const safeCount = Math.max(1, count);
  const minGap = 1.15;
  let remaining = safeCount;
  let ringIndex = 0;

  while (remaining > 0) {
    const ringRadius = radius + ringIndex * 1.05;
    const capacity = Math.max(4, Math.floor((2 * Math.PI * ringRadius) / minGap));
    const itemsOnRing = Math.min(remaining, capacity);
    const offset = ringIndex % 2 === 0 ? 0 : Math.PI / itemsOnRing;

    for (let i = 0; i < itemsOnRing; i++) {
      const angle = (i / itemsOnRing) * Math.PI * 2 + offset;
      const wave = i % 2 === 0 ? 1 : -1;
      const x = Math.cos(angle) * ringRadius;
      const z = Math.sin(angle) * ringRadius;
      const y = wave * (0.08 + (ringIndex % 3) * 0.04);
      points.push(new THREE.Vector3(x, y, z));
    }

    remaining -= itemsOnRing;
    ringIndex += 1;
  }

  return points;
}

function SkillNode({
  skill,
  domainColor,
  basePosition,
  isVisible,
  isSelected,
  dimmed,
  isFocused,
  focusSpread,
  onHover,
  onPin,
}: {
  skill: Skill;
  domainColor: string;
  basePosition: THREE.Vector3;
  isVisible: boolean;
  isSelected: boolean;
  dimmed: boolean;
  isFocused: boolean;
  focusSpread: number;
  onHover: (s: Skill | null) => void;
  onPin: (s: Skill) => void;
}) {
  const nodeRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!nodeRef.current) return;
    const target = isFocused
      ? new THREE.Vector3(0, 0, 0)
      : new THREE.Vector3(basePosition.x * focusSpread, basePosition.y * 0.9, basePosition.z * focusSpread);
    const alpha = 1 - Math.exp(-delta * 9.5);
    nodeRef.current.position.lerp(target, alpha);
  });

  return (
    <group ref={nodeRef}>
      <Html center transform={false} distanceFactor={10} style={{ pointerEvents: isVisible ? "auto" : "none" }}>
        <button
          aria-label={skill.label}
          onMouseEnter={() => isVisible && onHover(skill)}
          onMouseLeave={() => onHover(null)}
          onClick={(e) => {
            e.stopPropagation();
            if (isVisible) onPin(skill);
          }}
          className="relative flex items-center justify-center rounded-xl bg-bg-card border transition-all"
          style={{
            width: 48,
            height: 48,
            backgroundColor: isSelected || isFocused ? "var(--bg-primary)" : "var(--bg-card)",
            borderColor: isSelected ? domainColor : "var(--border-subtle)",
            boxShadow: isSelected ? `0 0 24px ${domainColor}88` : undefined,
            transform: `scale(${isVisible ? (isFocused ? 1.7 : isSelected ? 1.2 : 1) : 0})`,
            opacity: isVisible ? (isSelected || isFocused ? 1 : dimmed ? 0.28 : 1) : 0,
            zIndex: isFocused ? 5 : 1,
            transition: "transform 420ms cubic-bezier(.22,.61,.36,1), opacity 360ms",
          }}
        >
          <img
            src={skill.logo}
            alt={skill.label}
            width={28}
            height={28}
            style={{ filter: "drop-shadow(0 0 4px rgba(0,0,0,0.3))" }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </button>
      </Html>
    </group>
  );
}

function Cluster({
  domain,
  skills: clusterSkills,
  radius,
  speed,
  motionScale,
  tilt,
  center,
  onHover,
  onPin,
  selectedId,
  focusedId,
  visible,
}: {
  domain: SkillDomain;
  skills: Skill[];
  radius: number;
  speed: number;
  motionScale: number;
  tilt: number;
  center: [number, number, number];
  onHover: (s: Skill | null) => void;
  onPin: (s: Skill) => void;
  selectedId: string | null;
  focusedId: string | null;
  visible: Set<string>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const basePositions = useMemo(() => getDomainLayout(clusterSkills.length, radius), [clusterSkills, radius]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed * motionScale;
    }
  });

  const color = CLUSTER_COLOR[domain];
  return (
    <group position={center}>
      <group ref={groupRef} rotation={[tilt, 0, 0]}>
        {clusterSkills.map((s, i) => {
          const isVisible = visible.has(s.id);
          const isSelected = selectedId === s.id;
          const isFocused = focusedId === s.id;
          const dimmed = selectedId !== null && !isSelected;
          return (
            <SkillNode
              key={s.id}
              skill={s}
              domainColor={color}
              basePosition={basePositions[i]}
              isVisible={isVisible}
              isSelected={isSelected}
              dimmed={dimmed}
              isFocused={isFocused}
              focusSpread={1}
              onHover={onHover}
              onPin={onPin}
            />
          );
        })}
      </group>
    </group>
  );
}

export function SkillsGraph({
  filter,
  selectedId,
  focusedId,
  motionScale,
  onHover,
  onPin,
  onReset,
}: {
  filter: SkillDomain | "all";
  selectedId: string | null;
  focusedId: string | null;
  motionScale: number;
  onHover: (s: Skill | null) => void;
  onPin: (s: Skill) => void;
  onReset: () => void;
}) {
  const grouped = useMemo(() => {
    const map = new Map<SkillDomain, Skill[]>();
    for (const d of DOMAINS) map.set(d, []);
    for (const s of skills) map.get(s.domain)!.push(s);
    return map;
  }, []);

  const visible = useMemo(() => {
    const set = new Set<string>();
    for (const s of skills) if (filter === "all" || s.domain === filter) set.add(s.id);
    return set;
  }, [filter]);

  const params: Record<SkillDomain, { radius: number; speed: number; tilt: number; center: [number, number, number] }> = {
    ai_ml: { radius: 3.6, speed: 0.035, tilt: -1.25, center: [-1.05, 0, -0.25] },
    data_backend: { radius: 4.15, speed: 0.03, tilt: 0.85, center: [0.95, 0, -0.15] },
    infra_devops: { radius: 3.1, speed: 0.038, tilt: 1.35, center: [-0.35, 0, 0.75] },
    frontend: { radius: 3.0, speed: 0.04, tilt: 1.05, center: [0.8, 0, 0.6] },
    systems: { radius: 3.9, speed: 0.032, tilt: -0.75, center: [0.1, 0, -0.95] },
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 9.6], fov: 54 }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      onPointerMissed={() => onReset()}
    >
      <ambientLight intensity={0.6} />
      {DOMAINS.map((d) => (
        <Cluster
          key={d}
          domain={d}
          skills={grouped.get(d)!}
          radius={params[d].radius}
          speed={params[d].speed}
          motionScale={motionScale}
          tilt={params[d].tilt}
          center={params[d].center}
          onHover={onHover}
          onPin={onPin}
          selectedId={selectedId}
          focusedId={focusedId}
          visible={visible}
        />
      ))}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4 * motionScale}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}
