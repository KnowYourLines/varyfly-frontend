import CitySearch from "./CitySearch";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function FlightLeg({
  flightLegId,
  from,
  to,
  date,
  flightLegOrder,
  onChange,
  onRemove,
}) {
  const changeFrom = (event, newValue) => {
    onChange(flightLegId, newValue, to, date);
  };
  const changeTo = (event, newValue) => {
    onChange(flightLegId, from, newValue, date);
  };
  const changeDate = (newValue) => {
    onChange(flightLegId, from, to, newValue);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={3.5}>
        <CitySearch inputLabel="From" handleChange={changeFrom} />
      </Grid>
      <Grid item xs={3.5}>
        <CitySearch inputLabel="To" handleChange={changeTo} />
      </Grid>
      <Grid item xs={3.5}>
        <DatePicker
          value={date ? date : ""}
          onChange={(newValue) => {
            changeDate(newValue);
          }}
        />
      </Grid>
      {flightLegOrder > 1 && (
        <Grid item xs={1}>
          <Button variant="contained" onClick={() => onRemove(flightLegId)}>
            Remove
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
