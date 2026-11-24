import { useLayoutEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Html, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

const TECH = [['Java', [-3.1, 1.5, 0.5]], ['JavaScript', [3.2, 1.7, 0]], ['React', [-3.4, -0.4, 1]], ['MySQL', [3.4, -0.2, 1]], ['HTML', [-1.6, 2.5, -0.5]], ['CSS', [1.8, 2.6, -0.3]]]
const SNIPPETS = [['System.out.println("Hello");', [-3.2, -1.7, 1.2]], ['SELECT * FROM parcels;', [3.0, -1.7, 1.0]]]

function Monitor() {
  const tex = useMemo(() => {
    const c = document.createElement('canvas'); c.width = 640; c.height = 380
    const x = c.getContext('2d'); x.fillStyle = '#050b1f'; x.fillRect(0, 0, 640, 380)
    const cols = ['#22d3ee', '#a78bfa', '#60a5fa', '#e6edf7']
    for (let i = 0; i < 13; i++) {
      const ind = [0, 40, 40, 80][i % 4], w = 70 + ((i * 53) % 200)
      x.globalAlpha = 0.9; x.fillStyle = cols[(i * 3) % 4]; x.fillRect(30 + ind, 30 + i * 26, w, 10)
      x.fillStyle = cols[(i + 1) % 4]; x.fillRect(40 + ind + w, 30 + i * 26, 50 + ((i * 37) % 120), 10)
    }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t
  }, [])
  return (
    <group position={[0, 0.15, 0]}>
      <mesh><boxGeometry args={[3.4, 2.05, 0.12]} /><meshStandardMaterial color="#0a1228" metalness={0.7} roughness={0.3} /></mesh>
      <mesh position={[0, 0, 0.07]}><planeGeometry args={[3.1, 1.75]} /><meshBasicMaterial map={tex} toneMapped={false} /></mesh>
      <mesh position={[0, -0.95, -0.05]}><boxGeometry args={[0.25, 0.8, 0.1]} /><meshStandardMaterial color="#0f1b3d" metalness={0.8} roughness={0.3} /></mesh>
      <mesh position={[0, -1.33, 0]}><boxGeometry args={[1.2, 0.06, 0.7]} /><meshStandardMaterial color="#0f1b3d" metalness={0.8} roughness={0.3} /></mesh>
    </group>
  )
}

function Keyboard() {
  const ref = useRef(), o = useMemo(() => new THREE.Object3D(), []), c = useMemo(() => new THREE.Color(), [])
  useLayoutEffect(() => {
    let i = 0
    for (let r = 0; r < 4; r++) for (let k = 0; k < 12; k++) {
      o.position.set((k - 5.5) * 0.22, 0, (r - 1.5) * 0.22); o.updateMatrix()
      ref.current.setMatrixAt(i, o.matrix); ref.current.setColorAt(i, c.set('#0f1b3d')); i++
    }
    ref.current.instanceMatrix.needsUpdate = true
  }, [o, c])
  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    for (let i = 0; i < 48; i++) {
      const k = i % 12, r = (i / 12) | 0, w = Math.max(0, Math.sin(t * 2.2 - k * 0.55 + r * 0.8))
      ref.current.setColorAt(i, c.setHSL(0.55 + 0.15 * w, 0.9, 0.1 + 0.45 * w))
    }
    ref.current.instanceColor.needsUpdate = true
  })
  return (
    <instancedMesh ref={ref} args={[null, null, 48]} position={[0, -1.19, 0.95]} rotation={[0.06, 0, 0]}>
      <boxGeometry args={[0.19, 0.06, 0.19]} /><meshStandardMaterial color="#ffffff" />
    </instancedMesh>
  )
}

function Desk() {
  return (
    <group>
      <mesh position={[0, -1.4, 0.3]}><boxGeometry args={[6.4, 0.14, 3]} /><meshStandardMaterial color="#0b1430" metalness={0.6} roughness={0.35} /></mesh>
      <mesh position={[0, -1.4, 1.82]}><boxGeometry args={[6.4, 0.03, 0.03]} /><meshBasicMaterial color="#22d3ee" toneMapped={false} /></mesh>
      <mesh position={[1.9, -1.3, 1.0]}><boxGeometry args={[0.2, 0.06, 0.32]} /><meshStandardMaterial color="#0f1b3d" metalness={0.7} roughness={0.3} /></mesh>
    </group>
  )
}

function Rig({ children }) {
  const g = useRef(), { viewport } = useThree(), s = Math.min(1, viewport.width / 6.6)
  useFrame(({ pointer }) => {
    g.current.rotation.y = THREE.MathUtils.lerp(g.current.rotation.y, pointer.x * 0.4 - 0.35, 0.05)
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, -pointer.y * 0.15 + 0.08, 0.05)
  })
  return <group ref={g} scale={s} position={[0, -0.1, 0]}>{children}</group>
}

export default function Workspace3D() {
  return (
    <Canvas camera={{ position: [0, 0.6, 6.5], fov: 45 }} dpr={[1, 1.75]} eventSource={document.body} eventPrefix="client" aria-label="3D developer workspace">
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 4]} intensity={1.5} />
      <pointLight position={[0, 0.3, 2.5]} intensity={30} color="#22d3ee" />
      <pointLight position={[-3, 2, 2]} intensity={25} color="#8b5cf6" />
      <Rig>
        <Monitor /><Keyboard /><Desk />
        {TECH.map(([label, p], i) => (
          <Float key={label} speed={1.5 + i * 0.2} floatIntensity={1.2} rotationIntensity={0.3}>
            <Html position={p} center zIndexRange={[5, 0]}><span className="chip3d">{label}</span></Html>
          </Float>
        ))}
        {SNIPPETS.map(([code, p]) => (
          <Float key={code} speed={1.2} floatIntensity={0.8}>
            <Html position={p} center zIndexRange={[5, 0]}><code className="snippet mono">{code}</code></Html>
          </Float>
        ))}
        <Sparkles count={70} scale={[8, 5, 4]} size={2.2} speed={0.3} color="#67e8f9" />
      </Rig>
    </Canvas>
  )
}
