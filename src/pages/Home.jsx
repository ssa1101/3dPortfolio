import React from 'react'
import {useState, Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from "../models/Island"
import Sky from '../components/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

 {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            POPUP
        </div> */}
        // canvas encases three scene
const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const adjustIslandToScreen = () => {
        let screenScale = null;
        let screenPosition = [0, -1.5, -30];
        let rotation = [-Math.PI/2.2, 0, 0.9];
        if(window.innerWidth < 768){
            screenScale = [0.2, 0.2, 0.2];
        }else {
            screenScale = [0.2,0.2,0.2];
        }
        return [screenScale, screenPosition, rotation]
    }
    const adjustPlaneToScreen = () => {
        let screenScale, screenPosition;
       
        if(window.innerWidth < 768){
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, - 1.5, 0];
        }else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -3.5, -4];
        }
        return [screenScale, screenPosition]
    }

    const [islandScale, islandPosition, rotation] = adjustIslandToScreen();
    const [planeScale, planePosition] = adjustPlaneToScreen();
  return (
    <section className="w-full h-screen relative">
         <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage}/>}
        </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' :'cursor-grab' }`}
       camera={{ near: 0.1, far:1000}}>
           
        <Suspense fallback={<Loader />}>
            {/* <directionalLight position={[1,1,1]} intensity={2}/> */}
            {/* <directionalLight position={[0,-1,0]} intensity={2}/> */}
            <ambientLight intensity={2}/>
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
            {/* <Bird /> */}
            <Sky isRotating={isRotating}/>

            
            <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            />
            <Plane rotation={[0,20,0]}
             isRotating={isRotating}
              scale={planeScale} 
              position={planePosition}/>
            
        </Suspense>

      </Canvas>
        
    </section>
  )
}

export default Home