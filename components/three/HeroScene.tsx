"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Scene() {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30; // Z
    }
    return positions;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (torusRef.current) {
      torusRef.current.rotation.x += 0.002;
      torusRef.current.rotation.y += 0.003;
    }

    if (sphereRef.current) {
      sphereRef.current.position.y = 1 + Math.sin(time) * 0.5;
      sphereRef.current.rotation.y += 0.005;
      sphereRef.current.rotation.x += 0.002;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
    }

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.current.x * 0.5, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.current.y * 0.3, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#ffffff" />

      <mesh ref={torusRef} position={[3, 0, -2]}>
        <torusKnotGeometry args={[1, 0.3, 200, 16]} />
        <meshStandardMaterial color="#ffffff" wireframe opacity={0.06} transparent />
      </mesh>

      <mesh ref={sphereRef} position={[-3.5, 1, -3]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#ffffff" wireframe opacity={0.04} transparent />
      </mesh>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlesPosition, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.015} color="#ffffff" opacity={0.3} transparent />
      </points>
    </>
  );
}

export default function HeroScene() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsDesktop(true);
    }
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
