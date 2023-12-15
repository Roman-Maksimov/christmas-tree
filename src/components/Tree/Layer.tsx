import { Box } from "@mui/material";
import { FC } from "react";

import { Branch } from "./Branch";

export interface LayerProps {
  size: number;
  rotate?: number; // deg
}

export const Layer: FC<LayerProps> = ({ size, rotate = 0 }) => {
  return (
    <Box
      sx={{
        width: 256,
        height: 0,
        transform: "rotate3d(1, 0, 0, 60deg)",
      }}
    >
      <Box
        sx={{
          animationName: "rotateLayer",
          animationDuration: "60s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        }}
      >
        {new Array(9).fill(true).map((_, index, arr) => {
          const angle = rotate + (index * 360) / arr.length;

          return (
            <Box
              key={index}
              sx={{
                position: "absolute",
                width: 256,
                transformOrigin: "center",
                transform: `rotate(${angle}deg)`,
                pl: "128px",
              }}
            >
              <Branch size={size} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
