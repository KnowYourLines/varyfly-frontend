import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { v4 as uuidv4 } from "uuid";

import FlightLeg from "./components/FlightLeg";
import Passengers from "./components/Passengers";

export default function App() {
  const maxNumFlightLegs = 16;
  const [flightLegs, setFlightLegs] = useState([
    { from: null, to: null, date: null, id: uuidv4() },
    { from: null, to: null, date: null, id: uuidv4() },
  ]);
  const [cabinClass, setCabinClass] = useState("economy");
  const [numAdults, setNumAdults] = useState(1);
  const [numTeens, setNumTeens] = useState(0);
  const [numChildren, setNumChildren] = useState(0);
  const [numInfants, setNumInfants] = useState(0);
  const addFlight = () => {
    setFlightLegs([
      ...flightLegs,
      { from: null, to: null, date: null, id: uuidv4() },
    ]);
  };
  const removeFlight = (id) => {
    setFlightLegs(flightLegs.filter((flightLeg) => flightLeg.id !== id));
  };
  const handleFlightLegChange = (flightLegId, from, to, date) => {
    setFlightLegs(
      flightLegs.map((flightLeg) => {
        if (flightLeg.id === flightLegId) {
          return { ...flightLeg, from: from, to: to, date: date.toISOString() };
        } else {
          return flightLeg;
        }
      })
    );
  };
  const changeCabinClass = (newCabinClass) => {
    setCabinClass(newCabinClass);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="100%">
        <Box sx={{ my: "1%" }}>
          <Grid container rowSpacing={2}>
            {flightLegs.map((flightLeg, index) => (
              <Grid xs={12} key={flightLeg.id}>
                <FlightLeg
                  flightLegId={flightLeg.id}
                  from={flightLeg.from}
                  to={flightLeg.to}
                  date={flightLeg.date}
                  flightLegOrder={index}
                  onChange={handleFlightLegChange}
                  onRemove={removeFlight}
                />
              </Grid>
            ))}
            {flightLegs.length < maxNumFlightLegs && (
              <Grid xs={12}>
                <Button variant="contained" onClick={addFlight}>
                  Add Flight
                </Button>
              </Grid>
            )}
            <Grid xs={2}>
              <Passengers
                cabinClass={cabinClass}
                changeCabinClass={changeCabinClass}
                numAdults={numAdults}
                numTeens={numTeens}
                numChildren={numChildren}
                numInfants={numInfants}
                setNumAdults={setNumAdults}
                setNumTeens={setNumTeens}
                setNumChildren={setNumChildren}
                setNumInfants={setNumInfants}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}
