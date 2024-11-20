import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import "./App.css"
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei'
import * as THREE from "three"
import Cyl from './Cyl'


const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  return (
    <Canvas >
   
    {isMobile && <PerspectiveCamera makeDefault position={[0, 0, 15]} />}
    <OrbitControls/>
    <ambientLight intensity={5}/>
    <Cyl/>
    </Canvas>
  )
}

export default App