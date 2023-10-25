import { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Sakabambas = ({ model, texture, position }) => {
  const modelRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const material = new THREE.MeshStandardMaterial({
      map: texture
    });

    model.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
      }
    });

    modelRef.current = model;
    scene.add(model);

    return () => {
      scene.remove(model);
    };
  }, [model, texture, scene]);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(...position);
    }
  }, [position]);

  return null;
};

export default Sakabambas;
