import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { CameraControls } from '@react-three/drei';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import './App.css';

import { DeviceProvider, useDevice } from './DeviceContext';

function App() {
  const { isMobile } = useDevice();

  return (
    <Canvas camera={{ fov: isMobile ? 160 : 150 }}>
      <ambientLight intensity={1.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={2} />
      <pointLight position={[-10, -10, -10]} />
      <Experience />
    </Canvas>
  );
}

function RootApp() {
  return (
    <DeviceProvider>
      <App />
    </DeviceProvider>
  );
}

export default RootApp;
