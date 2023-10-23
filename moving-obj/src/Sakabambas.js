import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TextureLoader } from "three";
import * as THREE from "three";

// モデルテクスチャ経路
const texture = "model/Sakabambas.png";

// モデル元々オブジェクトにするのが望ましい
const Sakabambas = () => {
  // モデル読み込み  
  const fbx = useLoader(FBXLoader, "model/Sakabambas.fbx");
  // テクスチャ読み込み
  const [colorMap] = useLoader(TextureLoader, [texture]);

    // テクスチャをマテリアルに設定
  const material = new THREE.MeshStandardMaterial({
    map: colorMap
  });

    // モデルのマテリアルを設定
  fbx.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

    // モデルを返す
  return <primitive object={fbx} scale={1} />;
};

export default Sakabambas;
