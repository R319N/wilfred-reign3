import React from 'react'
import { motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import { sliderVariantLeft } from '@/utils/motion'
const AnimatedText = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        whiteSpace: "nowrap",
        bottom: {xs:"2px", xl:"10px"},
        opacity: "0.1",
        width: "100%",
        zIndex: 0
      }}
    >
      <motion.div
        variants={sliderVariantLeft}
        initial="initial"
        animate="animate"
      >
        <Box>
          <Typography
            variant="h1"
            color="textPrimary"
            sx={{
              fontSize: {xs:"96px", xl:"120px"},
              whiteSpace: "nowrap",
              fontWeight:"bold"
            }}
          >
            UI/UX Designer. Website Developer.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  )
}

export default AnimatedText
