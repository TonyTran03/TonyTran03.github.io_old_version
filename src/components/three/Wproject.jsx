import React, { useEffect, useState } from 'react';
import { Text, Box, RenderTexture, Environment } from '@react-three/drei';

export function Wproject() {
    // Define the material properties for the points
    // const materialProps = { size: 0.05, color: 0x888888 };


    return (
        <>
            <Text 
                position={[-22,-17, 1]} // Adjust position based on the size and placement of the box
                fontSize={2}
              
            >
                P r o j e c t s

                <meshBasicMaterial color="white">
                    <RenderTexture attach={"map"}>
                            
                        <color attach = "background" args={["white"]}/>

                    </RenderTexture>
                </meshBasicMaterial>
            </Text>
        </>
    );
}
