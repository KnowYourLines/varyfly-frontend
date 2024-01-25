import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Counter from "./Counter";
import Modal from "@mui/material/Modal";
import CabinSelect from "./CabinSelect";
import Grid from "@mui/material/Unstable_Grid2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Passengers({
  cabinClass,
  changeCabinClass,
  numAdults,
  numTeens,
  numChildren,
  numInfants,
  setNumAdults,
  setNumTeens,
  setNumChildren,
  setNumInfants,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        {`All Passengers (${
          numAdults + numTeens + numChildren + numInfants
        } total)`}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container rowSpacing={2}>
            <Grid xs={12}>
              <CabinSelect
                cabinClass={cabinClass}
                onChange={changeCabinClass}
              />
            </Grid>
            <Grid xs={12}>
              <Counter
                count={numAdults}
                setCount={setNumAdults}
                minCount={1}
                title={"Adults (age 18+)"}
              />
              <Counter
                count={numTeens}
                setCount={setNumTeens}
                title={"Teens (age 12+)"}
              />
              <Counter
                count={numChildren}
                setCount={setNumChildren}
                title={"Children (age 2+)"}
              />
              <Counter
                count={numInfants}
                setCount={setNumInfants}
                title={"Infants"}
              />
            </Grid>
            <Grid xs={12}>
              <Button variant="contained" onClick={handleClose}>
                Done
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
