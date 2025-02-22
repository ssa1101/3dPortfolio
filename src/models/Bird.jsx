import { useGLTF } from '@react-three/drei'
import{ useRef, useEffect }from 'react'
import birdScene from '../assets/3d/bird.glb'
const Bird = () => {
  const { scene, animations} = useGLTF(birdScene);
  return (
    <mesh position={[-.5, 2, .5]} scale={[0.003, 0.003, 0.002]}>
      <primitive object={scene}/>
      </mesh>
  )
}

export default Bird