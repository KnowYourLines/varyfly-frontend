import CitySearch from "./CitySearch";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function FlightLeg({
  flightLegId,
  from,
  to,
  flightLegOrder,
  onChange,
  onRemove,
}) {
  const changeFrom = (event, newValue) => {
    onChange(flightLegId, newValue, to);
  };
  const changeTo = (event, newValue) => {
    onChange(flightLegId, from, newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <CitySearch inputLabel="From" handleChange={changeFrom} />
        </Grid>
        <Grid xs={4}>
          <CitySearch inputLabel="To" handleChange={changeTo} />
        </Grid>
        {flightLegOrder > 1 && (
          <Grid xs={4}>
            <Button onClick={() => onRemove(flightLegId)}>Remove</Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
