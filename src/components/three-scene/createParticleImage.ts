import * as THREE from 'three';

export type ParticleImageResult = {
  points: THREE.Points;
  positions: Float32Array;
  targetPositions: Float32Array;
};

export function createParticleImage(
  scene: THREE.Scene,
  image: HTMLImageElement
): ParticleImageResult {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  ctx.drawImage(image, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const positions: number[] = [];
  const targetPositions: number[] = [];
  const gap = 2;

  for (let y = 0; y < canvas.height; y += gap) {
    for (let x = 0; x < canvas.width; x += gap) {
      const index = (y * canvas.width + x) * 4;
      const alpha = imageData[index + 3];
      if (alpha > 10) {
        // scattered start
        positions.push(
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 200
        );
        // target image position
        targetPositions.push(
          x - canvas.width / 2,
          -y + canvas.height / 2,
          0
        );
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3)
  );

  const material = new THREE.PointsMaterial({
    color: 0xf5d7a1,
    size: 1.2,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  return {
    points,
    positions: geometry.attributes.position.array as Float32Array,
    targetPositions: new Float32Array(targetPositions),
  };
}
