import React from 'react';
import { Text, Box } from '@react-three/drei';
import { PointsMaterial } from 'three';

export function Name() {
    // Define the material properties for the points
    const materialProps = { size: 0.05, color: 0x888888 };

    return (
        <>
            <Text
                position={[-28,14,0]} // Adjust position based on the size and placement of the box
                fontSize={2}

            >
                T o n y T r a n
            </Text>

            //gonna change this for svg
            <Box args={[8, 0.2, 1]} position={[-28,12,0]} rotation={[-5,0,0]}>
                <pointsMaterial attach="material" {...materialProps} />
            </Box>
        </>
    );
}
