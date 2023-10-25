import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

function KeyEvent() {
  const { camera } = useThree();
  const cameraSpeed = 5;
  const moveDirection = useRef({ left: 0, forward: 0, right: 0, backward: 0 });

  const rotateSpeed = 0.005;
  const isDragging = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseDown = (e) => {
      isDragging.current = true;
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (isDragging.current) {
        const deltaX = e.clientX - prevMousePos.current.x;
        const deltaY = e.clientY - prevMousePos.current.y;
        camera.rotation.y -= deltaX * rotateSpeed;
        camera.rotation.x -= deltaY * rotateSpeed;
        prevMousePos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [camera, rotateSpeed]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'a':
          moveDirection.current.left = 1;
          break;
        case 'w':
          moveDirection.current.forward = 1;
          break;
        case 'd':
          moveDirection.current.right = 1;
          break;
        case 's':
          moveDirection.current.backward = 1;
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key) {
        case 'a':
          moveDirection.current.left = 0;
          break;
        case 'w':
          moveDirection.current.forward = 0;
          break;
        case 'd':
          moveDirection.current.right = 0;
          break;
        case 's':
          moveDirection.current.backward = 0;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    camera.position.x -= cameraSpeed * delta * (moveDirection.current.left -  moveDirection.current.right);
    camera.position.z -= cameraSpeed * delta * (moveDirection.current.forward - moveDirection.current.backward);
  }, []);

  return null;
}

export default KeyEvent;
