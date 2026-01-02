import * as THREE from "three";

export function createObjects(scene: THREE.Scene) {
  // TEXTURE
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("../../../public/images/creator1.png");

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);

  // GEOMETRY
  const geometry = new THREE.BoxGeometry(1, 1, 1);

  // MATERIAL WITH IMAGE
  const material = new THREE.MeshStandardMaterial({
    map: texture,
  });

  const cube = new THREE.Mesh(geometry, material);

  // LIGHTS
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

  // ADD TO SCENE
  scene.add(cube, directionalLight, ambientLight);

  return {
    cube,
  };
}
