"use client";

import { useEffect, useRef } from "react";
import { initScene } from "./initScene";
import { createParticleImage } from "./createParticleImage";
import { animateParticles } from "./animateParticles";
import { Box } from "@mui/material";

export default function ThreeScene() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const { scene, camera, renderer } = initScene(containerRef.current);

        const img = new window.Image();
        img.src = "/images/creator1.png"; // Update path as needed
        img.crossOrigin = "anonymous";
        img.onload = () => {
            const { positions, targetPositions, points } = createParticleImage(scene, img);
            animateParticles(
                renderer,
                scene,
                camera,
                positions,
                targetPositions,
                points
            );
        };

        return () => {
            renderer.dispose();
            containerRef.current?.removeChild(renderer.domElement);
        };
    }, []);


    return (
        <Box
            ref={containerRef}
            className="three-container"
            sx={{
                width: "100vw",
                height: "100vh",
            }}
        />
    )


}
