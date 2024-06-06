import { OrbitControls, ScrollControls, Scroll, Text } from "@react-three/drei";


import { Physics, usePlane, useBox, useSphere } from '@react-three/cannon'
import { Polaroid } from "../../public/three/Polaroid.jsx";
import { Crane } from "../../public/three/Crane.jsx";
import { Dotted } from "../../public/three/Dotted.jsx";
import ModelCloud from "../../public/three/ModelCloud";
import { Circle } from "../../public/three/Circle.jsx";
import { Name } from "../../public/three/Name.jsx";


export const Experience = () => {
    const modelUrl = "./models/crane.glb"; //
    return (
        <>     
            {/* <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /> */}
            <ScrollControls pages={1.2} damping={0.1}>
                <Scroll>
                <Polaroid />
                <>
                // These circles will orbit around the center point
                <Circle position={[60, 3, -8]} r={60} />
                <Circle position={[60, 3, -8]} r={66} rotationSpeed={0.1} rotation={[Math.PI/2 +2.4, 1.2, 0]}/>
                </>
                



                {/* <ModelCloud url={modelUrl} position={[0,0,-1]} /> */}
                <Dotted position={[0,3,-4]}/>
                <Dotted position={[-80,0,-6]}/>
                <Dotted position={[100,0,-6]}/>
                <Name />
                </Scroll>  

                
                <Scroll html>
                   
                </Scroll>
               
            </ScrollControls>
            
            
        </>
    );
};
