import { useRef, useEffect, useState } from 'react';

export function useMouseRotation() {
  const rotateSpeed = 0.005;
  const isDragging = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseDown = (e) => {
      isDragging.current = true;
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (isDragging.current) {
        const deltaX = e.clientX - prevMousePos.current.x;
        const deltaY = e.clientY - prevMousePos.current.y;
        prevMousePos.current = { x: e.clientX, y: e.clientY };
        setRotation({ x: deltaY * rotateSpeed, y: deltaX * rotateSpeed });
      }
    };

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        setRotation({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (camera) => {
    camera.rotation.y -= rotation.y;
    camera.rotation.x -= rotation.x;
  };
}
