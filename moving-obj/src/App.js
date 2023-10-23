import { Suspense,useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
//import Sakabambas from "./Sakabambas";
import Sakabambas from './Sakabambas';

import UserCamera from "./UserCamera";

function App() {
  var [pos , SetPos] = useState([0,0,0]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'a':
          SetPos(prevPos => [prevPos[0] - 1, prevPos[1], prevPos[2]]);
          break;
        case 'w':
          SetPos(prevPos => [prevPos[0], prevPos[1], prevPos[2]-1]);
          break;
        case 'd':
          SetPos(prevPos => [prevPos[0] + 1, prevPos[1], prevPos[2]]);
          break;
        case 's':
          SetPos(prevPos => [prevPos[0], prevPos[1], prevPos[2]+1]);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ fov: 70, far: 5000, near: 0.1, position:pos }}>
        <UserCamera pos={pos} />
        <Suspense fallback={null}>
          <ambientLight />
          <Sakabambas />
          <Environment preset="forest" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
