import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { skills, type Skill, type SkillDomain } from "@/data/skills";

const CLUSTER_COLOR: Record<SkillDomain, string> = {
  fullstack: "#f97316",
  ai: "#7c3aed",
  data: "#0891b2",
  tools: "#f59e0b",
  platforms: "#059669",
};

const DOMAINS: SkillDomain[] = ["fullstack", "ai", "data", "tools", "platforms"];

function Cluster({
  domain,
  skills: clusterSkills,
  radius,
  speed,
  tilt,
  onHover,
  selectedId,
  visible,
}: {
  domain: SkillDomain;
  skills: Skill[];
  radius: number;
  speed: number;
  tilt: number;
  onHover: (s: Skill | null) => void;
  selectedId: string | null;
  visible: Set<string>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed;
    }
  });

  const color = CLUSTER_COLOR[domain];

  return (
    <group ref={groupRef} rotation={[tilt, 0, 0]}>
      {clusterSkills.map((s, i) => {
        const angle = (i / clusterSkills.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const isVisible = visible.has(s.id);
        const isSelected = selectedId === s.id;
        const dimmed = selectedId !== null && !isSelected;
        return (
          <group key={s.id} position={[x, 0, z]}>
            <Html
              center
              transform={false}
              distanceFactor={10}
              style={{ pointerEvents: isVisible ? "auto" : "none" }}
            >
              <button
                aria-label={s.label}
                onMouseEnter={() => isVisible && onHover(s)}
                onClick={() => isVisible && onHover(s)}
                className="relative flex items-center justify-center rounded-xl bg-bg-card border transition-all"
                style={{
                  width: 48,
                  height: 48,
                  borderColor: isSelected ? color : "var(--border-subtle)",
                  boxShadow: isSelected ? `0 0 24px ${color}88` : undefined,
                  transform: `scale(${isVisible ? (isSelected ? 1.3 : 1) : 0})`,
                  opacity: isVisible ? (dimmed ? 0.3 : 1) : 0,
                  transition: "transform 400ms cubic-bezier(.4,0,.2,1), opacity 400ms",
                }}
              >
                <img
                  src={s.logo}
                  alt={s.label}
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
      })}
    </group>
  );
}

export function SkillsGraph({
  filter,
  selectedId,
  onHover,
}: {
  filter: SkillDomain | "all";
  selectedId: string | null;
  onHover: (s: Skill | null) => void;
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

  const params: Record<SkillDomain, { radius: number; speed: number; tilt: number }> = {
    fullstack: { radius: 1.6, speed: 0.07, tilt: 0.2 },
    ai: { radius: 2.4, speed: 0.05, tilt: -0.3 },
    data: { radius: 3.2, speed: 0.04, tilt: 0.15 },
    tools: { radius: 2.0, speed: 0.06, tilt: 0.5 },
    platforms: { radius: 2.8, speed: 0.045, tilt: -0.15 },
  };

  return (
    <Canvas
      camera={{ position: [0, 1.6, 8], fov: 50 }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      {DOMAINS.map((d) => (
        <Cluster
          key={d}
          domain={d}
          skills={grouped.get(d)!}
          radius={params[d].radius}
          speed={params[d].speed}
          tilt={params[d].tilt}
          onHover={onHover}
          selectedId={selectedId}
          visible={visible}
        />
      ))}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}

export { CLUSTER_COLOR };
