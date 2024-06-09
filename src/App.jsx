import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Circle } from './components/three/Circle';
import { Experience } from './components/Experience';
import { Suspense } from 'react';
import './App.css';
import { CameraControls } from '@react-three/drei';


function App() {







    return (

       
        <Canvas camera={{ fov: 150 }}>
            
            <ambientLight intensity={1.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
                    
                    <Experience />
                    

             
        </Canvas>

       
    );
}

export default App;
