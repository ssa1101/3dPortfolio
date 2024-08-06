

import React, { useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

import scene from '../assets/3d/dog.glb'
import { useEffect } from 'react';
const Dog = ({currentAnimation, ...props}) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(()=>{
    console.log(actions);
  },[actions, currentAnimation]);

  return (
    <group {...props} dispose={null}>
      <group position={[1.723, 0.373, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.dog7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.spots}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.nose}
        />
      </group>
    </group>
  )
}

export default Dog;
