import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const BackgroundShape = () => {
  const meshRef = useRef();
  const { mouse } = useThree();

  useFrame((state) => {
    const { clock } = state;
    if (meshRef.current) {
      // Movimento base constante
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      
      // Reação suave à posição global do mouse (Paralaxe)
      // mouse.x e mouse.y variam de -1 a 1
      const targetRotationX = mouse.y * 0.3;
      const targetRotationY = mouse.x * 0.3;
      
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.05;

      // Distorção dinâmica baseada na velocidade do mouse (opcional, vamos manter simples)
      meshRef.current.distort = THREE.MathUtils.lerp(meshRef.current.distort || 0.4, 0.4 + Math.abs(mouse.x * 0.2), 0.1);
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.4}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0, // Ajustado para ficar visível mas atrás do conteúdo
      pointerEvents: 'none' // Permite clicar nos botões que estão "atrás" visualmente mas na frente no DOM
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <BackgroundShape />
      </Canvas>
    </div>
  );
};

export default Scene3D;
