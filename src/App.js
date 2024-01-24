import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

import FlightLeg from "./components/FlightLeg";

export default function App() {
  const [gridItems, setGridItems] = useState([]);
  const onClick = () => {
    setGridItems([...gridItems, { text: "new row", id: gridItems.length + 1 }]);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {gridItems.map(() => (
            <Grid xs={12}>
              <FlightLeg />
            </Grid>
          ))}
          <Grid xs={12}>
            <Button onClick={onClick}>Add Flight</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
