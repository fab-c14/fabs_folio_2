import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About"; // Make sure this exists!
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Footer from "./Components/Footer";

// Minimalistic dark theme
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#101012",
      paper: "#181c27",
    },
    primary: {
      main: "#eb144c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#8ED1FC",
      contrastText: "#23263a",
    },
    text: {
      primary: "#fff",
      secondary: "#b0b4c1",
    },
  },
  typography: {
    fontFamily: "'Montserrat', 'Roboto', 'Fira Mono', sans-serif",
    h3: { fontWeight: 800, letterSpacing: 2 },
    h5: { fontWeight: 700, letterSpacing: 1 },
    body2: { fontFamily: "'Roboto', 'sans-serif'" },
    caption: { fontFamily: "'Fira Mono', monospace" },
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeroSection />
      <About />      
      <Skills />
      <Works />      
      <Footer />
    </ThemeProvider>
  );
}

export default App;