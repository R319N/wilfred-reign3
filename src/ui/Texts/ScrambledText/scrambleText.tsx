// components/ScrambleText.js

import React, { useState, useEffect } from "react";
// import stylesx from "./ScrambleText.module.css";
import { Box, Typography } from "@mui/material";
import { Poppins } from "next/font/google";
import { styles } from "@/styles/styles";

interface ScrambleTextProps {
  text: string;
  color?: string; // Optional href for wrapping the card with a link
}
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',

});
export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, color }) => {
  const [scrambledText, setScrambledText] = useState("");
  const [scrambling, setScrambling] = useState(true);

  useEffect(() => {
    const scrambleTimer = setTimeout(() => {
      setScrambling(false);
    }, 800); // Stop scrambling after 5 seconds (adjust as needed)

    return () => clearTimeout(scrambleTimer);
  }, []);

  useEffect(() => {
    if (scrambling) {
      const scrambleInterval = setInterval(() => {
        // Scramble the text
        const newText = scrambleText(text);
        setScrambledText(newText);
      }, 100); // Adjust the speed of scrambling

      return () => clearInterval(scrambleInterval);
    } else {
      // Stop scrambling and display the correct text
      setScrambledText(text);
    }
  }, [text, scrambling]);

  const scrambleText = (text: string): string => {
    // Scramble the text by shuffling characters
    const shuffledText = text
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    return shuffledText;
  };

  return (
    <Box>
      <Typography
        className={poppins.className}
        variant="h1"
        sx={{
          ...poppins.style,
          textTransform: "uppercase",
          fontWeight: (theme) => theme.typography.fontWeightBold,
          //  fontSize: { xs: "36px", sm: "100px", xl: "72px" },
          lineHeight: 1,
          backgroundClip: "text",
          textWrap: "nowrap",
          textOverflow: "ellipsis"

        }}
      >
        {scrambledText}

      </Typography>
    </Box>
  );
};

export const ScrambleText2: React.FC<ScrambleTextProps> = ({ text, color }) => {
  const [scrambledText, setScrambledText] = useState("");
  const [scrambling, setScrambling] = useState(true);

  useEffect(() => {
    const scrambleTimer = setTimeout(() => {
      setScrambling(false);
    }, 2000); // Stop scrambling after 5 seconds (adjust as needed)

    return () => clearTimeout(scrambleTimer);
  }, []);

  useEffect(() => {
    if (scrambling) {
      const scrambleInterval = setInterval(() => {
        // Scramble the text
        const newText = scrambleText(text);
        setScrambledText(newText);
      }, 100); // Adjust the speed of scrambling

      return () => clearInterval(scrambleInterval);
    } else {
      // Stop scrambling and display the correct text
      setScrambledText(text);
    }
  }, [text, scrambling]);

  const scrambleText = (text: string): string => {
    // Scramble the text by shuffling characters
    const shuffledText = text
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    return shuffledText;
  };

  return (
    <Box>
      <Typography
        className={poppins.className}
        variant="h1"
        sx={{
          ...poppins.style,
          ...styles.glowingText,
          textShadow:
            "0 0 2px #00f, 0 0 5px #00f, 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 60px #00f",
          animation: "$glow 1s ease-in-out infinite alternate",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "1px #97f0db73",
          // fontSize: { xs: "28px", sm: "100px", xl: "72px" },
        }}
      >
        {scrambledText}
      </Typography>
    </Box>
  );
};

