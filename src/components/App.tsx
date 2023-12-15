import { ThemeProvider } from "@mui/material";
import React, { FC } from "react";
import { theme } from "../theme/theme";
import { Tree } from "./Tree";

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Tree />
    </ThemeProvider>
  );
};
