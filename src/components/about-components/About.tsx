// import { Box, Typography } from '@mui/material'
// import React from 'react'
// import { gsap } from 'gsap';
// import { SplitText } from 'gsap/SplitText';
// import { useGSAP } from '@gsap/react';
// import { g, header } from 'framer-motion/client';
// import { ScrollTrigger } from 'gsap/all';
// import HeadingText from '@/ui/headers/HeadingText';

// gsap.registerPlugin(SplitText, ScrollTrigger);

// const About = () => {

//     const paragraphRef = React.useRef<HTMLParagraphElement>(null);
//     const wrapperRef = React.useRef<HTMLDivElement>(null);
//     const headerRef = React.useRef<HTMLDivElement>(null);
//     const titleRef = React.useRef<HTMLHeadingElement>(null);
//     const aboutRef = React.useRef<HTMLDivElement>(null);

//     return (
//         <Box
//             ref={aboutRef}
//             sx={{
//                 height: '100dvh',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center', alignItems: 'center',
//                 color: '#fff',
//                 paddingX: 4,
//                 zIndex: 2,
//                 width: '100%',
//             }}>

//             {/* 
//             <Box ref={headerRef} sx={{
//                 position: "sticky",
//                 height: '50vh',
//                 width: '100%',
//                 display: 'flex', flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 // backgroundColor: 'yellow',
//             }}>
//                 <Typography ref={titleRef}
//                     variant="h2"
//                     sx={{
//                         scale: 1, fontSize: { xs: '3rem', md: '102px', textWrap: "nowrap", opacity: 0 }
//                     }}
//                 >
//                     About Me
//                 </Typography>*/}

//             <Box ref={wrapperRef} sx={{
//                 position: "sticky",
//                 display: 'flex',
//                 height: '100%',
//                 width: { xs: '100%', md: '100ch' },
//                 justifyContent: 'center', alignItems: 'center',
//                 // backgroundColor: 'teal',
//             }}>


//                 <HeadingText title='welcome to my website' subtitle='about me' />

//                 <Typography ref={paragraphRef} variant="body1" width={{ xs: '100%', md: '180ch' }} textAlign="center">
//                     I’m a passionate and detail-driven web developer with a strong
//                     focus on creating meaningful digital experiences that blend clean
//                     aesthetics with intuitive functionality. Over the years,
//                     I’ve honed my skills across both front-end and back-end technologies,
//                     building everything from elegant user interfaces to fully integrated,
//                     production-ready web applications. I love taking ideas and
//                     turning them into interactive, engaging solutions that not only look good
//                     but also perform seamlessly under real-world conditions.
//                     My approach to development balances creativity and technical discipline
//                     — I enjoy designing smooth animations, crafting responsive layouts,
//                     optimizing performance, and writing code that is both
//                     scalable and maintainable. Curiosity drives me. I’m constantly learning
//                         new tools, frameworks, and best practices to stay ahead in an
//                         ever-evolving industry. Whether I’m experimenting with new animation
//                         libraries, exploring improvements to user experience, or refining
//                         the architecture behind a complex feature, I’m always pushing myself
//                         to grow. Outside of coding, I draw inspiration from design, technology
//                         trends, and photography, which helps me bring a unique visual
//                         perspective into my work. Ultimately, I’m driven by a simple goal:
//                         to build digital experiences that feel effortless, perform beautifully,
//                         and leave a lasting impression.
//                 </Typography>
//             </Box>
//         </Box >

//         // </Box >
//     )
// }

// export default About
// // "use client";

// // import { Box, Typography } from "@mui/material";
// // import React, { useRef } from "react";
// // import gsap from "gsap";
// // import { SplitText } from "gsap/SplitText";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { useGSAP } from "@gsap/react";

// // gsap.registerPlugin(SplitText, ScrollTrigger);

// // const About = () => {
// //   const headerRef = useRef<HTMLDivElement>(null);
// //   const titleRef = useRef<HTMLHeadingElement>(null);

// //   const wrapperRef = useRef<HTMLDivElement>(null);
// //   const paragraphRef = useRef<HTMLParagraphElement>(null);

// //   /**
// //    * TITLE ANIMATION (Smoother + Cinematic)
// //    */
// //   useGSAP(() => {
// //     if (!headerRef.current || !titleRef.current) return;

