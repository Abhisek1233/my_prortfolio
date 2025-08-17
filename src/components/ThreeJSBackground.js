import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { useDarkMode } from '../contexts/DarkModeContext';
import * as THREE from 'three';

// Animated Particles Cloud
function AnimatedParticles() {
  const ref = useRef();
  const { isDarkMode } = useDarkMode();
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    const colors = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      // Create spiral galaxy pattern
      const radius = Math.random() * 15 + 5;
      const angle = Math.random() * Math.PI * 4;
      const y = (Math.random() - 0.5) * 10;
      
      positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 2;
      
      // Dynamic colors
      const color = new THREE.Color();
      if (isDarkMode) {
        color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.3);
      } else {
        color.setHSL(0.8 + Math.random() * 0.2, 0.6, 0.4 + Math.random() * 0.4);
      }
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, [isDarkMode]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.1;
      
      // Breathing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        transparent
        opacity={0.8}
        vertexColors
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}

// Floating Geometric Shapes
function FloatingGeometry() {
  const groupRef = useRef();
  const { isDarkMode } = useDarkMode();

  const geometries = useMemo(() => {
    const shapes = [];
    const geometryTypes = ['box', 'sphere', 'octahedron', 'tetrahedron', 'torus'];
    
    for (let i = 0; i < 20; i++) {
      shapes.push({
        type: geometryTypes[Math.floor(Math.random() * geometryTypes.length)],
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 30,
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        scale: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.02 + 0.01,
      });
    }
    return shapes;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      
      groupRef.current.children.forEach((child, index) => {
        child.rotation.x += geometries[index].speed;
        child.rotation.y += geometries[index].speed * 0.7;
        child.position.y += Math.sin(state.clock.elapsedTime + index) * 0.001;
      });
    }
  });

  const getGeometry = (type) => {
    switch (type) {
      case 'box': return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere': return <sphereGeometry args={[0.5, 16, 16]} />;
      case 'octahedron': return <octahedronGeometry args={[0.7]} />;
      case 'tetrahedron': return <tetrahedronGeometry args={[0.8]} />;
      case 'torus': return <torusGeometry args={[0.6, 0.2, 8, 16]} />;
      default: return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <group ref={groupRef}>
      {geometries.map((shape, index) => (
        <Float key={index} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh
            position={shape.position}
            rotation={shape.rotation}
            scale={shape.scale}
          >
            {getGeometry(shape.type)}
            <meshPhongMaterial
              color={isDarkMode ? '#4facfe' : '#9d4edd'}
              transparent
              opacity={0.15}
              wireframe
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Animated Waves
function WaveField() {
  const meshRef = useRef();
  const { isDarkMode } = useDarkMode();

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(50, 50, 100, 100);
    geo.rotateX(-Math.PI / 2);
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array;
      const time = state.clock.elapsedTime;

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        
        positions[i + 1] = Math.sin(x * 0.3 + time) * 0.5 + 
                          Math.sin(z * 0.2 + time * 1.5) * 0.3 +
                          Math.sin((x + z) * 0.1 + time * 0.8) * 0.2;
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -8, 0]}>
      <meshPhongMaterial
        color={isDarkMode ? '#1a1a2e' : '#e8f4f8'}
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

// Orbiting Rings
function OrbitingRings() {
  const groupRef = useRef();
  const { isDarkMode } = useDarkMode();

  const rings = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      radius: 8 + i * 3,
      speed: 0.3 + i * 0.1,
      tilt: (Math.PI / 6) * i,
    }));
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((ring, index) => {
        ring.rotation.z += rings[index].speed * delta;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {rings.map((ring, index) => (
        <group key={index} rotation={[ring.tilt, 0, 0]}>
          <mesh>
            <torusGeometry args={[ring.radius, 0.02, 8, 64]} />
            <meshBasicMaterial
              color={isDarkMode ? '#00d4ff' : '#7209b7'}
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Dynamic Lighting
function DynamicLights() {
  const light1Ref = useRef();
  const light2Ref = useRef();
  const { isDarkMode } = useDarkMode();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.cos(time * 0.5) * 10;
      light1Ref.current.position.z = Math.sin(time * 0.5) * 10;
    }
    
    if (light2Ref.current) {
      light2Ref.current.position.x = Math.cos(time * 0.7 + Math.PI) * 8;
      light2Ref.current.position.z = Math.sin(time * 0.7 + Math.PI) * 8;
    }
  });

  return (
    <>
      <ambientLight intensity={isDarkMode ? 0.2 : 0.4} />
      <pointLight
        ref={light1Ref}
        position={[10, 10, 10]}
        intensity={isDarkMode ? 1.5 : 1}
        color={isDarkMode ? '#4facfe' : '#9d4edd'}
      />
      <pointLight
        ref={light2Ref}
        position={[-10, 10, -10]}
        intensity={isDarkMode ? 1.2 : 0.8}
        color={isDarkMode ? '#00d4ff' : '#7209b7'}
      />
      <spotLight
        position={[0, 20, 0]}
        angle={0.3}
        penumbra={1}
        intensity={isDarkMode ? 0.8 : 0.5}
        castShadow
      />
    </>
  );
}

// Background Stars
function BackgroundStars() {
  return (
    <Stars
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

// Main Three.js Background Component
const ThreeJSBackground = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ 
          position: [0, 0, 15], 
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{
          background: isDarkMode 
            ? 'linear-gradient(to bottom, #0f0f23, #1a1a2e, #16213e)'
            : 'linear-gradient(to bottom, #e8f4f8, #f5f7fa, #ffffff)'
        }}
      >
        {/* Lighting */}
        <DynamicLights />
        
        {/* Background Elements */}
        <BackgroundStars />
        
        {/* 3D Elements */}
        <AnimatedParticles />
        <FloatingGeometry />
        <WaveField />
        <OrbitingRings />
        
        {/* Post-processing effects */}
        <fog 
          attach="fog" 
          args={[
            isDarkMode ? '#0f0f23' : '#e8f4f8', 
            20, 
            100
          ]} 
        />
      </Canvas>
    </div>
  );
};

export default ThreeJSBackground;
