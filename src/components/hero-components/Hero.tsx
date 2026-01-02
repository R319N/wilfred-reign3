import pxToRem from '@/ui/theme/functions/pxToRem'
import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { ParticleImage } from './ParticleImage'
import { Saira_Stencil_One } from 'next/font/google'

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const Hero = () => {

  return (
    <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", minHeight: "100vh" }}>
      <Box
        sx={{
          position: "relative",
          zIndex: -1,
          height: "100%",
        }}
      >
        <Stack
          sx={{
            position: "absolute",
            bottom: "10rem",
          }}

        >
          <Typography
            sx={{
              ...sairaStencil.style,
              fontSize: { xs: pxToRem(24), lg: pxToRem(128) },
              fontVariant: "all-small-caps",
              fontWeight: "bold",
              lineHeight: "100%",
              letterSpacing: pxToRem(8),
              textWrap: "nowrap",
              background: 'linear-gradient(165deg, #7E78D2 40%, #00CCFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            wilfred reign
          </Typography>
          <Typography sx={{
            textWrap: "nowrap",
            fontSize: {
              xs: pxToRem(14),
              lg: pxToRem(22)
            },
            fontWeight: 500,
            textTransform: "capitalize",
            color: "#FFFFFFCC", marginTop: pxToRem(8)
          }}>
            web developer & designer
          </Typography>
        </Stack>
      </Box>


      {/* <Box>
        <ParticleImage />
      </Box> */}
      <div className="gradient-03" style={{ zIndex: -1 }} />
      <div className="header-gradient two" />
    </Container>
  )
}

export default Hero
