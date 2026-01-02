
// // import { Box, Paper } from "@mui/material";
// // import RootLayout from "./layout";
// // import Loading from "@/ui/loading";
// // import { useEffect, useRef, useState } from "react";
// // import NavigationBar from "@/components/navigation-components/NavigationBar";
// // import HeroSection from "@/sections/HeroSection";
// // import AboutSection from "@/sections/about-section";

// // export default function Home() {
// //   const [loading, setLoading] = useState(true);
// //   const aboutHeaderRef = useRef<HTMLHeadingElement>(null);
// //   useEffect(() => {
// //     const loadData = async () => {
// //       // Add your asynchronous data loading logic here
// //       // For example, fetch data from an API or perform initial setup
// //       // Simulate a delay (replace this with your actual data loading logic)
// //       await new Promise((resolve) => setTimeout(resolve, 5000));
// //       // Set loading to false once data is loaded
// //       setLoading(false);
// //     };

// //     loadData();
// //   }, []);
// //   return (
// //     <RootLayout>
// //       <Paper
// //         sx={{
// //           minHeight: "100vh",
// //           height: "100%",
// //           width: "100%",
// //           borderRadius: "0",
// //           margin: 0,
// //           bgcolor: "#000000ff",
// //         }}
// //       >
// //         {loading ? (
// //           <Loading />
// //         ) : (
// //           <Box>
// //             <NavigationBar />
// //             <main>
// //               <HeroSection aboutHeaderRef={aboutHeaderRef} />
// //               <AboutSection ref={aboutHeaderRef} />
// //               <section
// //                 style={{
// //                   height: "100vh",
// //                   display: "flex",
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   background: "#0d0d0d",
// //                   position: "relative",
// //                   zIndex: 10,
// //                 }}
// //               >
// //                 <h1
// //                   ref={aboutHeaderRef}
// //                   style={{
// //                     fontSize: "80px",
// //                     opacity: 0,
// //                     transform: "scale(0.5)",
// //                     color: "white",
// //                   }}
// //                 >
// //                   About Me
// //                 </h1>
// //               </section>
// //             </main>
// //           </Box>
// //         )}
// //       </Paper>
// //     </RootLayout>
// //   );
// // }


// import { useEffect, useRef, useState } from "react";
// import NavigationBar from "@/components/navigation-components/NavigationBar";
// import MyWorkSection from "@/sections/my-work-section";
// import Testimonials from "@/sections/testimonials";
// import MyServicesSection from "@/sections/my-services-section";
// import FooterSection from "@/sections/footer-section";
// import HeroSection from "@/sections/HeroSection";
// import AboutSection from "@/sections/about-section";
// import Footer from "@/components/footer-components/Footer";
// import ContactSection from "@/sections/contact-section";


// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const aboutSectionRef = useRef<HTMLDivElement>(null);

//   // useEffect(() => {
//   //   const loadData = async () => {
//   //     await new Promise((resolve) => setTimeout(resolve, 5000));
//   //     setLoading(false);
//   //   };
//   //   loadData();
//   // }, []);

//   return (
//     <RootLayout>
//       <Paper
//         sx={{
//           minHeight: "100vh",
//           width: "100%",
//           borderRadius: 0,
//           margin: 0,
//           background: (theme) => theme.palette.background.default,
//         }}
//       >
//         <Box>
//           <NavigationBar />
//           <main>
//             {/* <HeroSection aboutSectionRef={aboutSectionRef} /> */}
//             {/* <AboutSection /> */}

//             {/* <Container sx={{...styles.center_flex, minHeight:"100vh"}}><PortfolioCard /></Container> */}
//             {/* <AnimatedHeader /> */}
//             <MyServicesSection />
//             <MyWorkSection />
//             <Testimonials />
//             {/* <FooterSection /> */}
//             <ContactSection />

//           </main>
//           <Footer />
//         </Box>
//       </Paper>
//     </RootLayout>
//   );
// }

"use client"
import React from 'react'
import { Box, Container, Paper } from "@mui/material";
import RootLayout from "./layout";
import HeadingText2 from '@/ui/headers/HeadingText2';
import FooterSection from "@/sections/footer-section";
import AboutSection from '@/sections/about-section';
import NavigationBar from '@/components/navigation-components/NavigationBar';
import ContactSection from '@/sections/contact-section';
import MyWorkSection from '@/sections/my-work-section';
import Testimonials from '@/sections/testimonials';
// import { ParticleImage } from '@/components/hero-components/ParticleImage';
import ThreeScene from '@/components/three-scene/threeScene';
import { ParticleImage } from '@/components/hero-components/ParticleImage';
import Hero from '@/components/hero-components/Hero';
import HeroSection from '@/sections/HeroSection';
import { ThreePreloader } from '@/components/ThreePreloader';

const Home = () => {

  const [preloaderComplete, setPreloaderComplete] = React.useState(false);

  return (
    <RootLayout>
 
      <Paper
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          borderRadius: 0,
          margin: 0,
          p: 0,
          overflow: "hidden",
          background: (theme) => theme.palette.background.default,
        }}
      >
       <ThreePreloader
          particleCount={35000}
          minimumLoadTime={2500}
          onComplete={() => setPreloaderComplete(true)}
        />

        <main className={`relative transition-opacity bg-black duration-1000 ${preloaderComplete ? 'opacity-100' : 'opacity-0'
          }`} style={{ zIndex: 20 }}>
          <NavigationBar />
          <HeroSection />
          <AboutSection />
          <MyWorkSection />
          <Testimonials />
          <ContactSection />
          <FooterSection />
        </main>
        {/*
        <main>
          <HeroSection />
          <AboutSection />
          <MyWorkSection />
           <Testimonials/> 
          <ContactSection />
          <FooterSection /> */}
        {/* </main> */}
      </Paper>
    </RootLayout>
  )
}

export default Home