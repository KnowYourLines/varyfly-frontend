import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";

export default function DirectDestinations({ destinations, origin }) {
  function DataGridTitle() {
    const defaultTitle = "Direct Flights To/From City";
    const title =
      Object.keys(origin).length > 0
        ? `${defaultTitle} ${
            origin.stateCode
              ? `${origin.cityName}, ${origin.stateCode}`
              : `${origin.cityName}`
          }`
        : `${defaultTitle}`;
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
