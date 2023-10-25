import { Suspense,useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
//import Sakabambas from "./Sakabambas";
import Sakabambas from './Sakabambas';
import KeyEvent from './KeyEvent';

import UserCamera from "./UserCamera";

function App() {
  var [pos, setPos] = useState([0, 0, 0]);
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ fov: 70, far: 5000, near: 0.1, position:pos }}>
        <UserCamera pos={pos} />
        <KeyEvent setPos={setPos} />
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
