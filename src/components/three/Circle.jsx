import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { BufferAttribute, BufferGeometry, PointsMaterial } from 'three';

export function Circle({ position: [x, y, z], opacity = 1, r, rotationSpeed = 0,  rotation = [0,0,0], maxRotation = Math.PI * 2}) {
    const pointsRef = useRef();
    
    const particlesGeometry = useMemo(() => {
        const particlesCnt = 250; // Number of particles in the circle
        const radius = r; // Radius of the circle
        const posArray = new Float32Array(particlesCnt * 3);
        
        for (let i = 0; i < particlesCnt; i++) {
            const angle = (i / particlesCnt) * Math.PI * 2;
            posArray[i * 3] = radius * Math.cos(angle);
            posArray[i * 3 + 1] = radius * Math.sin(angle);
            posArray[i * 3 + 2] = 0; // Z position remains 0, circle in XY plane
        }
        
        const geometry = new BufferGeometry();
        geometry.setAttribute('position', new BufferAttribute(posArray, 3));
        return geometry;
    }, [r]);

    const material = useMemo(() => new PointsMaterial({
        size: 0.005,
        color: 'white',
        sizeAttenuation: true,
        opacity: opacity,
        transparent: true
    }), [opacity]);


        // Use ref to set rotation on component mount and updates
        React.useEffect(() => {
            if (pointsRef.current) {
                pointsRef.current.rotation.set(...rotation);
            }
        }, [rotation]); // Update rotation 

    // Orbiting logic
    useFrame((state, delta) => {
        if (pointsRef.current) {
            // Incrementally rotate the position around the Z axis
            pointsRef.current.rotation.z -= rotationSpeed * delta;

            // Ensure rotation doesn't exceed maxRotation
            if (pointsRef.current.rotation.z < -maxRotation) {
                pointsRef.current.rotation.z += maxRotation;
            }
        }
    });

    return (
        <points ref={pointsRef} geometry={particlesGeometry} material={material} position={[x, y, z]} />
    );
}
