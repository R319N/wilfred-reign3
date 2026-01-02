import * as THREE from "three";

export function animateParticles(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  positions: Float32Array,
  targetPositions: Float32Array,
  points: THREE.Points
) {
  const speed = 0.05;

  function animate() {
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += (targetPositions[i] - positions[i]) * speed;
      positions[i + 1] +=
        (targetPositions[i + 1] - positions[i + 1]) * speed;
      positions[i + 2] +=
        (targetPositions[i + 2] - positions[i + 2]) * speed;
    }

    (points.geometry.attributes.position as THREE.BufferAttribute).needsUpdate =
      true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}
