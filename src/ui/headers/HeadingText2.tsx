// import { styles } from '@/styles/styles'
// import { Box, Stack, Typography } from '@mui/material'
// import React, { useEffect, useRef } from 'react'
// import { Saira_Stencil_One } from 'next/font/google';
// import pxToRem from '../theme/functions/pxToRem';
// import { useGSAP } from '@gsap/react';
// import { SplitText } from 'gsap/all';
// import { ScrollTrigger } from 'gsap/all';
// import gsap from 'gsap';

// const saira_stencil_one = Saira_Stencil_One({
//     weight: ["400",],
//     subsets: ["latin"],
//     display: "swap",
// });
// gsap.registerPlugin(ScrollTrigger, SplitText)

// const HeadingText2 = () => {
//     const titleRef = useRef<HTMLHeadingElement>(null)
//     const subtitleRef = useRef<HTMLParagraphElement>(null)
//     const wrapperRef = useRef<HTMLDivElement>(null)

//      useEffect(() => {
//         if (!wrapperRef.current || !titleRef.current || !subtitleRef.current) return;

//         const split = new SplitText(subtitleRef.current, { type: "lines" });
//         const lines = split.lines;
//         gsap.fromTo(subtitleRef.current,
//             {
//                 y: 0
//             },
//             {
//                 y: 0,
//                 scrollTrigger: {
//                     trigger: titleRef.current,
//                     start: 'top+=40%',
//                     end: 'bottom+=0%',
//                     pin: true,
//                     scrub: true,
//                     markers:true

//                 }

//             }
//         )
//     }, []);
//     return (
//         <Box
//             ref={wrapperRef}
//             sx={{
//                 ...styles.center_flex,
//                 minHeight: "100vh",
//                 height:"100%"
//             }}

//         >
//             <Stack width={"60%"} alignItems={"center"} gap={2} >
//                 <Typography
//                     ref={subtitleRef}
//                     className={saira_stencil_one.className}
//                     sx={{
//                         ...saira_stencil_one.style,
//                         fontSize: pxToRem(56),
//                         textAlign: "center",
//                         lineHeight: "120%",
//                         textTransform: "capitalize",
//                         background: "linear-gradient(90deg, #00CCFF, #7E78D2)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                     }}

//                 >
//                     More than what I do — it’s <br /> why I do it.
//                 </Typography>
//                 <Typography
//                     sx={{ fontSize: pxToRem(20) }}
//                 >
//                     About Me
//                 </Typography>
//             </Stack>
//             <div className="header-gradient one" />
//             <div className="header-gradient two"></div>
//         </Box>
//     )
// }

// export default HeadingText2

'use client'

import { styles } from '@/styles/styles'
import { Box, Stack, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { Saira_Stencil_One } from 'next/font/google'
import pxToRem from '../theme/functions/pxToRem'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger, SplitText)

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})

const HeadingText2 = () => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)

    useGSAP(
        () => {
            if (!headerRef.current || !subtitleRef.current) return

            const subtitleSplit = new SplitType(subtitleRef.current, {
                types: 'words,chars',
            })
            gsap.to(headerRef.current,
                {
                    opacity: 1,
                    stagger: 0.05,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top",
                        // markers: true,
                        scrub: true,
                    }
                }

            )
            gsap.fromTo(subtitleSplit.words,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 1,
                    ease: 'power4.out',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: 'top+=0%',
                        end: 'bottom-=30%',
                        scrub: true,
                        pin: true,
                        // markers: true
                    },
                })

            // return () => subtitleRef.revert()
        },
        { scope: wrapperRef }
    )

    return (
        <Box
            ref={wrapperRef}
            sx={{
                ...styles.center_flex,
                minHeight: '100vh',
                position: 'relative',

            }}
        >
            <Stack ref={headerRef} width="60%" alignItems="center" sx={{ opacity: 0 }} gap={2}>
                <Typography sx={{ fontSize: pxToRem(20) }}>
                    About Me
                </Typography>
                <Typography
                    ref={subtitleRef}
                    className={sairaStencil.className}
                    sx={{
                        ...sairaStencil.style,
                        fontSize: { xs: pxToRem(24), lg: pxToRem(52) },
                        textAlign: 'center',
                        lineHeight: '120%',
                        textTransform: 'capitalize',
                        background: 'linear-gradient(90deg, #00CCFF, #7E78D2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        overflow: 'hidden', // IMPORTANT for line animation
                    }}
                >
                    More than what I do — it’s <br /> why I do it.
                </Typography>

            </Stack>

            <div className="header-gradient one" />
            <div className="header-gradient two" />
        </Box>
    )
}

export default HeadingText2
