import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { TextureLoader } from 'three';

export const loadFbxModel = async () => {
  const loader = new FBXLoader();
  const model = await loader.loadAsync("model/Sakabambas.fbx");
  return model;
};

export const loadMainTexture = async () => {
  const loader = new TextureLoader();
  const texture = await loader.loadAsync("model/Sakabambas.png");
  return texture;
};
