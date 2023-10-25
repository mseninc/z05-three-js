import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Sakabambas = ({ model, texture, position }) => {
  const modelRef = useRef();

  const material = new THREE.MeshStandardMaterial({
    map: texture
  });

  useEffect(() => {
    model.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
      }
    });
  }, [model, material]);

  return <primitive object={model} ref={modelRef} position={position} />;
};

export default Sakabambas;
