import React, { useEffect, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { BufferGeometry, PointsMaterial } from 'three';
import { positionGeometry } from 'three/examples/jsm/nodes/Nodes.js';
import { Crane } from './Crane';

function ModelCloud({ url, position= [0, 0, 0] }) {
    const { scene } = useLoader(GLTFLoader, url);
    const pointRef = useRef();

    let geometry = null;
    scene.traverse(child => {
      if (!geometry && child.isMesh) {
        geometry = new BufferGeometry().copy(child.geometry);
      }
    });
    
    if (!geometry) {
      console.error('No geometry found in GLB file.');
      return null;
    }


    React.useEffect(() => {
      if(pointRef.current){
        pointRef.current.position.set(...position);
      }
    }, [scene,position]);
    
    const material = new PointsMaterial({
      color: 'pink',
      size: 15,
      sizeAttenuation: false
    });

    return <points ref={pointRef} geometry={geometry} material={material} scale={1} />;
}

export default ModelCloud;
