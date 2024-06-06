import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { BufferGeometry, PointsMaterial } from 'three';

function ModelCloud({ url, position:[x,y,z] }) {
    const { scene } = useLoader(GLTFLoader, url);

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

    const material = new PointsMaterial({
      color: 'pink',
      size: 0.05,
      sizeAttenuation: false
    });

    return <points geometry={geometry} material={material} position={[x,y,z]} />;
}

export default ModelCloud;
