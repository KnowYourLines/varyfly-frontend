import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import DirectDestinations from "./components/DirectDestinations";
import OriginDestination from "./components/OriginDestination";

export default function App() {
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  const [directDestinations, setDirectDestinations] = useState([]);
  useEffect(() => {
    if (Object.keys(origin).length > 0 || Object.keys(destination).length > 0) {
      getDirectDestinations();
    } else {
      setDirectDestinations([]);
    }
  }, [origin, destination]);
  const getDirectDestinations = () => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/direct-destinations/?origin_city_name=${origin.cityName}&origin_city_iata=${origin.cityIata}&origin_country_iata=${origin.countryIata}&destination_city_name=${destination.cityName}&destination_city_iata=${destination.cityIata}&destination_country_iata=${destination.countryIata}`,
      {
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
            originFlightTime: city.origin_estimated_flight_time_hrs_mins,
            originFlightTimeNum: city.origin_estimated_flight_time_hrs,
            destinationFlightTime:
              city.destination_estimated_flight_time_hrs_mins,
            destinationFlightTimeNum:
              city.destination_estimated_flight_time_hrs,
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
            <OriginDestination
              updateOrigin={setOrigin}
              updateDestination={setDestination}
            />
          </Grid>
          <Grid xs={12}>
            <DirectDestinations
              destinations={directDestinations}
              origin={origin}
              destination={destination}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
