"use client";

import { Box, Typography } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Economica } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import pxToRem from "@/ui/theme/functions/pxToRem";

gsap.registerPlugin(ScrollTrigger, SplitText);

const economica = Economica({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const paragraph = `
I’m Wilfred Reign — a developer who blends design, motion, and code to build interfaces 
that move with purpose and tell a story.
Welcome to my world of clean visuals, smooth interactions, and thoughtful engineering.
`;

interface HeroProps {
  aboutHeaderRef?: React.RefObject<HTMLElement | null>;
}

const Hero: React.FC<HeroProps> = ({ aboutHeaderRef }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  // useEffect(() => {
  //   // const target = (React.RefObject<HTMLHeadingElement>)?.current || headerRef.current;
  //   // if (!target) return;

  //   gsap.fromTo(
  //     target,
  //     { scaleX: 20, scaleY: 25, opacity: 0 },       // start huge
  //     {
  //       opacity: 0.5,
  //       scale: 1,
  //       duration: 2,   // shrink to normal
  //       ease: "power3.out",
  //       // delay: 0.5,


  //       scrollTrigger: {
  //         trigger: document.body, // scroll linked to whole page
  //         start: "top center",       // animation starts immediately
  //         end: "bottom+=500 top", // adjust scroll distance to control shrink speed
  //         scrub: true,            // smooth scroll-linked scaling
  //       },
  //     }
  //   );
  // }, [ref]);

  useGSAP(() => {
    if (!paragraphRef.current || !backgroundRef.current || !imageRef.current) return;

    const split = new SplitText(paragraphRef.current, { type: "lines" });
    const lines = split.lines;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: false,
      },
    });

    // Paragraph fades up
    tl.to(lines, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.08,
    }, 0);

    // Background gradient fades
    tl.to(backgroundRef.current, { opacity: 0, duration: 1.5, ease: "power3.out" }, 0);

    // Hero image fades
    tl.to(imageRef.current, { opacity: 0.5, duration: 1.5, ease: "power3.out" }, 0);

    // About header fades in and shrinks toward center
    if (aboutHeaderRef?.current) {
      tl.to(aboutHeaderRef.current, {
        opacity: 1,
        scale: 6,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }, 0); // start animation in sync with paragraph
    }
  });


  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        // marginBottom: "-5rem",
        zIndex: 0,
      }}
    >
      {/* Gradient overlay */}
      <Box
        ref={backgroundRef}
        sx={{
          position: "fixed",
          top: 0,
          inset: 0,
          opacity: 0.8,
          backgroundImage: `linear-gradient(45deg, #050c10ff 0%, #12001eff 100%)`,
          zIndex: -1,
        }}
      />

      {/* Hero background image */}
      <Box
        ref={imageRef}
        sx={{
          position: "fixed",
          top: 0,
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: -2,
          opacity: 1,
        }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="hero-bg"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Typography
        variant="h4"
        ref={headerRef}
        sx={{
          transformOrigin: "center center",
          scale: 1,
          textAlign: "center",
          margin: 0,
          opacity: 1,
          position: "fixed", // fix in center
          top: "50%",
          left: "50%",
          fontWeight: "bolder",
          transform: "translate(-50%, -50%) scale(6)",
          zIndex: 10,
          background: "url('/images/hero-bg.png')",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          backgroundSize: "cover",
        }}
      >
        Wil
      </Typography>

      {/* Paragraph */}
      {/* <Box
        ref={wrapperRef}
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          overflow: "visible",
          pb: "8rem",
        }}
      >
        <Typography
          ref={paragraphRef}
          variant="h6"
          component="p"
          className={economica.className}
          sx={{
            fontSize: { xs: pxToRem(16), sm: "1.2rem", md: pxToRem(16) },
            lineHeight: 1.3,
            whiteSpace: "pre-line",
            maxWidth: "50ch",
            textAlign: "center",
            zIndex: 2,
            fontWeight: "regular",
            opacity: 1,
          }}
        >
          {paragraph}
        </Typography>
      </Box> */}
    </Box>
  );
};

