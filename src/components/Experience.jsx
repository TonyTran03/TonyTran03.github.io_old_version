import { OrbitControls, ScrollControls, Scroll, Text } from "@react-three/drei";


import { Physics, usePlane, useBox, useSphere } from '@react-three/cannon'
import { Polaroid } from "../../public/three/Polaroid.jsx";
import { Crane } from "../../public/three/Crane.jsx";
import { Dotted } from "../../public/three/Dotted.jsx";
export const Experience = () => {
    return (
        <>     
            {/* <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /> */}
            <ScrollControls pages={2} damping={0.1}>
                <Scroll>
                <Polaroid />
                
                <Dotted/>
                <Text position={[0,3,0]} fontSize={2} billboard> T o n y T r a n</Text>
                </Scroll>  

                
                <Scroll html>
                   
                </Scroll>
               
            </ScrollControls>
            
            
        </>
    );
};
