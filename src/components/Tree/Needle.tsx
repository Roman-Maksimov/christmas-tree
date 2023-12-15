import { Box } from "@mui/material";
import { FC } from "react";

export interface NeedleProps {
  size?: [number, number];
}

export const DEFAULT_NEEDLE_SIZE = 20;

export const Needle: FC<NeedleProps> = ({ size }) => {
  return (
    <Box
      sx={(theme) => {
        const height = size
          ? size[0] + Math.round(Math.random() * (size[1] - size[0]))
          : DEFAULT_NEEDLE_SIZE;
        const color =
          theme.palette.green[
            Math.round(Math.random() * (theme.palette.green.length - 1))
          ];

        return {
          borderLeft: "1px solid transparent",
          borderRight: "1x solid transparent",
          borderBottom: `${height}px solid ${color}`,
        };
      }}
    />
  );
};
