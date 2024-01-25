import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { v4 as uuidv4 } from "uuid";

import FlightLeg from "./components/FlightLeg";

export default function App() {
  const [flightLegs, setFlightLegs] = useState([
    { from: null, to: null, id: uuidv4() },
    { from: null, to: null, id: uuidv4() },
  ]);
  const addFlight = () => {
    setFlightLegs([...flightLegs, { from: null, to: null, id: uuidv4() }]);
  };
  const removeFlight = (id) => {
    console.log(id);
    setFlightLegs(flightLegs.filter((flightLeg) => flightLeg.id !== id));
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
    <Container maxWidth="100%">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
          {flightLegs.map((flightLeg, index) => (
            <Grid xs={12} key={flightLeg.id}>
              <FlightLeg
                flightLegId={flightLeg.id}
                from={flightLeg.from}
                to={flightLeg.to}
                flightLegOrder={index}
                onChange={handleFlightLegChange}
                onRemove={removeFlight}
              />
            </Grid>
          ))}
          <Grid xs={12}>
            <Button onClick={addFlight}>Add Flight</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
