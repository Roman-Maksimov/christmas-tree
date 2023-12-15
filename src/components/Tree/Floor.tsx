import { Box } from "@mui/material";
import { FC } from "react";

export const Floor: FC = () => {
  return (
    <Box sx={{ position: "absolute" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          height: 0,
          transform: "rotate3d(1, 0, 0, 60deg)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -96,
            width: 256,
            height: 256,
            background: "#F4D71A",
            borderRadius: "50%",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          height: 0,
          transform: "rotate3d(1, 0, 0, 60deg)",
        }}
      >
        <Box
          sx={(theme) => ({
            position: "absolute",
            top: -96,
            width: 256,
            height: 256,
            borderRadius: "50%",
            overflow: "hidden",

            "&::before": {
              content: "''",
              display: "block",
              position: "absolute",
              top: 0,
              left: -40,
              width: 40,
              height: 256,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",

              animationName: "shine",
              animationDuration: "3s",
              animationIterationCount: "infinite",
              animationTimingFunction: theme.transitions.easing.sharp,
            },
          })}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          height: 0,
          transform: "rotate3d(1, 0, 0, 60deg)",
        }}
      >
        <Box
          sx={{
            mt: "-128px",
          }}
        >
          <svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <circle
                id="Oval"
                fill="#F4D71A"
                stroke="#fff"
                cx="128"
                cy="128"
                r="128"
              />
              <path
                d="M59,144.44 L59,134.24 L40.82,128 L59,121.76 L59,111.56 L28.4,122.66 L28.4,133.34 L59,144.44 Z M79.88,149 L79.88,135.56 L97.4,135.56 L97.4,124.88 L79.88,124.88 L79.88,117.68 L99.86,117.68 L99.86,107 L65.72,107 L65.72,149 L79.88,149 Z M114.2,149 L117.02,141.68 L132.98,141.68 L135.8,149 L150.44,149 L132.08,107 L118.16,107 L99.8,149 L114.2,149 Z M129.08,131.48 L120.92,131.48 L125,120.92 L129.08,131.48 Z M176.9,155 L196.7,98.48 L184.7,98.48 L164.9,155 L176.9,155 Z M197,144.44 L227.6,133.34 L227.6,122.66 L197,111.56 L197,121.76 L215.18,128 L197,134.24 L197,144.44 Z"
                id="&lt;FA/&gt;"
                fill="#000000"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </Box>
      </Box>
    </Box>
  );
};
