import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useScroll } from '@react-three/drei';
import * as THREE from 'three';

export function Polaroid(props) {
    const groupRef = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const defaultPosition = useRef(new THREE.Vector3(0, 0, 0)); // Default position of my pointer
    const { width, height } = useThree(state => state.size);
    const scroll = useScroll();

    useEffect(() => {
        const handleMouseMove = (event) => {

          //hover move
            if (isHovered) {
                const x = (event.clientX / width) * 2 - 1;
                const y = -(event.clientY / height) * 2 + 1;
                groupRef.current.position.lerp(new THREE.Vector3(x, y, 0.5), 0.1);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [width, height, isHovered]);  // Include isHovered in the dependencies array

    
    useFrame(() => {
        if (groupRef.current) {
            const rotationY = (scroll.offset * Math.PI * 2); // Rotate based on scroll
            groupRef.current.rotation.z = rotationY;

            const target = isHovered ? new THREE.Vector3(groupRef.current.position.x, groupRef.current.position.y, 0.5) : defaultPosition.current;
            groupRef.current.position.lerp(target, 0.1);
        }
    });

    const { nodes, materials } = useGLTF('./models/polaroid.glb');
    return (
        <group {...props} ref={groupRef} dispose={null}
               onPointerOver={() => setIsHovered(true)}
               onPointerOut={() => setIsHovered(false)}>
            <group rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={3.129} position={[0, 0, -1]}>
                <mesh geometry={nodes.Plane_1.geometry} material={materials.base} />
                <mesh geometry={nodes.Plane_2.geometry} material={materials.image} />
            </group>
        </group>
    );
}

useGLTF.preload('./models/polaroid.glb');
