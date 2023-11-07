import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useFbxModel, useMainTexture } from './ModelLoader';
import Sakabambas from './Sakabambas';
import CameraEvent from './CameraEvent';

function App() { 
  const model = useFbxModel("model/Sakabambas.fbx");
  const texture = useMainTexture("model/Sakabambas.png");

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ fov: 70, far: 5000, near: 0.1}}>
        <CameraEvent />
        <Suspense fallback={null}>
          <ambientLight />
          <Sakabambas model={model} texture={texture} position={[0,0,0]} />
          <Environment preset="forest" background />
          <Sakabambas model={model} texture={texture} position={[0,5,0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
