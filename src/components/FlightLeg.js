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
      <Grid xs={3}>
        <CitySearch inputLabel="Origin" handleChange={changeFrom} />
      </Grid>
      <Grid xs={3}>
        <CitySearch inputLabel="Destination" handleChange={changeTo} />
      </Grid>
      <Grid alignItems="stretch" style={{ display: "flex" }}>
        <DatePicker
          label="Depart on"
          value={date ? date : ""}
          onChange={(newValue) => {
            changeDate(newValue);
          }}
          disablePast
        />
        {flightLegOrder > 1 && (
          <Button variant="contained" onClick={() => onRemove(flightLegId)}>
            Remove
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