export default Hero;
// import { Box, Container, Typography } from "@mui/material";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// import { Economica } from "next/font/google";
// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import pxToRem from "@/ui/theme/functions/pxToRem";
// import ScrollIndicator from "@/ui/ScrollIndicator";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// const economica = Economica({
//   weight: ["700"],
//   subsets: ["latin"],
//   display: "swap",
// });

// const paragraph = `
// I’m Wilfred Reign — a developer who blends design, motion, and code to build interfaces 
// that move with purpose and tell a story.
// Welcome to my world of clean visuals, smooth interactions, and thoughtful engineering.
// `;

// interface HeroProps {
//   aboutHeaderRef?: React.RefObject<HTMLElement | null>;
// }

// const Hero: React.FC<HeroProps> = ({ aboutHeaderRef }) => {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const backgroundRef = useRef<HTMLDivElement>(null);
//   const paragraphRef = useRef<HTMLParagraphElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);
//   const headerRef = useRef<HTMLHeadingElement>(null);
//   const professions = ["web developer", "UI/UX designer"];
//   const textRef = useRef<HTMLParagraphElement>(null);
//   const indexRef = useRef(0);

//   useEffect(() => {
//     const el = textRef.current;
//     if (!el) return;

//     const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

//     professions.forEach((job, i) => {
//       tl.to(el, {
//         duration: 0.8,
//         opacity: 0,
//         y: -5,
//         ease: "power2.inOut",
//         onComplete: () => {
//           indexRef.current = i;
//           el.textContent = professions[indexRef.current];

//           // reset to starting position before animating back in
//           gsap.set(el, { y: 1 });
//         },
//       })
//         .to(el, {
//           duration: 3,
//           opacity: 1,
//           y: 0,
//           ease: "power3.out",
//         });
//     });
//   }, []);


// useGSAP(() => {
//   if (
//     !aboutHeaderRef ||
//     !aboutHeaderRef.current ||
//     !backgroundRef.current ||
//     !headerRef.current ||
//     !textRef.current
//   ) return;

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: aboutHeaderRef.current,
//       start: "top 80%",
//       end: "top 0%",
//       scrub: 1,
//       markers: true,
//     },
//   });

//   tl.to([headerRef.current, textRef.current], {
//     opacity: 0,
//     y: -40,
//     ease: "power3.out",
//   });

//   tl.to(backgroundRef.current, {
//     opacity: 0,
//     ease: "power3.out",
//   });

//   tl.fromTo(
//     aboutHeaderRef.current,
//     { opacity: 0, scale: 0.5 },
//     { opacity: 1, scale: 1, ease: "power3.out" }
//   );
// });




//   return (
//     <Container
//       sx={{
//         width: "100%",
//         height: "100vh",
//         position: "relative",
//         // marginBottom: "-5rem",
//         zIndex: 0,
//       }}
//     >
//       {/* Gradient overlay */}
//       <Box
//         ref={backgroundRef}
//         sx={{
//           position: "fixed",
//           top: 0,
//           inset: 0,
//           opacity: 0.9,
//           backgroundImage: `linear-gradient(45deg, #050c10ff 0%, #12001eff 100%)`,
//           zIndex: -1,
//           backdropFilter: "blur(50px)",
//         }}
//       />

//       {/* Hero background image */}
//       <Box
//         ref={imageRef}
//         sx={{
//           position: "fixed",
//           top: 0,
//           inset: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: -2,
//           opacity: 1,
//         }}
//       >
//         <Image
//           src="/images/hero-bg.png"
//           alt="hero-bg"
//           fill
//           style={{ objectFit: "cover" }}
//         />
//       </Box>
//       <Box
//         ref={wrapperRef}
//         sx={{
//           position: "relative",
//           width: "100%",
//           paddingBottom: "200vh", // <-- ADD THIS
//         }}
//       >
//         <Box
//           sx={{
//             position: "sticky",
//             top: 0,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             width: "100%",
//             height: "100vh",
//             overflow: "hidden",
//           }}
//         >


//           <Typography
//             variant="h4"
//             ref={headerRef}
//             sx={{
//               transformOrigin: "center center",
//               scale: 1,
//               textAlign: "center",
//               margin: 0,
//               opacity: 0.5,
//               
//               // backdropFilter: "blur(10px)",

