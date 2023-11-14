import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Sketch = () => {
  const java = useGLTF('./public/java/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="white" />
      <pointLight intensity={1} />
      <spotLight
        angle={0}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <ambientLight intensity={1} />
      <fog attach="fog" args={['white', 0, 40]} />
      <primitive object={java.scene} position-y={0} material={{ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1 }} />
    </mesh>
  );
};


const SketchCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Sketch />
      </Suspense>
    </Canvas>
  )
}

export default SketchCanvas