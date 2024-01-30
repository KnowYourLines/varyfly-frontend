import { useState, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import DirectDestinations from "./components/DirectDestinations";
import Origin from "./components/Origin";

export default function App() {
  const [origin, setOrigin] = useState({});
  const [directDestinations, setDirectDestinations] = useState([]);
  const previousController = useRef();
  useEffect(() => {
    if (Object.keys(origin).length > 0) {
      getDirectDestinations();
    } else {
      setDirectDestinations([]);
    }
  }, [origin]);
  const getDirectDestinations = () => {
    if (previousController.current) {
      previousController.current.abort();
    }
    const controller = new AbortController();
    const signal = controller.signal;
    previousController.current = controller;
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/direct-destinations/?city_name=${origin.cityName}&city_iata=${origin.cityIata}&country_iata=${origin.countryIata}`,
      {
        signal: signal,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((cities) => {
        const destinations = cities.map((city) => {
          return {
            cityIata: city.iataCode,
            cityName: city.name,
            countryIata: city.address.countryCode,
            country: city.country,
            state: city.state,
            flightTime: city.estimated_flight_time_hrs_mins,
            flightTimeNum: city.estimated_flight_time_hrs,
          };
        });
        setDirectDestinations(destinations);
      })
      .catch(function (e) {
        console.log(e.message);
      });
  };

  return (
    <Container maxWidth="100%">
      <Box sx={{ my: "1%" }}>
        <Grid container rowSpacing={2}>
          <Grid xs={12}>
            <Origin updateOrigin={setOrigin} />
          </Grid>
          <Grid xs={12}>
            <DirectDestinations
              destinations={directDestinations}
              origin={origin}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
