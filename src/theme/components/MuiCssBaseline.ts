import { Components, Theme } from "@mui/material";

export const MuiCssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: {
    body: `
      padding: 0;
      
      @keyframes rotateLayer {
        from {
          transform: rotate(0deg);
        }
    
        to {
          transform: rotate(360deg);
        }
      }
      
      @keyframes shine {
        from {
          left: -40px;
        }
    
        to {
          left: 296px;
        }
      }
    `,
  },
};
