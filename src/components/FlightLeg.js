import CitySearch from "./CitySearch";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

export default function FlightLeg() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={8}>
        <Grid xs={6}>
          <CitySearch inputLabel="From" />
        </Grid>
        <Grid xs={6}>
          <CitySearch inputLabel="To" />
        </Grid>
      </Grid>
    </Box>
  );
}
