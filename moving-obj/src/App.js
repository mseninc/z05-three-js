import { Suspense,useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { loadFbxModel, loadMainTexture } from './ModelLoader';
import Sakabambas from './Sakabambas';
import KeyEvent from './CameraEvent';

function App() {
  const [model, setModel] = useState(null);
  const [texture, setTexture] = useState(null);
  
  useEffect(() => {
    const loadAssets = async () => {
      const loadedModel = await loadFbxModel();
      const loadedTexture = await loadMainTexture();
      setModel(loadedModel);
      setTexture(loadedTexture);
    };

    loadAssets();
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ fov: 70, far: 5000, near: 0.1}}>
        <KeyEvent />
        <Suspense fallback={null}>
          <ambientLight />
          {model && texture && (
          <Sakabambas model={model} texture={texture} position={[0,0,0]} />
          )}
          {model && texture && (
          <Sakabambas model={model} texture={texture} position={[3,0,0]} />
          )}
          <Environment preset="forest" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
