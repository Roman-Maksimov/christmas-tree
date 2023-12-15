import { Stack } from "@mui/material";
import { FC } from "react";

import { Tree } from "./Tree/Tree";

export const Scene: FC = () => {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100vh" }}>
      <Tree />
    </Stack>
  );
};
