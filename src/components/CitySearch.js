import { useRef, useState } from "react";
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
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/search-cities/?query=` + searchTerm,
      {
        signal,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        response.json().then((cities) => {
          const updatedOptions = cities.map((city) => {
            return {
              cityIata: city.city_iata,
              cityName: city.city_name,
              countryIata: city.country_iata,
              countryName: city.country_name,
            };
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
    <Autocomplete
      noOptionsText={"Enter a city"}
      options={options}
      onInputChange={onInputChange}
      onChange={handleChange}
      getOptionLabel={(city) => `${city.cityName}, ${city.countryName}`}
      isOptionEqualToValue={(option, value) =>
        option.cityIata === value.cityIata
      }
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField {...params} label={inputLabel} variant="outlined" />
      )}
    />
  );
}
