import { Clone } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { useKeyboard } from "../../hook/useKeyboard";

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

  const moveDirection = useKeyboard();
  useFrame((state, delta) => {
    console.log(moveDirection);
    const objectSpeed = 5;
    const direction = new THREE.Vector3();

    modelRef.current.getWorldDirection(direction);

    modelRef.current.rotation.y += 0.01;
    if (moveDirection.forward) {
      // 前進方向にカメラを移動します。
      modelRef.current.position.add(direction.multiplyScalar(objectSpeed * delta));
    }
    if (moveDirection.backward) {
      // 後退方向にカメラを移動します。
      modelRef.current.position.sub(direction.multiplyScalar(objectSpeed * delta));
    }
    if (moveDirection.left) {
      // Direction を カメラの上方向を基準に 90° 曲げます(時計回り)
      direction.cross(modelRef.current.up);
      // 左方向にカメラを移動します。
      modelRef.current.position.sub(direction.multiplyScalar(objectSpeed * delta));
    }
    if (moveDirection.right) {
      // Direction を カメラの上方向を基準に 90° 曲げます(反時計回り)
      direction.cross(modelRef.current.up).negate();
      // 右方向にカメラを移動します。
      modelRef.current.position.sub(direction.multiplyScalar(objectSpeed * delta));
    }
  })
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
