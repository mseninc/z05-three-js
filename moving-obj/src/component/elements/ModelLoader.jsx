import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

export const useFbxModel = (path) => {
  const model = useLoader(FBXLoader, path);
  return model;
};

export const useMainTexture = (path) => {
  const texture = useLoader(TextureLoader, path);

  return texture;
};
