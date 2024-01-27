import CitySearch from "./CitySearch";
import Grid from "@mui/material/Unstable_Grid2";

export default function OriginDestination({ updateOrigin, updateDestination }) {
  const changeOrigin = (event, newValue) => {
    console.log(newValue);
    if (newValue) {
      updateOrigin(newValue);
    } else {
      updateOrigin({});
    }
  };
  const changeDestination = (event, newValue) => {
    if (newValue) {
      updateDestination(newValue);
    } else {
      updateDestination({});
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <CitySearch inputLabel="Origin" handleChange={changeOrigin} />
      </Grid>
      <Grid xs={6}>
        <CitySearch inputLabel="Destination" handleChange={changeDestination} />
      </Grid>
    </Grid>
  );
}
