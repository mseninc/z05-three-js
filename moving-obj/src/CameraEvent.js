import { useFrame } from '@react-three/fiber';
import { useKeyboardMovement } from './CameraKeyboardEvent';
import { useMouseRotation } from './CameraMouseEvent';
import { Vector3 } from 'three';

export default function CameraEvent() {
  const moveDirection = useKeyboardMovement();
  const rotateCamera = useMouseRotation();

  useFrame((state, delta) => {
    const cameraSpeed = 5;
    const camera = state.camera;
    camera.position.x -= cameraSpeed * delta * (moveDirection.left -  moveDirection.right);
    camera.position.z -= cameraSpeed * delta * (moveDirection.forward - moveDirection.backward);
    rotateCamera(camera);
    /*
    const direction = new Vector3();
    camera.getWorldDirection(direction);
  
    if (moveDirection.forward) {
      camera.position.add(direction.multiplyScalar(cameraSpeed * delta));
    }
    if (moveDirection.backward) {
      camera.position.sub(direction.multiplyScalar(cameraSpeed * delta));
    }
    if (moveDirection.left) {
      direction.cross(camera.up);
      camera.position.sub(direction.multiplyScalar(cameraSpeed * delta));
    }
    if (moveDirection.right) {
      direction.cross(camera.up).negate();
      camera.position.sub(direction.multiplyScalar(cameraSpeed * delta));
    }
    */
  });

  return null;
}
