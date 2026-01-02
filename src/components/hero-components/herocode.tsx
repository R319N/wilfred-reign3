"use client";

import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollIndicator from "@/ui/ScrollIndicator";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero: React.FC = () => {
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const rotatingTextRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const professions = ["web developer", "UI/UX designer"];

  /**
   * Rotating text animation
   */
  useGSAP(() => {
    const el = rotatingTextRef.current;
    if (!el) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    professions.forEach((job) => {
      tl.to(el, {
        opacity: 0,
        y: -20,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          el.textContent = job;
        },
      });

      tl.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, []);

  /**
   * Scroll animation
   */
  useGSAP(() => {
    if (!heroRef.current || !textWrapperRef.current || !overlayRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom",
        scrub: true,
        pin: true,
        // markers: true, // turn ON only for debugging
      },
    });

    tl.to(textWrapperRef.current, {
      y:-100,
      scale: 1.05,
      ease: "power2.out"
    });

    tl.to(
      overlayRef.current,
      {
        opacity: 1,
        scale: 1.2,
        ease: "power2.out",
      },
      "-=0.5" // overlap animation slightly
    );
  }, []);

  return (
    <Box ref={heroRef} sx={{ height: "100vh", position: "relative" }}>
      {/* CENTER TEXT WRAPPER */}
      <Box
        ref={textWrapperRef}
        sx={{
          position: "sticky",
          top: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          zIndex: 3,
        }}
      >
        {/* Main Title */}
        <Typography
          variant="h4"
          sx={{
            transformOrigin: "center",
            textAlign: "center",
            opacity: 0.9,
            width: "100%",
            fontWeight: "bold",
            fontVariant: "small-caps",
            lineHeight: 1,
            background: "url('/images/hero-bg.png')",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "cover",
            fontSize: { xs: "60px", lg: "150px" },
            zIndex: 3,
          }}
        >
          Wilfred Reign
        </Typography>

        {/* Rotating Profession */}
        <Typography
          variant="h3"
          ref={rotatingTextRef}
          sx={{
            fontSize: { xs: "22px", lg: "30px" },
            fontWeight: 500,
            background: "linear-gradient(180deg, #fff, #000)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {professions[0]}
        </Typography>
      </Box>

      <ScrollIndicator />

      {/* Video Background */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100vh",
          zIndex: -2,
          opacity: 0.3,
        }}
      >
        <video
          autoPlay
          muted
          // loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/videos/hero1-bg.mp4" type="video/mp4" />
        </video>
      </Box>

      {/* Dark Overlay */}
      <Box
        ref={overlayRef}
        sx={{
          position: "absolute",
          inset: 0,
          background: (theme)=> theme.palette.background.default,
          opacity: 0,
          zIndex: 5,
        }}
      />
    </Box>
  );
};

export default Hero;
