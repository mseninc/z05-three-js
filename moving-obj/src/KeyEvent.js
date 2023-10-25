import { useEffect } from 'react';

function KeyEvent({ setPos }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'a':
          setPos(prevPos => [prevPos[0] - 1, prevPos[1], prevPos[2]]);
          break;
        case 'w':
          setPos(prevPos => [prevPos[0], prevPos[1], prevPos[2] - 1]);
          break;
        case 'd':
          setPos(prevPos => [prevPos[0] + 1, prevPos[1], prevPos[2]]);
          break;
        case 's':
          setPos(prevPos => [prevPos[0], prevPos[1], prevPos[2] + 1]);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setPos]);

  return null;
}

export default KeyEvent;
