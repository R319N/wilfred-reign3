"use client";
import React, { forwardRef } from "react";
import About from "@/components/about-components/About";

const AboutSection = () => {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <About />
    </section>
  );
};

export default AboutSection;
