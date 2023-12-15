import { Box, styled } from "@mui/material";
import { FC } from "react";

import { Floor } from "./Floor";
import { Layer } from "./Layer";

const Container = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: 256,
  marginTop: -128,
  marginLeft: -128,
});

const FLOOR_HEIGHT = 20;

export const Tree: FC = () => {
  return (
    <Box sx={{ position: "absolute", top: "calc(50% + 180px)" }}>
      <Container>
        <Floor />
      </Container>

      <Container sx={{ top: -FLOOR_HEIGHT }}>
        <Layer size={50} rotate={0} />
      </Container>
      <Container sx={{ top: -FLOOR_HEIGHT - 20 }}>
        <Layer size={45} rotate={-15} />
      </Container>
      <Container sx={{ top: -FLOOR_HEIGHT - 40 }}>
        <Layer size={40} rotate={0} />
      </Container>
      <Container sx={{ top: -FLOOR_HEIGHT - 60 }}>
        <Layer size={35} rotate={-15} />
      </Container>
      <Container sx={{ top: -FLOOR_HEIGHT - 80 }}>
        <Layer size={30} rotate={0} />
      </Container>
      <Container sx={{ top: -FLOOR_HEIGHT - 100 }}>
        <Layer size={25} rotate={-15} />
      </Container>
      <Container sx={{ top: -FLOOR_HEIGHT - 120 }}>
        <Layer size={20} rotate={0} />
      </Container>
      <Container sx={{ top: -FLOOR_HEIGHT - 140 }}>
        <Layer size={15} rotate={-15} />
      </Container>
      <Container sx={{ top: -FLOOR_HEIGHT - 160 }}>
        <Layer size={10} rotate={0} />
      </Container>
      <Container sx={{ top: -FLOOR_HEIGHT - 180 }}>
        <Layer size={5} rotate={-15} />
      </Container>
      <Container sx={{ top: -FLOOR_HEIGHT - 200 }}>
        <Layer size={0} rotate={0} />
      </Container>
    </Box>
  );
};
