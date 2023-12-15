import { createTheme } from "@mui/material";

import components from "./components/components";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    green?: string[];
  }

  interface Palette {
    green: string[];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F4D71A",
    },

    green: [
      "#025902",
      "#012801",
      "#0d3a0d",
      "#026702",
      "#155215",
      "#065e06",
      "#466246",
      "#849f84",
      "#698869",
      "#465b46",
      "#849f84",
    ],
  },

  components,
});
