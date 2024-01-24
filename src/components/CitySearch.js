import React, { useRef, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function CitySearch({ inputLabel = "From", handleChange }) {
  const [options, setOptions] = useState([]);
  const previousController = useRef();

  const getData = (searchTerm) => {
    if (previousController.current) {
      previousController.current.abort();
    }
    const controller = new AbortController();
    const signal = controller.signal;
    previousController.current = controller;
    fetch("https://dummyjson.com/products/search?q=" + searchTerm, {
      signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        response.json().then((myJson) => {
          const updatedOptions = myJson.products.map((p) => {
            return { title: p.title, price: p.price };
          });
          setOptions(updatedOptions);
        });
      })
      .catch(function (e) {
        console.log(e.message);
      });
  };

  const onInputChange = (event, value, reason) => {
    if (value) {
      getData(value);
    } else {
      setOptions([]);
    }
  };

  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        options={options}
        onInputChange={onInputChange}
        onChange={handleChange}
        getOptionLabel={(option) => `${option.title} at $${option.price}`}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label={inputLabel} variant="outlined" />
        )}
      />
    </div>
  );
}
