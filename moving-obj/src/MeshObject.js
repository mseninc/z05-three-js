import { Clone } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";

const MeshObject = ({ model, texture, position }) => {
  const modelRef = useRef();
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: texture,
      }),
    [texture]
  );

  useEffect(() => {
    if (!modelRef.current) {
      return;
    }
    modelRef.current.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
      }
    });
  }, [model, material, modelRef]);

  return (
    <Clone
      ref={modelRef}
      object={model}
      material={material}
      position={position}
    />
  );
};

export default MeshObject;
