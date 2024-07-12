import React, { useEffect, useState } from 'react';
import { Text, Box, RenderTexture, Environment } from '@react-three/drei';
import { Dotted } from './Dotted';
import { DeviceProvider, useDevice } from '../../DeviceContext';

export function Name() {

    const { isMobile } = useDevice();
    return (
        <>
            <Text 
                position={isMobile ? [0.5, 12, 1]: [15,5, 1]} // Adjust position based on the size and placement of the box
                fontSize={isMobile ? 2.5: 3}
               
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
