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
    <Grid container spacing={2}>
      <Grid item xs={5.5}>
        <CitySearch inputLabel="From" handleChange={changeFrom} />
      </Grid>
      <Grid item xs={5.5}>
        <CitySearch inputLabel="To" handleChange={changeTo} />
      </Grid>
      {flightLegOrder > 1 && (
        <Grid item xs={1}>
          <Button onClick={() => onRemove(flightLegId)}>Remove</Button>
        </Grid>
      )}
    </Grid>
  );
}
