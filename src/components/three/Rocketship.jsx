import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export function Rocketship(props) {
    const groupRef = useRef();
    const { nodes, materials, error } = useGLTF('./models/Rocketship.glb');
    const { size } = useThree();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const currentPosition = useRef({ x: 0, y: 0 });

    // Check for loading errors
    if (error) {
        console.error("Failed to load the model:", error);
        return null; // or render an error message
    }

    // Update mouse position on pointer move
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: ((event.clientX / window.innerWidth) * 2 - 1),
                y: -(event.clientY / window.innerHeight) * 2 + 1
            });
        };

        window.addEventListener('pointermove', handleMouseMove);
        return () => window.removeEventListener('pointermove', handleMouseMove);
    }, []);

    useFrame((state) => {
        const targetX = mousePosition.x * size.width / 25;  // Normalizing mouse x
        const targetY = mousePosition.y * (size.height) / 25; // Normalizing mouse y

        // Interpolation factor, closer to 1 makes the movement faster
        const lerpFactor = 0.05;

        if (groupRef.current) {
            currentPosition.current.x += (targetX - currentPosition.current.x) * lerpFactor;
            currentPosition.current.y += (targetY - currentPosition.current.y) * lerpFactor;

            // Calculate the angle to rotate towards
            const angle = Math.atan2(
                currentPosition.current.y - groupRef.current.position.y,
                currentPosition.current.x - groupRef.current.position.x
            );

            // Apply rotation and position
            groupRef.current.rotation.z = angle + Math.PI / 2; // Adjusting by π/2 depending on initial model orientation
            groupRef.current.position.set(currentPosition.current.x, currentPosition.current.y,0); // Adjust z-position if needed
        }
    });

    return (
        <group ref={groupRef} {...props} dispose={null} rotation={[-Math.PI , -Math.PI, 0]} scale={0.2}>
            <mesh geometry={nodes.Rocket_Ship_Circle003_1.geometry} material={materials.F44336} />
            <mesh geometry={nodes.Rocket_Ship_Circle003_1_1.geometry} material={materials.FFFFFF} />
            <mesh geometry={nodes.Rocket_Ship_Circle003_1_2.geometry} material={materials['455A64']} />
            <mesh geometry={nodes.Rocket_Ship_Circle003_1_3.geometry} material={materials['78909C']} />
            <mesh geometry={nodes.Rocket_Ship_Circle003_1_4.geometry} material={materials['80DEEA']} />
        </group>
    );
}
