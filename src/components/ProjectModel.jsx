import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import useInView from '../hooks/useInView'

function Parcel() {
  const g = useRef(), ring = useRef()
  useFrame((_, d) => { g.current.rotation.y += d * 0.6; ring.current.rotation.x += d * 1.2 })
  return (
    <Float speed={2} floatIntensity={0.6}>
      <group ref={g} rotation={[0.3, 0, 0]}>
        <mesh><boxGeometry args={[1.5, 1.1, 1.5]} /><meshStandardMaterial color="#c58f4f" roughness={0.8} /></mesh>
        <mesh><boxGeometry args={[0.32, 1.12, 1.52]} /><meshStandardMaterial color="#efe2c8" /></mesh>
        <mesh position={[0, 0.56, 0]}><boxGeometry args={[1.52, 0.02, 0.32]} /><meshStandardMaterial color="#efe2c8" /></mesh>
        <mesh ref={ring}><torusGeometry args={[1.5, 0.025, 8, 64]} /><meshBasicMaterial color="#22d3ee" /></mesh>
      </group>
    </Float>
  )
}

function Doc() {
  const g = useRef(), beam = useRef()
  useFrame(({ clock }) => { const t = clock.elapsedTime; g.current.rotation.y = Math.sin(t * 0.5) * 0.5; beam.current.position.y = Math.sin(t * 1.8) * 0.85 })
  return (
    <Float speed={2} floatIntensity={0.5}>
      <group ref={g}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[i * 0.12 - 0.12, 0, i * 0.18]}>
            <planeGeometry args={[1.4, 1.9]} />
            <meshStandardMaterial color={i === 2 ? '#dbeafe' : '#1e3a8a'} side={THREE.DoubleSide} transparent opacity={i === 2 ? 0.95 : 0.6} />
          </mesh>
        ))}
        {[0, 1, 2, 3, 4, 5].map((k) => (
          <mesh key={k} position={[0.12, 0.55 - k * 0.28, 0.38]}><boxGeometry args={[1 - (k % 3) * 0.2, 0.05, 0.01]} /><meshBasicMaterial color="#2563eb" /></mesh>
        ))}
        <mesh position={[-0.35, 0.75, 0.38]}><boxGeometry args={[0.28, 0.07, 0.01]} /><meshBasicMaterial color="#22d3ee" /></mesh>
        <mesh position={[-0.35, 0.75, 0.38]}><boxGeometry args={[0.07, 0.28, 0.01]} /><meshBasicMaterial color="#22d3ee" /></mesh>
        <mesh ref={beam} position={[0.12, 0, 0.45]}><planeGeometry args={[1.7, 0.06]} /><meshBasicMaterial color="#22d3ee" transparent opacity={0.9} /></mesh>
      </group>
    </Float>
  )
}

// Renders only while visible, so three WebGL canvases stay cheap.
export default function ProjectModel({ kind }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="model" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.6], fov: 40 }} dpr={[1, 1.5]} frameloop={inView ? 'always' : 'never'}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 4]} intensity={1.6} />
        <pointLight position={[-2, 1, 3]} intensity={20} color="#8b5cf6" />
        {kind === 'parcel' ? <Parcel /> : <Doc />}
      </Canvas>
    </div>
  )
}
