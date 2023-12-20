import { Suspense, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useFbxModel, useMainTexture } from './ModelLoader';
import MeshObject from './MeshObject';
import CameraEvent from './CameraEvent';

export default function GameScene() {
    const model = useFbxModel("model/Sakabambas.fbx");
  const texture = useMainTexture("model/Sakabambas.png");
  const modelRef = useRef();

    return <>
          <Canvas camera={{ fov: 70, far: 5000, near: 0.1}}>
        <CameraEvent modelRef />
        <Suspense fallback={null}>
          <ambientLight />
          <MeshObject model={model} texture={texture} position={[0,0,0]} ref={modelRef} />
          <Environment preset="forest" background />
        </Suspense>
      </Canvas>
    </>
}
