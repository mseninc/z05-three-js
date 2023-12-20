import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

export default function CameraEvent(modelRef) {
  const localPosition = new Vector3(0,5,0);

  useFrame((state, delta) => {
    const camera = state.camera;
    camera.lookAt(localPosition);
  });

  return null;
}
