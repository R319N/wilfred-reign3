// "use client"
// import React, { useEffect, useRef, useState } from "react";
// import { Box, Divider, LinearProgress, Stack, Typography } from "@mui/material";
// import { ScrambleText, ScrambleText2 } from "./Texts/ScrambledText/scrambleText";
// import { purple } from "@mui/material/colors";
// import { IncrementalCache } from "next/dist/server/lib/incremental-cache";
// import { fadeIn, staggerContainer } from "@/utils/motion";
// import { motion } from "framer-motion"
// import { styles } from "@/styles/styles";

// const Loading = () => {
//   const [loading, setLoading] = useState(0)
//   const startRef = useRef<number>(0);
//   const animationRef = useRef<number | null>(null)

//   useEffect(() => {

//     const duration = 1800;
//     const startTime = performance.now()
//     const updateCounter = (time: number) => {
//       const elapsedTime = time - startTime
//       const percentage = Math.min((elapsedTime / duration) * 100, 100)

//       setLoading(percentage)
//       if (elapsedTime < duration) {
//         animationRef.current = requestAnimationFrame(updateCounter)
//       }
//     }
//     animationRef.current = requestAnimationFrame(updateCounter)
//     return () => {
//       if (animationRef.current !== null) {
//         cancelAnimationFrame(animationRef.current)
//       }
//     };
//   }, [])
//   const name = "wilfred";
//   const surname = "reign";
//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.25 }}
//     // style={{ margin: "auto", flexDirection: "column" }}
//     >
//       <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100vh" }}>
//         <Box className={loading < 20 ? "gradient-01" :
//           loading < 40 ? "gradient-02" :
//             loading < 60 ? "gradient-03" :
//               loading < 80 ? "gradient-04" :
//                 "gradient-06"} />
//         <div />

//         <Box sx={{ width: "100%", height: "100%", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", }} gap={2}>
//           <motion.div
//             // variants={bo}
//             initial="normal"
//             animate={{ scaleX: 10, scaleY: 5 }}
//             transition={{ delay: 2.5, duration: 4 }}
//             style={{
//               ...styles.center_flex
//             }}
//           >
//             <ScrambleText color="textPrimary" text={name} />
//             &nbsp;
//             <ScrambleText2
//               color={

//                 loading === 10 ? "#e097547" :
//                   loading === 20 ? "#56789e" :
//                     loading === 30 ? "#777ccc" :
//                       loading === 40 ? "#e097547" :
//                         loading === 50 ? "#56789e" :
//                           loading === 60 ? "#777ccc" :
//                             purple[400]
//               }
//               text={surname} />
//           </motion.div >
//         </Box>

//         <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "2rem" }}>
//           <Stack gap={2}>
//             {/* <LinearProgress variant="determinate" value={loading} sx={{ width: "300px" }} /> */}
//             <Typography variant="body1" textAlign="right">
//               Loading {Math.round(loading)}%
//             </Typography>
//           </Stack>
//         </Box>
//       </Box>
//     </motion.div>
//   );
// };

// export default Loading;

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Box, Stack, Typography } from "@mui/material";
// import { ScrambleText, ScrambleText2 } from "./Texts/ScrambledText/scrambleText";
// import { purple } from "@mui/material/colors";
// import { gsap } from "gsap";

// const Loading = () => {
//   const [loading, setLoading] = useState(0);

//   const containerRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);

//   // -----------------------
//   // PHASE 1 — LOADING COUNTER
//   // -----------------------
//   useEffect(() => {
//     const duration = 1.8; // seconds

//     const tween = gsap.to(
//       { value: 0 },
//       {
//         value: 100,
//         duration,
//         ease: "power2.out",
//         onUpdate: function () {
//           setLoading(Math.round(this.targets()[0].value));
//         },
//       }
//     );

//     return () => {
//       tween.kill();
//     };
//   }, []);

//   // -----------------------
//   // PHASE 2 — MAIN TEXT ANIMATION
//   // -----------------------
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline();

//       tl.from(textRef.current, {
//         scale: 1,
//         opacity: 0,
//         duration: 1.4,
//         ease: "power3.out",
//       });

//       tl.to(textRef.current, {
//         scaleX: 10,
//         scaleY: 5,
//         duration: 4,
//         delay: 0.4,
//         ease: "power4.inOut",
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const name = "wilfred";
//   const surname = "reign";