//               // fix in center
//               // top: "50%",
//               // left: "0%",
//               width: "100%",
//               fontWeight: (theme) => theme.typography.fontWeightBold,
//               fontVariant: "small-caps",
//               // transform: "translate(-50%, -50%) scaleX(1) scaleY(1)",
//               zIndex: 3,
//               background: "url('/images/hero-bg.png')",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               color: "transparent",
//               backgroundSize: "cover",
//               fontSize: { xs: "65px", lg: "170px" }
//             }}
//           >
//             Wilfred Reign
//           </Typography>
//           <Typography
//             variant="h3"
//             textAlign="right"
//             ref={textRef}
//             sx={{
//               background: `linear-gradient(270deg,"#000", "#fff")`,
//               zIndex: 4,
//               // width: "100%",
//               backgroundSize: "cover",
//               fontSize: { xs: "24px", lg: "32px" },
//               align: "right",
//               // pr: "4rem"

//             }}>
//             {professions[0]}.
//           </Typography>
//         </Box>
//       </Box>
//       <ScrollIndicator />
//     </Container>
//   );
// };

// export default Hero;
// Hero.tsx
// Hero.tsx
// Hero.tsx
// "use client";

// import { Box, Typography } from "@mui/material";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const professions = ["web developer", "UI/UX designer"];

// interface HeroProps {
//   aboutSectionRef?: React.RefObject<HTMLDivElement | null>;
// }

// const Hero: React.FC<HeroProps> = ({ aboutHeaderRef }) => {
//   const headerRef = useRef<HTMLHeadingElement>(null);
//   const textRef = useRef<HTMLParagraphElement>(null);
//   const overlayRef = useRef<HTMLDivElement>(null);
//   const rotatingTL = useRef<gsap.core.Timeline | null>(null);


//   useEffect(() => {
//     const el = textRef.current;
//     if (!el) return;

//     // create a repeating timeline
//     rotatingTL.current = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

//     professions.forEach((job, i) => {
//       rotatingTL.current!.to(el, {
//         duration: 0.8,
//         opacity: 0,
//         y: -5,
//         onComplete: () => {
//           el.textContent = professions[i];
//           gsap.set(el, { y: 1 });
//         },
//       }).to(el, {
//         duration: 3,
//         opacity: 1,
//         y: 0,
//       });
//     });
//   }, []);

//   // Scroll-trigger smooth transition
//   useEffect(() => {
//     if (!overlayRef.current || !headerRef.current || !textRef.current || !aboutHeaderRef?.current) return;

//     const triggerEl = aboutHeaderRef.current.parentElement; // the section wrapper

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: triggerEl,
//         start: "top bottom",
//         end: "top top",
//         scrub: 1,
//       },
//     });

//     // Stop the rotating text
//     tl.add(() => { rotatingTL.current?.kill(), 0 });

//     // Fade/move out hero text
//     tl.to([headerRef.current, textRef.current], { opacity: 0, y: -120, ease: "power3.out" }, 0);

//     // Darken overlay
//     tl.to(overlayRef.current, { opacity: 1, ease: "power3.out" }, 0);

//     // Fade/move in About section header
//     tl.fromTo(
//       aboutHeaderRef.current,
//       { opacity: 0, y: 50, scale: 0.5 },
//       { opacity: 1, y: 0, scale: 1, ease: "power3.out" },
//       0.2
//     );
//   }, [aboutHeaderRef]);

//   return (
//     <>
//       {/* Background overlay */}
//       <Box
//         ref={overlayRef}
//         sx={{
//           position: "fixed",
//           inset: 0,
//           background: "#000",
//           opacity: 0.8, // start transparent
//           zIndex: 2,
//         }}
//       />

//       {/* Background image */}
//       <Box sx={{ position: "fixed", inset: 0, zIndex: 1 }}>
//         <Image src="/images/hero-bg.png" alt="hero-bg" fill style={{ objectFit: "cover" }} />
//       </Box>

