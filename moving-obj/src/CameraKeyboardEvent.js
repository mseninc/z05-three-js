// useKeyboardMovement.js
import { useRef, useEffect } from 'react';

export function useKeyboardMovement() {
  const moveDirection = useRef({ left: 0, forward: 0, right: 0, backward: 0 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'a': moveDirection.current.left = 1; break;
        case 'w': moveDirection.current.forward = 1; break;
        case 'd': moveDirection.current.right = 1; break;
        case 's': moveDirection.current.backward = 1; break;
        default: break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key) {
        case 'a': moveDirection.current.left = 0; break;
        case 'w': moveDirection.current.forward = 0; break;
        case 'd': moveDirection.current.right = 0; break;
        case 's': moveDirection.current.backward = 0; break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return moveDirection.current;
}
