
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './components/Experience'


function App() {
  
  return (
    <Canvas
      camera={{fov: 150 }}> // Example adjustment

        <ambientLight intensity = {1.5}/>
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <Experience />
    </Canvas>
  )
}

export default App
