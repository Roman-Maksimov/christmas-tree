import { Box, Stack } from "@mui/material";
import { FC } from "react";

import { Needle } from "./Needle";

export interface BranchProps {
  size?: number;
}

export const DEFAULT_BRANCH_SIZE = 20;

export const Branch: FC<BranchProps> = ({ size = DEFAULT_BRANCH_SIZE }) => {
  return (
    <Stack gap="1px">
      {new Array(2).fill(true).map((_, index) => (
        <Stack
          key={`side-${index}`}
          direction="row"
          alignItems="flex-end"
          gap="1px"
          sx={{
            position: "absolute",
            height: 0,
            transform: `${index === 1 ? "rotateX(180deg)" : ""} skewX(-30deg) `,
          }}
        >
          {new Array(size).fill(true).map((_, index2) => (
            <Needle key={`1-${index}-${index2}`} size={[18, 20]} />
          ))}
          {new Array(5).fill(true).map((_, index2) => (
            <Needle key={`2-${index}-${index2}`} size={[15, 17]} />
          ))}
          {new Array(5).fill(true).map((_, index2) => (
            <Needle key={`3-${index}-${index2}`} size={[12, 14]} />
          ))}

          {new Array(7).fill(true).map((_, index2, arr) => (
            <Box
              key={`4-${index}-${index2}`}
              sx={{
                transformOrigin: "1px 100%",
                transform: `rotate(${(index2 * 90) / arr.length}deg)`,
              }}
            >
              <Needle size={[7, 8]} />
            </Box>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};
