import CitySearch from "./CitySearch";
import Grid from "@mui/material/Unstable_Grid2";

export default function Origin({ updateOrigin }) {
  const changeOrigin = (event, newValue) => {
    if (newValue) {
      updateOrigin(newValue);
    } else {
      updateOrigin({});
    }
  };
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid xs={6}>
        <CitySearch inputLabel="City" handleChange={changeOrigin} />
      </Grid>
    </Grid>
  );
}
