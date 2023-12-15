import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        p: 2,
        width: "100%",
        textAlign: "center",
        bgcolor: "primary.main",
      }}
    >
      <Typography variant="h3">Happy New Year!</Typography>
    </Box>
  );
};
