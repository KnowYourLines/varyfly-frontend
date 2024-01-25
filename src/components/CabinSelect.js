import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CabinSelect({ cabinClass, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="cabin-select-label">Cabin Class</InputLabel>
        <Select
          labelId="cabin-select-label"
          value={cabinClass}
          label="Cabin Class"
          onChange={handleChange}
        >
          <MenuItem value={"economy"}>Economy</MenuItem>
          <MenuItem value={"premium_economy"}>Premium Economy</MenuItem>
          <MenuItem value={"business"}>Business</MenuItem>
          <MenuItem value={"first"}>First</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
