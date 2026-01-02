import { styles } from '@/styles/styles';
import { Box, Typography } from '@mui/material'
import { Silkscreen } from 'next/font/google';
import React from 'react'

const silkscreen = Silkscreen({
    weight: ["400",],
    subsets: ["latin"],
    display: "swap",
});
const Logo = () => {
    return (
       <Box sx={{ ...styles.center_flex, height: "600px", position: "relative" }}>
  {/* Gradient Stroke */}
  <Typography
    sx={{
      ...silkscreen.style,
      fontSize: "128px",
      fontWeight: "bolder",
      position: "absolute",
      background: "linear-gradient(90deg, #00CCFF, #7E78D2)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      WebkitTextStroke: "8px transparent", // thickness
      filter: "blur(0)", // keeps edges crisp
    }}
  >
    w
  </Typography>

  {/* Main Text */}
  <Typography
    sx={{
      ...silkscreen.style,
      fontSize: "128px",
      fontWeight: "bold",
      position: "relative",
      color: "#0e1116cc", // hollow center
      WebkitTextStroke: "1.5px transparent",
      // scaleX:"1.4"
    }}
  >
    w
  </Typography>
</Box>

    )
}

export default Logo