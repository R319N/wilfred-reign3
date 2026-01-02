import { styles } from '@/styles/styles'
import HeadingText2 from '@/ui/headers/HeadingText2'
import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useRef } from 'react'
import ContactDetails from './ContactDetails'
import pxToRem from '@/ui/theme/functions/pxToRem'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import ContactForm from './ContactForm'

gsap.registerPlugin(ScrollTrigger, SplitText)

const GetInTouch = () => {

    const textRef = useRef<HTMLParagraphElement | null>(null)
    const componentWrapperRef = useRef<HTMLDivElement | null>(null)


    useGSAP(() => {
        if (!textRef.current || !componentWrapperRef.current) return
        const split = new SplitText(textRef.current, {
            type: "words",
        });
        gsap.from(split.words, {
            // yPercent: 100,
            opacity: 0,
            color: '#485670',
            duration: 1,
            ease: 'power4.out',
            stagger: 0.08,
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 40%',
                end: 'bottom-=40%',
                scrub: true,
                // markers: true
            },
        })

        // Pin section (your logic, cleaned)
        ScrollTrigger.create({
            trigger: componentWrapperRef.current,
            start: 'top-=10%',
            end: 'bottom-=80%',
            pin: true,
            // markers: true
        })

        return () => {
            split.revert()
        }
    }, [])

    return (
        <Box ref={componentWrapperRef} sx={{ height: "200vh" }}>
            <Box sx={{ ...styles.center_flex, height: "80vh" }}>
                <Typography
                    ref={textRef}
                    align='center'
                    sx={{ fontSize: { xs: pxToRem(20) }, fontWeight: "regular" }}>
                    Have a project in mind or need a developer to <br />
                    bring your ideas to life? Let’s connect and <br />
                    build something great together—share your <br />
                    idea, and I’ll help turn it into a scalable, fast, <br />
                    and engaging web experience.
                </Typography>
            </Box>
            <Container sx={{ ...styles.between_flex, alignItems:"center" }}>
                <ContactDetails />
                <Box>
                    <ContactForm />
                </Box>
            </Container>

            {/* <Box
                sx={{
                    position: "sticky",
                    inset: 0,
                    width: "100%",
                    height: "100vh",
                    // zIndex: -2,
                    opacity: 0.3,
                }}
            >
                <video
                    // autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                    <source src="/videos/contact.mp4" type="video/mp4" />
                </video>
            </Box>
            hello */}
        </Box>
    )
}

export default GetInTouch