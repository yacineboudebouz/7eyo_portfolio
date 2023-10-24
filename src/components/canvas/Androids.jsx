import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'


const Androids = (isMobile) => {
  console.log(isMobile);
  const android = useGLTF('./public/android_bug/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={android.scene} scale={isMobile ? 1.5 : 2}
        position={[0, -3.25, -1.5]}

      />
    </mesh>
  )
}

const AndroidCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    setIsMobile(mediaQuery.matches);

    const hendleMediaQuery = (e) => {
      setIsMobile(e.matches);
    }
    mediaQuery.addEventListener('change', hendleMediaQuery)

    return () => {
      mediaQuery.removeEventListener('change', hendleMediaQuery)
    }

  }, [])
  return (
    <Canvas frameloop='demand'
      shadows camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Androids isMobile={isMobile} />

      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default AndroidCanvas