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
    rotateCamera(camera);
  

    // 現在カメラの向いている方向を取得します。（ワールド基準）
    const direction = new Vector3();
    camera.getWorldDirection(direction);
  
    if (moveDirection.forward) {
      // 前進方向にカメラを移動します。
      camera.position.add(direction.multiplyScalar(cameraSpeed * delta));
    }
    if (moveDirection.backward) {
      // 後退方向にカメラを移動します。
      camera.position.sub(direction.multiplyScalar(cameraSpeed * delta));
    }
    if (moveDirection.left) {
      // Direction を カメラの上方向を基準に 90° 曲げます(時計回り)
      direction.cross(camera.up);
      // 左方向にカメラを移動します。
      camera.position.sub(direction.multiplyScalar(cameraSpeed * delta));
    }
    if (moveDirection.right) {
      // Direction を カメラの上方向を基準に 90° 曲げます(反時計回り)
      direction.cross(camera.up).negate();
      // 右方向にカメラを移動します。
      camera.position.sub(direction.multiplyScalar(cameraSpeed * delta));
    }
    
  });

  return null;
}
