// To address the issues you're facing with your Three.js particle image rendering, you need to make a couple of adjustments. I'll provide you with a modified version of your code that aims to do the following:

// 1. **Fix the pixelation issue:** This usually can be resolved by increasing the resolution of the canvas or ensuring that the texture is loaded in high quality.
// 2. **Position the rendered image to the right of the viewport:** This can be done by adjusting the camera position or modifying the positions of the particles so they are rendered more towards the right of the scene.

// Here's the updated code with those adjustments:

// ```javascript
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import heroImage from '../../../public/images/creator1.png';

export function ParticleImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const positionsRef = useRef<{ original: Float32Array; scattered: Float32Array } | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 75;
    camera.position.x = 30; // Move the camera slightly to the right
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Ensure high pixel density
    rendererRef.current = renderer;

    const loader = new THREE.TextureLoader();
    loader.load(heroImage.src, (texture) => {
      const img = texture.image;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      const width = 400; // Increase the width for better resolution
      const height = (img.height / img.width) * width;
      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;

      const positions: number[] = [];
      const colors: number[] = [];
      const scatteredPositions: number[] = [];
      const step = 2;

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const i = (y * width + x) * 4;
          const r = pixels[i] / 255;
          const g = pixels[i + 1] / 255;
          const b = pixels[i + 2] / 255;
          const a = pixels[i + 3] / 255;

          if (a > 0.5) {
            const px = x - width / 2 + 30; // Adjust x position to shift right
            const py = -(y - height / 2);
            const pz = 0;

            positions.push(px * 0.15, py * 0.15, pz);
            colors.push(r, g, b);

            const scatter = 80;
            scatteredPositions.push(
              (Math.random() - 0.5) * scatter,
              (Math.random() - 0.5) * scatter,
              (Math.random() - 0.5) * scatter
            );
          }
        }
      }

      const geometry = new THREE.BufferGeometry();
      const positionArray = new Float32Array(positions);
      const colorArray = new Float32Array(colors);
      const scatteredArray = new Float32Array(scatteredPositions);

      geometry.setAttribute('position', new THREE.BufferAttribute(scatteredArray.slice(), 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

      positionsRef.current = {
        original: positionArray,
        scattered: scatteredArray,
      };

      const material = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      particlesRef.current = particles;

      setTimeout(() => {
        const currentPositions = particles.geometry.attributes.position.array as Float32Array;

        gsap.to(currentPositions, {
          duration: 2.5,
          ease: 'power2.out',
          endArray: Array.from(positionArray),
          onUpdate: () => {
            particles.geometry.attributes.position.needsUpdate = true;
          },
        });

        gsap.to(material, {
          duration: 2,
          opacity: 1,
          ease: 'power2.inOut',
        });
      }, 300);
    });

    const animate = () => {
      requestAnimationFrame(animate);

      if (particlesRef.current) {
        // particlesRef.current.rotation.y += 0.0005; // Uncomment for rotation
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        background: 'transparent',
        position: "relative",
        inset: 0,
        width: "100%",
        height: "500px",
        bottom: 0
      }}
    />
  );
}