//   return (
//     <div ref={containerRef}>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           flexDirection: "column",
//           height: "100vh",
//         }}
//       >
//         {/* BACKGROUND GRADIENT */}
//         <Box
//           className={
//             loading < 20
//               ? "gradient-01"
//               : loading < 40
//                 ? "gradient-02"
//                 : loading < 60
//                   ? "gradient-03"
//                   : loading < 80
//                     ? "gradient-04"
//                     : "gradient-06"
//           }
//         />

//         {/* CENTER TEXT */}
//         <Box
//           sx={{
//             width: "100%",
//             height: "100%",
//             position: "absolute",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           gap={2}
//         >
//           <div ref={textRef} style={{ display: "flex", alignItems: "center" }}>
//             <ScrambleText color="textPrimary" text={name} />
//             &nbsp;
//             <ScrambleText2
//               color={
//                 loading === 10
//                   ? "#e097547"
//                   : loading === 20
//                     ? "#56789e"
//                     : loading === 30
//                       ? "#777ccc"
//                       : loading === 40
//                         ? "#e097547"
//                         : loading === 50
//                           ? "#56789e"
//                           : loading === 60
//                             ? "#777ccc"
//                             : purple[400]
//               }
//               text={surname}
//             />
//           </div>
//         </Box>

//         {/* LOADING PERCENTAGE */}
//         {/* <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "2rem" }}>
//           <Stack gap={2}>
//             <Typography variant="body1" textAlign="right">
//               Loading {loading}%
//             </Typography>
//           </Stack>
//         </Box> */}
//       </Box>
//     </div>
//   );
// };

// export default Loading;
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { ScrambleText, ScrambleText2 } from "./Texts/ScrambledText/scrambleText";
import { purple } from "@mui/material/colors";
import { gsap } from "gsap";

const Loading = () => {
  const [loading, setLoading] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // -----------------------
  // PHASE 1 — LOADING COUNTER
  // -----------------------
  useEffect(() => {
    const duration = 1.8;

    const tween = gsap.to(
      { value: 0 },
      {
        value: 100,
        duration,
        ease: "power2.out",
        onUpdate: function () {
          setLoading(Math.round(this.targets()[0].value));
        },
      }
    );

    return () => {
      tween.kill()
    };
  }, []);

  // -----------------------
  // PHASE 2 + 3 — TEXT ANIMATIONS
  // -----------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // PHASE 2 — INTRO + ZOOM IN
      tl.from(textRef.current, {
        scale: 1,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      });

      tl.to(textRef.current, {
        scaleX: 10,
        scaleY: 5,
        duration: 4,
        delay: 0.4,
        ease: "power4.inOut",
      });

      // -----------------------------------------------------
      // 🔥 PHASE 3 — QUICK SHRINK IN → EXPLOSIVE OUT
      // -----------------------------------------------------
      tl.to(textRef.current, {
        scale: 0.3,           // tight compress
        duration: 0.15,       // very quick
        ease: "power3.in",
      });

      tl.to(textRef.current, {
        scale: 25,            // massive outward blast
        opacity: 0,
        duration: 0.45,
        ease: "power4.out",
      });

      // Fade out whole overlay
      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        pointerEvents: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const name = "wilfred";
  const surname = "reign";

  return (
    <div ref={containerRef}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        {/* BACKGROUND GRADIENT */}
        <Box
          className={
            loading < 20
              ? "gradient-01"
              : loading < 40
                ? "gradient-02"
                : loading < 60
                  ? "gradient-03"
                  : loading < 80
                    ? "gradient-04"
                    : "gradient-06"
          }
        />

        {/* CENTER TEXT */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          gap={2}
        >
          <div ref={textRef} style={{ display: "flex", alignItems: "center" }}>
            <ScrambleText color="textPrimary" text={name} />
            &nbsp;
            <ScrambleText2
              color={
                loading === 10
                  ? "#e097547"
                  : loading === 20
                    ? "#56789e"
                    : loading === 30
                      ? "#777ccc"
                      : loading === 40
                        ? "#e097547"
                        : loading === 50
                          ? "#56789e"
                          : loading === 60
                            ? "#777ccc"
                            : purple[400]
              }
              text={surname}
            />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Loading;
