import CitySearch from "./CitySearch";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

export default function FlightLeg({ flightLegId, from, to, onChange }) {
  const changeFrom = (event, newValue) => {
    onChange(flightLegId, newValue, to);
  };
  const changeTo = (event, newValue) => {
    onChange(flightLegId, from, newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={8}>
        <Grid xs={6}>
          <CitySearch inputLabel="From" handleChange={changeFrom} />
        </Grid>
        <Grid xs={6}>
          <CitySearch inputLabel="To" handleChange={changeTo} />
        </Grid>
      </Grid>
    </Box>
  );
}
