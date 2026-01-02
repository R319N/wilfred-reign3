import pxToRem from '@/ui/theme/functions/pxToRem'
import { Box, Typography } from '@mui/material'
import React from 'react'

const HeroDetails = () => {
    return (
        <Box width={{ xs: "190%", md: "50%" }} marginBottom={{ xs: "0vh", sm: "20vh", xl: "10vh" }}>
            <Typography sx={{
                fontSize: { xs: "12px", sm: "28px", xl: "18px", lineHeight: 0.5 }
            }} textTransform={"none"} textAlign="center" fontWeight={"light"} display={"block"}>
                Hie My Name Is &nbsp;
                <span
                    style={{
                        fontSize: "200%",
                        fontWeight: 700,
                        color: "#777ccc",
                        lineHeight: 1.2,
                        // textTransform: "uppercase",
                        fontVariant: "all-small-caps"
                    }}>
                    wilfred reign
                </span>
                &nbsp;I am a Freelance &nbsp;
                <span style={{
                    fontSize: "200%",
                    fontWeight: 700,
                    color: "#777ccc",
                    lineHeight: 1.2,
                    // textTransform: "uppercase",
                    fontVariant: "all-small-caps"
                }}>
                    Web Developer and UI/UX Designer
                </span>
            </Typography>
        </Box>
    )
}

export default HeroDetails