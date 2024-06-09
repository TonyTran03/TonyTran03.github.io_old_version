import React, { useEffect, useState } from 'react';
import { Text, Box, RenderTexture, Environment } from '@react-three/drei';
import { PointsMaterial } from 'three';
import { Dotted } from './Dotted';
import { Polaroid } from './Polaroid';
import { Rocketship } from './Rocketship';

export function Name() {
    // Define the material properties for the points
    // const materialProps = { size: 0.05, color: 0x888888 };


    return (
        <>
            <Text 
                position={[15,5, 1]} // Adjust position based on the size and placement of the box
                fontSize={3}
                font={"/public/fonts/Poppins-Regular.ttf"}
            >
                T o n y T r a n🚀

                <meshBasicMaterial color="white">
                    <RenderTexture attach={"map"}>
                            
                        <color attach = "background" args={["white"]}/>
                        <Environment preset ="sunset"/>
                        <Dotted position={[0, 3, -4]}/>
                    </RenderTexture>
                </meshBasicMaterial>
            </Text>

        </>
    );
}
