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
    return (
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Users</Typography>
      </Box>
    );
  }
  const columns = [
    {
      field: "select",
      headerName: "",
      sortable: false,
      renderCell: renderSelectButton,
    },
    { field: "cityName", headerName: "City", width: 205 },
    { field: "state", headerName: "State", width: 205 },
    { field: "country", headerName: "Country", width: 205 },
    { field: "flightTime", headerName: "Estimated Flight Time", width: 205 },
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
