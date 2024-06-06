import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { BufferAttribute, BufferGeometry, PointsMaterial, Points } from 'three';

export function Dotted({position: [x, y, z]}) {
    // keep a reference to the points mesh
    const pointsRef = useRef();

    const particlesGeometry = useMemo(() => {
        const particlesCnt = 250; // Increased the particle count for better visibility
        const posArray = new Float32Array(particlesCnt * 3);
        for (let i = 0; i < particlesCnt * 3; i++) {
            posArray[i] = (Math.random(2) -0.5) * 100 // Spread out the particles
        }
        const geometry = new BufferGeometry();
        geometry.setAttribute('position', new BufferAttribute(posArray, 3));
        return geometry;
    }, []);

    // useMemo to only create the material once 
    const material = useMemo(() => new PointsMaterial({
        size: 0.005,
        color: 'white' // Added a color for better visibility
    }), []);
    
    // useFrame hook to animate or interact with the scene on every frame
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Example animation: rotate the points
        pointsRef.current.rotation.y = -time / 12;
    });

    return (
        // Rendering the Points as a part of the react-three/fiber scene graph
        <points ref={pointsRef} geometry={particlesGeometry} material={material} position={[x,y,z ]} rotation={[Math.PI / 4,0,0]} />
    );
}
