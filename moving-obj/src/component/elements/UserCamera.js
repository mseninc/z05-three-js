import { useThree, useFrame } from "@react-three/fiber";

export default function UserCamera({ pos }) {
  const { camera } = useThree();
  
  useFrame(() => {
    camera.position.set(...pos);
    camera.updateProjectionMatrix();
  }, [pos, camera]);

  return null;
}

