import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useFbxModel, useMainTexture } from './ModelLoader';
import MeshObject from './MeshObject';
import CameraEvent from './CameraEvent';

function App() { 
  const model = useFbxModel("model/Sakabambas.fbx");
  const texture = useMainTexture("model/Sakabambas.png");
  const sabaModel = useFbxModel("model/masaba/masaba.fbx");
  const sabaTexture = useMainTexture("model/masaba/masaba.png");

  const buriModel = useFbxModel("model/buri/buri.fbx");
  const buriTexture = useMainTexture("model/buri/buri.png");

  const sakeModel = useFbxModel("model/salmon/Salmon.fbx");
  const sakeTexture = useMainTexture("model/salmon/sake_tex.png");

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ fov: 70, far: 5000, near: 0.1}}>
        <CameraEvent />
        <Suspense fallback={null}>
          <ambientLight />
          <MeshObject model={buriModel} texture={buriTexture} position={[0,0,0]} />
          <MeshObject model={sabaModel} texture={sabaTexture} position={[0, 1, 0]} />
          <MeshObject model={model} texture={texture} position={[0,4,0]} />
          <MeshObject model={sakeModel} texture={sakeTexture} position={[0,2,0]} />
          <MeshObject model={model} texture={texture} position={[0,3,0]} />
          <Environment preset="forest" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
