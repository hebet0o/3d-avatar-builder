import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { UI } from "./components/UI"
function App() {
  return (
    <>
    <UI/>
      <Canvas camera={{
        position: [3, 3, 3],
      }}>

      <color attach="background" args={["#333333"]} />
        <OrbitControls />
          <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]}/>
            <meshStandardMaterial />
          </mesh>
      </Canvas>
    </>
  )
}

export default App
