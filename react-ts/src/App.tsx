import { Canvas } from '@react-three/fiber'
import Box from './Box'
import { Suspense } from 'react'

function App() {

  return (
    <>
      <div>
        <Canvas camera={{ fov: 70, far: 5000, near: 0.1 }}>
          <Suspense fallback={null}>
            <ambientLight />
            <Box position={[0, 0, 0]}/>
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default App
