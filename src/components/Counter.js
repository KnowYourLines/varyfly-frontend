import { useState } from "react";
import {
  Container,
  ButtonGroup,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Grid from "@mui/material/Unstable_Grid2";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[50]),
  backgroundColor: blueGrey[50],
  borderColor: blueGrey[200],
  "&:hover": {
    backgroundColor: blueGrey[100],
    borderColor: blueGrey[300],
  },
}));

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 0,
      borderColor: blueGrey[200],
    },
    "&:hover fieldset": {
      borderColor: blueGrey[300],
    },
    "&.Mui-focused fieldset": {
      borderColor: blueGrey[500],
    },
    "& input": {
      textAlign: "center",
      width: 60,
      color: blueGrey[700],
    },
  },
});

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleChange = (event) => {
    const newValue = event.target.value;
    if (
      Number.isInteger(Number(newValue)) &&
      newValue % 1 === 0 &&
      newValue >= 0
    ) {
      setCount(Number(newValue));
    }
  };
  return (
    <Container>
      <Grid container>
        <Grid xs={12}>
          <Typography display="block">Adults (aged 18+)</Typography>
        </Grid>
        <Grid xs={12}>
          <ButtonGroup>
            <StyledButton
              onClick={() => setCount((prev) => prev - 1)}
              disabled={count === 0}
            >
              <RemoveIcon fontSize="small" />
            </StyledButton>
            <StyledInput size="small" onChange={handleChange} value={count} />
            <StyledButton onClick={() => setCount((prev) => prev + 1)}>
              <AddIcon fontSize="small" />
            </StyledButton>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  );
}
