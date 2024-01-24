import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

import FlightLeg from "./components/FlightLeg";

export default function App() {
  const [flightLegs, setFlightLegs] = useState([
    { from: null, to: null, id: 1 },
    { from: null, to: null, id: 2 },
  ]);
  const onClick = () => {
    setFlightLegs([
      ...flightLegs,
      { from: null, to: null, id: flightLegs.length + 1 },
    ]);
  };
  const handleFlightLegChange = (flightLegId, from, to) => {
    setFlightLegs(
      flightLegs.map((flightLeg) => {
        if (flightLeg.id === flightLegId) {
          return { ...flightLeg, from: from, to: to };
        } else {
          return flightLeg;
        }
      })
    );
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {flightLegs.map((flightLeg) => (
            <Grid xs={12} key={flightLeg.id}>
              <FlightLeg
                flightLegId={flightLeg.id}
                from={flightLeg.from}
                to={flightLeg.to}
                onChange={handleFlightLegChange}
              />
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
