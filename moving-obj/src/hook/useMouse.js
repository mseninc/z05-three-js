import { useRef, useEffect } from 'react';

export function useMouse() {
  const isLeftDown = useRef(false);
  const isRightDown = useRef(false);

  const prevMousePos = useRef({ x: 0, y: 0 });
  const mouseDelta = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (e.button === 0)
      {
        isLeftDown(true);
      }  
      else if(e.button === 2)
      {
        isRightDown(true);
      }
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (isLeftDown) {
        const deltaX = e.clientX - prevMousePos.current.x;
        const deltaY = e.clientY - prevMousePos.current.y;
        prevMousePos.current = { x: e.clientX, y: e.clientY };
        mouseDelta({ x: deltaY, y: deltaX });
      }
    };

    const handleMouseUp = (e) => {
      if (e.button === 0)
      {
        isLeftDown(false);
      }  
      else if(e.button === 2)
      {
        isRightDown(false);
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

  return () => {
    return { isLeftDown, isRightDown, mouseDelta };
  };
}
