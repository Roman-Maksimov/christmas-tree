import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { FC } from "react";

import { theme } from "../theme/theme";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Scene } from "./Scene";

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Scene />
      <Header />
      <Footer />
    </ThemeProvider>
  );
};
