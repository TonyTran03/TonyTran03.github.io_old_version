import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useScroll } from '@react-three/drei';
import * as THREE from 'three';

export function Polaroid(props) {


    const { nodes, materials } = useGLTF('./models/polaroid.glb');
    return (
        <group {...props}  dispose={null}
               onPointerOver={() => setIsHovered(true)}
               onPointerOut={() => setIsHovered(false)}>
            <group rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={12} position={[-13, 0, 2]}>
                <mesh geometry={nodes.Plane_1.geometry} material={materials.base} />
                <mesh geometry={nodes.Plane_2.geometry} material={materials.image} />
            </group>
        </group>
    );
}

useGLTF.preload('./models/polaroid.glb');
