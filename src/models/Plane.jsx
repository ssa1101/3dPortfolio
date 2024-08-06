import { useAnimations, useGLTF } from '@react-three/drei'
import React from 'react'
import { useEffect } from 'react'
import {useRef} from 'react'
import planeScene from '../assets/3d/plane.glb'
const Plane = ({isRotating, ...props }) => {
  const ref = useRef(); //ref gives access to actions
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, scene);
  useEffect(()=>{
    if (isRotating){
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  },[actions, isRotating])
  return (
    <mesh {...props} ref={ref}> 
      <primitive object={scene}/>
      </mesh>
  )
}

export default Plane