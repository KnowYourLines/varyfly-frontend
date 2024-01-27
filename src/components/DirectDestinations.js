import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";

export default function DirectDestinations({ destinations, latestFlightLeg }) {
  const renderSelectButton = (params) => {
    return (
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          console.log(params.row);
        }}
      >
        Select
      </Button>
    );
  };

  function DataGridTitle() {
    let title = "Direct Destinations from last destination or origin";
    if (latestFlightLeg) {
      if (latestFlightLeg.to) {
        title = `Direct Destinations from ${
          latestFlightLeg.to.stateCode
            ? `${latestFlightLeg.to.cityName}, ${latestFlightLeg.to.stateCode}, ${latestFlightLeg.to.countryName}`
            : `${latestFlightLeg.to.cityName}, ${latestFlightLeg.to.countryName}`
        }`;
      } else if (latestFlightLeg.from) {
        title = `Direct Destinations from ${
          latestFlightLeg.from.stateCode
            ? `${latestFlightLeg.from.cityName}, ${latestFlightLeg.from.stateCode}, ${latestFlightLeg.from.countryName}`
            : `${latestFlightLeg.from.cityName}, ${latestFlightLeg.from.countryName}`
        }`;
      }
    }
    return (
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{title}</Typography>
      </Box>
    );
  }
  const columns = [
    {
      field: "select",
      headerName: "",
      sortable: false,
      renderCell: renderSelectButton,
      disableColumnMenu: true,
    },
    {
      field: "flightTime",
      headerName: "Estimated Flight Time",
      width: 205,
      valueGetter: (params) => {
        return params.row.flightTimeNum;
      },
      renderCell: (params) => {
        return params.row.flightTime;
      },
      disableColumnMenu: true,
    },
    {
      field: "cityName",
      headerName: "City",
      width: 205,
      disableColumnMenu: true,
    },
    {
      field: "state",
      headerName: "State",
      width: 120,
      disableColumnMenu: true,
    },
    {
      field: "country",
      headerName: "Country",
      width: 205,
      disableColumnMenu: true,
    },
  ];

  return (
    <DataGrid
      rows={destinations}
      getRowId={(destination) => destination.cityIata}
      columns={columns}
      slots={{
        toolbar: DataGridTitle,
      }}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  );
}
