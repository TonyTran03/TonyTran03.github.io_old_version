import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Circle } from '../public/three/Circle';
import { Experience } from './components/Experience';
import { Suspense } from 'react';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);
    const [showContent, setShowContent] = useState(false); // New state for content visibility
    const loaderOpacity = useRef(1);  // Ref for controlling opacity

    useEffect(() => {
        // loading delay
        setTimeout(() => {
            setLoading(false);
            let fadeOutInterval = setInterval(() => {
                if (loaderOpacity.current <= 0) {
                    clearInterval(fadeOutInterval);
                    setShowContent(true); // Set content to show only after loader is fully faded
                } else {
                    loaderOpacity.current -= 0.5;
                }
            }, 2);
        }, 2000);
    }, []);

    return (
        <Canvas camera={{ fov: 150 }}>
            <ambientLight intensity={1.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />


            {loading && (
                <Circle
                    position={[0, 0, 0]}
                    opacity={loaderOpacity.current}
                    r={25}
                />
            )}

            {showContent && (
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            )}
            
        </Canvas>
    );
}

export default App;
