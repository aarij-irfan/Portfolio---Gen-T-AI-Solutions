"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Sphere } from "@react-three/drei"
import type { Mesh } from "three"

function Globe({ ...props }) {
  const meshRef = useRef<Mesh>()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <Sphere
      ref={meshRef}
      args={[1, 64, 64]}
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={hovered ? "#8b5cf6" : "#7c3aed"}
        emissive="#7c3aed"
        emissiveIntensity={0.2}
        roughness={0.4}
        metalness={0.8}
        wireframe
      />
    </Sphere>
  )
}

function Markers() {
  const markers = [
    { position: [0.8, 0.6, 0.5], color: "#06b6d4" },
    { position: [-0.7, 0.3, 0.7], color: "#ec4899" },
    { position: [0.2, -0.8, 0.6], color: "#3b82f6" },
    { position: [-0.3, 0.7, -0.6], color: "#10b981" },
    { position: [0.6, -0.3, -0.7], color: "#f59e0b" },
  ]

  return (
    <>
      {markers.map((marker, index) => (
        <Sphere key={index} args={[0.05, 16, 16]} position={marker.position}>
          <meshStandardMaterial color={marker.color} emissive={marker.color} emissiveIntensity={0.5} />
        </Sphere>
      ))}
    </>
  )
}

export default function GlobeScene() {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Globe />
        <Markers />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
