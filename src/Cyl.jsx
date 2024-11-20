import { Float, Text, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from "three"
import { Group } from 'three/examples/jsm/libs/tween.module.js'

const Cyl = () => {
    const texture=useTexture("./friends.jpg")
    const cylinder=useRef(null)
    useFrame((state,delta)=>{
        cylinder.current.rotation.y+=delta*0.5
    })
  return (
    <group>
    <mesh ref={cylinder} position={[0,0.5,0]}>
        <cylinderGeometry args={[2.5,2.5,2.5,60,60,true]}/>
        <meshStandardMaterial map={texture}transparent side={THREE.DoubleSide}/>
       
      </mesh>
      <Float speed={5}>
      <Text position={[0,-2.2,0]} color="grey"
      fontSize={1.5}
      font=''
      >Brothers
      
      </Text>
      </Float>
      
      </group>
  )
}

export default Cyl