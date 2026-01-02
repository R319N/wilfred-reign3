"use client";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import React, { useEffect } from "react";
import uLwandleTheme from "@/ui/theme/uLwandleTheme";
import SmoothScrollProvider from "./providers/smooth-scroll-provider";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {/* <SmoothScrollProvider> */}
          <AppRouterCacheProvider options={{ key: "css" }} {...props}>
            <ThemeProvider theme={uLwandleTheme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        {/* </SmoothScrollProvider> */}
      </body>
    </html>
  );
}
