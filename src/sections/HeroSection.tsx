"use client";

import React from "react";
import Hero from "@/components/hero-components/Hero";

interface HeroProps {
  aboutSectionRef?: React.RefObject<HTMLDivElement | null>;
}

const HeroSection: React.FC<HeroProps> = ({ aboutSectionRef }) => {
  return (
    <section style={{ position: "relative", minHeight: "100vh" }} id="home">
      <Hero />
    </section>
  );
};

export default HeroSection;
