'use client'
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
// import TechStackComponent from "@/components/techStack/TechStackComponent";

const TechStack = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        style={{ margin: "auto", flexDirection: "column" }}
      >

        {/* <TechStackComponent /> */}
      </motion.div>
    </section>
  );
};

export default TechStack;