// //     gsap.fromTo(
// //       titleRef.current,
// //       {
// //         opacity: 0,
// //         y: 0,
// //         scale: 0.95,
// //         filter: "blur(6px)",
// //       },
// //       {
// //         opacity: 1,
// //         y: 0,
// //         scale: 1,
// //         filter: "blur(0px)",
// //         duration: 1.8,
// //         ease: "power3.out",
// //         scrollTrigger: {
// //           trigger: headerRef.current,
// //           start: "top center",
// //           end: "bottom top",
// //           scrub: 1.2,
// //           pin: true,
// //         },
// //       }
// //     );
// //   }, []);

// //   /**
// //    * PARAGRAPH SPLIT-TEXT ANIMATION (smooth staggered lines)
// //    */
// //   useGSAP(() => {
// //     if (!paragraphRef.current) return;

// //     const split = new SplitText(paragraphRef.current, {
// //       type: "lines",
// //       linesClass: "split-line",
// //     });

// //     gsap.from(split.lines, {
// //       opacity: 0,
// //       y: 40,
// //       filter: "blur(6px)",
// //       stagger: 0.25,
// //       duration: 1.2,
// //       ease: "power3.out",
// //       scrollTrigger: {
// //         trigger: wrapperRef.current,
// //         start: "top 80%",
// //         end: "bottom 40%",
// //         scrub: 1,
// //       },
// //     });
// //   }, []);

// //   return (
// //     <Box
// //       sx={{
// //         height: "100%",
// //         minHeight: "100vh",
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         color: "#fff",
// //         paddingX: 4,
// //         gap: 6,
// //       }}
// //     >
// //       {/* TITLE */}
// //       <Box
// //         ref={headerRef}
// //         sx={{
// //           position: "relative",
// //           width: "100%",
// //           textAlign: "center",
// //           paddingTop: "8rem",
// //           paddingBottom: "6rem",
// //         }}
// //       >
// //         <Typography
// //           ref={titleRef}
// //           variant="h2"
// //           sx={{
// //             fontSize: { xs: "2.8rem", md: "6rem" },
// //             fontWeight: "bold",
// //             textWrap: "nowrap",
// //           }}
// //         >
// //           About Me
// //         </Typography>
// //       </Box>

// //       {/* TEXT PARAGRAPH */}
// //       <Box
// //         ref={wrapperRef}
// //         sx={{
// //           maxWidth: "1000px",
// //           textAlign: "center",
// //         }}
// //       >
// //         <Typography
// //           ref={paragraphRef}
// //           variant="body1"
// //           sx={{
// //             fontSize: { xs: "1.1rem", md: "1.25rem" },
// //             lineHeight: 1.8,
// //           }}
// //         >
// //           Hi there! I'm a passionate developer with a love for creating dynamic
// //           and engaging web experiences. With a strong foundation in both
// //           front-end and back-end technologies, I enjoy bringing ideas to life
// //           through code. When I'm not coding, you can find me exploring the
// //           latest tech trends or indulging in my love for photography.
// //         </Typography>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default About;
// "use client"
// import { styles } from '@/styles/styles'
// import HeadingText2 from '@/ui/headers/HeadingText2'
// import pxToRem from '@/ui/theme/functions/pxToRem'
// import { useGSAP } from '@gsap/react'
// import { Box, Container, Typography } from '@mui/material'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'
// import Image from 'next/image'
// import React, { useEffect, useRef } from 'react'

// gsap.registerPlugin(ScrollTrigger)

// const text = `
// I’m a passionate and detail-driven web developer with a strong
// focus on creating meaningful digital experiences that blend clean
// aesthetics with intuitive functionality. Over the years,
// I’ve honed my skills across both front-end and back-end technologies,
// building everything from elegant user interfaces to fully integrated,
// production-ready web applications. I love taking ideas and
// turning them into interactive, engaging solutions that not only look good
// but also perform seamlessly under real-world conditions.
// `

// const About = () => {
//     const componentWrapperRef = useRef<HTMLDivElement | null>(null)  const componentWrapperRef = useRef<HTMLDivElement | null>(null)
//     const textWrapperRef = useRef<HTMLDivElement | null>(null)
//     const textRef = useRef<HTMLParagraphElement | null>(null)


//     useGSAP(() => {
//         if (!textRef.current || !textWrapperRef.current) return
//         const words = textRef.current.querySelectorAll('.word')

//         gsap.fromTo(
//             componentWrapperRef.current,
//             {
//                 y: 0
//             },
//             {
//                 y: 0,
//                 scrollTrigger: {
//                     trigger: componentWrapperRef.current,
//                     start: "top-=20%",
//                     end: "bottom-=60%",
//                     pin: true,
//                     // markers: true

