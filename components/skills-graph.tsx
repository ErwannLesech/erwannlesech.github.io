"use client"

import { useMemo, useRef, useState, useEffect } from "react"
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber"
import * as THREE from "three"

import { skills, domainColors, type Skill } from "@/data/skills"

interface NodeData {
  skill: Skill
  basePosition: THREE.Vector3
  orbitSpeed: number
  phase: number
}

function buildLayout(): NodeData[] {
  const n = skills.length
  const radius = 3.1
  // Fibonacci sphere distribution for even spacing
  const offset = 2 / n
  const increment = Math.PI * (3 - Math.sqrt(5))
  return skills.map((skill, i) => {
    const y = i * offset - 1 + offset / 2
    const r = Math.sqrt(1 - y * y)
    const phi = i * increment
    const x = Math.cos(phi) * r
    const z = Math.sin(phi) * r
    return {
      skill,
      basePosition: new THREE.Vector3(x, y, z).multiplyScalar(radius),
      orbitSpeed: 0.08 + (i % 4) * 0.02,
      phase: i * 0.6,
    }
  })
}

function SkillNode({
  node,
  active,
  dimmed,
  reducedMotion,
  onHover,
  onSelect,
}: {
  node: NodeData
  active: boolean
  dimmed: boolean
  reducedMotion: boolean
  onHover: (id: string | null) => void
  onSelect: (id: string) => void
}) {
  const groupRef = useRef<THREE.Group>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const color = domainColors[node.skill.domain]

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (groupRef.current) {
      const bob = reducedMotion
        ? 0
        : Math.sin(t * node.orbitSpeed * 4 + node.phase) * 0.12
      groupRef.current.position.set(
        node.basePosition.x,
        node.basePosition.y + bob,
        node.basePosition.z
      )
      const targetScale = active ? 1.45 : dimmed ? 0.7 : 1
      groupRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.15
      )
    }
    if (ringRef.current && active) {
      const pulse = 1 + Math.sin(t * 4) * 0.12
      ringRef.current.scale.set(pulse, pulse, pulse)
      const mat = ringRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.4 + Math.sin(t * 4) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <mesh
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation()
          onHover(node.skill.id)
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => {
          onHover(null)
          document.body.style.cursor = "default"
        }}
        onClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation()
          onSelect(node.skill.id)
        }}
      >
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={active ? 0.9 : 0.35}
          roughness={0.35}
          metalness={0.4}
          transparent
          opacity={dimmed ? 0.45 : 1}
        />
      </mesh>
      {active && (
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.55, 0.03, 16, 64]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  )
}

function GraphScene({
  hovered,
  selected,
  highlightDomain,
  reducedMotion,
  onHover,
  onSelect,
}: {
  hovered: string | null
  selected: string | null
  highlightDomain: string | null
  reducedMotion: boolean
  onHover: (id: string | null) => void
  onSelect: (id: string) => void
}) {
  const groupRef = useRef<THREE.Group>(null)
  const nodes = useMemo(() => buildLayout(), [])

  const activeId = hovered ?? selected

  useFrame((_, delta) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y += delta * 0.12
      groupRef.current.rotation.x =
        Math.sin(groupRef.current.rotation.y * 0.5) * 0.08
    }
  })

  // edges between nodes that share a domain
  const edges = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].skill.domain === nodes[j].skill.domain) {
          lines.push([nodes[i].basePosition, nodes[j].basePosition])
        }
      }
    }
    return lines
  }, [nodes])

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} intensity={1.1} />
      <pointLight position={[-6, -4, -4]} intensity={0.5} color="#38bdf8" />
      <group ref={groupRef}>
        {edges.map(([a, b], i) => {
          const geometry = new THREE.BufferGeometry().setFromPoints([a, b])
          return (
            <line key={i}>
              <bufferGeometry attach="geometry" {...geometry} />
              <lineBasicMaterial
                attach="material"
                color="#38bdf8"
                transparent
                opacity={0.08}
              />
            </line>
          )
        })}
        {nodes.map((node) => {
          const isActive = activeId === node.skill.id
          const dimmed =
            (highlightDomain !== null &&
              node.skill.domain !== highlightDomain) ||
            (activeId !== null && !isActive)
          return (
            <SkillNode
              key={node.skill.id}
              node={node}
              active={isActive}
              dimmed={dimmed && !isActive}
              reducedMotion={reducedMotion}
              onHover={onHover}
              onSelect={onSelect}
            />
          )
        })}
      </group>
    </>
  )
}

export function SkillsGraph({
  selected,
  onSelect,
  onHover,
  highlightDomain = null,
  className,
}: {
  selected: string | null
  onSelect: (id: string | null) => void
  onHover?: (id: string | null) => void
  highlightDomain?: string | null
  className?: string
}) {
  const [hovered, setHovered] = useState<string | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  const handleHover = (id: string | null) => {
    setHovered(id)
    onHover?.(id)
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = () => setReducedMotion(mq.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 2]}
        onPointerMissed={() => onSelect(null)}
        gl={{ antialias: true, alpha: true }}
      >
        <GraphScene
          hovered={hovered}
          selected={selected}
          highlightDomain={highlightDomain}
          reducedMotion={reducedMotion}
          onHover={handleHover}
          onSelect={(id) => onSelect(id)}
        />
      </Canvas>
    </div>
  )
}
