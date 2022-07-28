import { useFonts } from "expo-font"
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {theme} from './src/styles/theme'

import App from "./src";
import { fonts } from "./src/styles/fonts";

export default function Main() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) return null;
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    
  );
}