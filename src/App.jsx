import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { CameraControls } from '@react-three/drei';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import './App.css';
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
