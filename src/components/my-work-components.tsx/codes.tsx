import { useGSAP } from '@gsap/react';
import { Box, Card, Container, Stack, Typography } from '@mui/material'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import HeadingText from '@/ui/headers/HeadingText';
import { styles } from '@/styles/styles';
import myProjects from '@/constants/my-projects';
import PortfolioCard from '@/ui/cards/PortfolioCard';
import { section } from 'framer-motion/client';
import pxToRem from '@/ui/theme/functions/pxToRem';

gsap.registerPlugin(ScrollTrigger);

const MyWork = () => {
  const myWorkRef = React.useRef<HTMLDivElement>(null);
  const portfolioRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const sectionWrapperRef = useRef<HTMLDivElement>(null);

  // useGSAP(() => {

  //   gsap.fromTo(
  //     textWrapperRef.current, {
  //     y: 0
  //   },

  //     {
  //       // y: 10,
  //       scrollTrigger: {
  //         trigger: textWrapperRef.current,
  //         start: "top",
  //         end: "bottom+=300vh",
  //         pin: true,
  //         markers: true

  //       }
  //     }
  //   )

    //   const cards = gsap.utils.toArray<HTMLElement>('.stack-card')
    //   const lastIndex = cards.length - 1

    //   cards.forEach((card, i) => {
    //     card.style.zIndex = String(i + 1)

    //     if (i === 0) return

    //     const prevCard = cards[i - 1]

    //     gsap.fromTo(
    //       prevCard,
    //       {
    //         scale: 1,
    //         y: 0,
    //       },
    //       {
    //         scale: 0.9,          // 🔽 scales DOWN only
    //         y: -20 - i * 5,              // parallax depth
    //         ease: 'none',
    //         scrollTrigger: {
    //           trigger: card,     // 🔑 NEXT card controls the animation
    //           start: 'top+=50%',
    //           end: 'top+=20%',
    //           scrub: true,
    //           markers: true,
    //         },
    //       }
    //     )
    //   })
    //   // 🔑 HANDLE LAST CARD OFFSET
    //   gsap.fromTo(
    //     cards[lastIndex],
    //     {
    //       scale: 1,
    //       y: 0,
    //     },
    //     {
    //       scale: 0.9,          // 🔽 scales DOWN only
    //       y: -50,               // parallax depth
    //       ease: 'none',
    //       scrollTrigger: {
    //         trigger: cards[lastIndex].parentElement!,     // 🔑 NEXT card controls the animation
    //         start: 'top+=50%',
    //         end: 'top+=20%',
    //         scrub: true,
    //         markers: true,
    //       },
    //     }
    //   )
  // }, [])



  return (
    <Box >
      <Container sx={{ ...styles.center_flex, width: "100%", flexDirection: 'column', gap: '10vh' }}>
        <Box
          ref={sectionWrapperRef}
          sx={{ width: { xs: "100%", md: "80%" }, position: 'sticky', py: "0" }}
          gap={5}
        >
          <HeadingText title='My Projects' subtitle='What I have done so far' />
          {/* <Stack
            ref={textWrapperRef}
            sx={{
              ...styles.center_flex,
              height: "100vh",
              position: "sticky",
              top: "0"
            }}
          >
            <Typography variant='h1'
              sx={{
                textTransform: "capitalize",
                fontWeight: "regular",
                fontSize: pxToRem(64)
              }}
            >
              What I have done so far
            </Typography>
            <Typography
              variant='h2'
              sx={{ fontWeight: "regular", fontSize: pxToRem(18) }}
            >
              My Projects
            </Typography>
            <div className='garident-05' />
          </Stack> */}

          {myProjects.map((project, i) => (
            <Box
              className='stack-card'
              key={project.id}
              sx={{
                ...styles.glassOutlinedDark,
                height: '360px',
                minWidth: { xs: '90%', md: '400px' },
                width: "100%",
                mb: '20vh',
                position: 'sticky',
                // inset: 10,
                top: '20vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: "1rem"
              }}
              gap={10}
            >
              <PortfolioCard
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>

  )
}

export default MyWork