//                 }
//             },
//         )


//         gsap.fromTo(
//             words,
//             { color: '#999', y: 0, opacity: 0 },

//             {
//                 y: 0,
//                 color: '#000',
//                 stagger: 0.05,
//                 opacity: 1,
//                 scrollTrigger: {
//                     trigger: textWrapperRef.current,
//                     start: 'bottom-=80%',
//                     end: 'bottom+=0%',
//                     pin: true,
//                     scrub: true,
//                     markers: true
//                 },
//             }
//         )
//     }, [])
//     return (
//         <Box sx={{ height: "100%" }}>
//             <HeadingText2 />
//             <Box sx={{ ...styles.between_flex }} ref={componentWrapperRef} >
//                 <Box sx={{ height: "80vh", width: "400px", position: "relative", top: "0" }}>
//                     <Image src="/images/creator1.png" alt='creator' fill />
//                 </Box>
//                 <Box ref={textWrapperRef} sx={{ width: "60%", padding: "4rem", height: "100vh" }}>
//                     <Typography ref={textRef} sx={{ fontSize: pxToRem(24), fontWeight: "regular", lineHeight: "160%", opacity: 0.5 }}>
//                         I’m a passionate and detail-driven web developer with a strong
//                         focus on creating meaningful digital experiences that blend clean
//                         aesthetics with intuitive functionality. Over the years,
//                         I’ve honed my skills across both front-end and back-end technologies,
//                         building everything from elegant user interfaces to fully integrated,
//                         production-ready web applications. I love taking ideas and
//                         turning them into interactive, engaging solutions that not only look good
//                         but also perform seamlessly under real-world conditions.
//                         My approach to development balances creativity and technical discipline
//                         — I enjoy designing smooth animations, crafting responsive layouts,

//                     </Typography>
//                 </Box>
//             </Box>

//         </Box>
//     )
// }

// export default About

'use client'

import { styles } from '@/styles/styles'
import HeadingText2 from '@/ui/headers/HeadingText2'
import pxToRem from '@/ui/theme/functions/pxToRem'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const text = `
I’m a passionate web developer with a strong IT background 
and over four years of hands-on experience building modern, 
user-focused digital solutions. I enjoy turning ideas into functional,
well-crafted products, paying close attention to both performance 
and design. Whether I’m working on complex applications or refining 
small details, I’m driven by curiosity, problem-solving, and a constant
desire to improve. I believe great work comes from clarity, consistency,
and a genuine love for what you do.
`

const About = () => {
    const textRef = useRef<HTMLParagraphElement | null>(null)
    const componentWrapperRef = useRef<HTMLDivElement | null>(null)


    useGSAP(() => {
        if (!textRef.current || !componentWrapperRef.current) return
        const split = new SplitText(textRef.current, { type: "lines" });
        const words = textRef.current.querySelectorAll('.word')

        gsap.fromTo(
            componentWrapperRef.current,
            {
                y: 0
            },
            {
                y: 0,
                scrollTrigger: {
                    trigger: componentWrapperRef.current,
                    start: "top-=20%",
                    end: "bottom-=60%",
                    pin: true,
                    // markers: true

                }
            },
        )

        gsap.fromTo(
            words,
            { color: '#485670' },
            {
                color: '#B4BECF',
                stagger: 1,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: true,

                },
            }
        )
    }, [])

    return (
        <Box>
            <HeadingText2 />

            <Box sx={{ ...styles.between_flex, flexDirection: { xs: 'column', lg: "row" } }} ref={componentWrapperRef} >
                <Box sx={{ height: "100vh", width: "700px", position: "relative", }}>
                    <Image src="/images/creator1.png" alt='creator' fill style={{ position: "absolute", left: 0 }} />
                </Box>
                <Box sx={{ width: '100ch', paddingX: '4rem', display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography
                        ref={textRef}
                        textAlign={"left"}
                        sx={{
                            fontSize: pxToRem(24),
                            lineHeight: '160%',
                            whiteSpace:"wrap"
                        }}
                    >
                        {text.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className="word"
                                style={{
                                    marginRight: '0.35rem',
                                    display: 'inline-block',
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </Typography>
                </Box>
                {/* <div className="gradient-03" style={{zIndex:-1}} /> */}
                <div className="gradient-04" style={{zIndex:-1}} />
            </Box>
        </Box>
    )
}

export default About
