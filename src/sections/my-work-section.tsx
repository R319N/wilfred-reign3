'use client'
import React from "react";
import MyWork from "@/components/my-work-components.tsx/MyWork";
import pxToRem from "@/ui/theme/functions/pxToRem";

const MyWorkSection = () => {
  return (
    <section
      id="portfolio"
      style={{ padding: pxToRem(50) }}
    >
      <MyWork />
    </section>
  );
};

export default MyWorkSection;