//       {/* Fixed Hero Text */}
//       <Box
//         sx={{
//           position: "fixed",
//           inset: 0,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           zIndex: 10,
//         }}
//       >
//         <Typography
//           ref={headerRef}
//           sx={{
//             textAlign: "center",
//             opacity: 0.8,
//             lineHeight: 0.8,
//             width: "100%",
//             fontWeight: (theme) => theme.typography.fontWeightBold,
//             fontVariant: "small-caps",
//             // transform: "translate(-50%, -50%) scaleX(1) scaleY(1)",
//             zIndex: 3,
//             background: "url('/images/hero-bg.png')",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             color: "transparent",
//             backgroundSize: "cover",
//             fontSize: { xs: "65px", lg: "170px" }
//           }}
//         >
//           Wilfred Reign
//         </Typography>
//         <Typography
//           ref={textRef}
//           sx={{
//             fontSize: { xs: "18px", lg: "28px" },
//             color: "white",
//           }}
//         >
//           {professions[0]}
//         </Typography>
//       </Box>
//     </>
//   );
// };

// export default Hero;
// "use client";

// import { Box, Typography } from "@mui/material";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);
// const professions = ["web developer", "UI/UX designer"];
// interface HeroProps {
//   aboutSectionRef?: React.RefObject<HTMLDivElement | null>;
// }

// // Hero Component
// const Hero: React.FC<HeroProps> = ({ aboutSectionRef }) => {
//   const headerRef = useRef<HTMLHeadingElement>(null);
//   const textRef = useRef<HTMLParagraphElement>(null);
//   const overlayRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoop = () => {
//       if (video.currentTime >= 6) {
//         video.currentTime = 6;
//         video.play();
//       }
//     };

//     video.addEventListener("timeupdate", handleLoop);

//     return () => video.removeEventListener("timeupdate", handleLoop);
//   }, []);

// // Rotating professions text
// useEffect(() => {
//   const el = textRef.current;
//   if (!el) return;

//   const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
//   professions.forEach((job) => {
//     tl.to(el, {
//       duration: 0.8,
//       opacity: 0,
//       y: -10,
//       ease: "power2.inOut",
//       onComplete: () => { (el.textContent = job) },
//     }).to(el, { duration: 3, opacity: 1, y: 0 });
//   });
// }, []);

//   // Scroll-trigger animation
//   useEffect(() => {
//     if (!overlayRef.current || !headerRef.current || !textRef.current || !aboutSectionRef?.current) return;

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: aboutSectionRef.current,
//         start: "top bottom", // bottom of viewport
//         end: "top top",      // top of viewport
//         scrub: 1,
//         // markers: true, // optional
//       },
//     })
//       // Fade/move hero text out (reversible)
//       .to([headerRef.current, textRef.current], {
//         opacity: 0,
//         y: -120,
//         ease: "power3.out",
//       }, 0)
//       // Darken overlay
//       // .to(overlayRef.current, { opacity: 1, ease: "power3.out" }, 0)
//       // Fade/move About section content in
//       .fromTo(
//         aboutSectionRef.current.querySelector("h1"),
//         { opacity: 0, y: 50, scale: 0.5 },
//         { opacity: 1, y: 0, scale: 1, ease: "power3.out" },
//         0.2
//       );
//   }, [aboutSectionRef]);


//   return (
//     <>
//       {/* Overlay */}
//       <Box
//         ref={overlayRef}
//         sx={{
//           position: "fixed",
//           inset: 0,
//           background: "#000",
//           opacity: 0.7, // start transparent
//           zIndex: 2,
//         }}
//       />

//       {/* Background image */}
//       <Box sx={{ position: "sticky", inset: 0, zIndex: 1 }}>
//         {/* < video id="heroVideo" autoPlay muted playsInline>
//           <source src="/videos/hero1-bg.mp4" type="video/mp4" />
//         </video> */}
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           playsInline
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         >
//           <source src="/videos/hero1-bg.mp4" type="video/mp4" />
//         </video>   </Box>

//       {/* Hero Text */}

//   );
// };

// export default Hero;

{/* <Box sx={{ height: "100%" }}>
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/videos/heroCosmo.mp4" type="video/mp4" />
        </video>
      </Box> */}