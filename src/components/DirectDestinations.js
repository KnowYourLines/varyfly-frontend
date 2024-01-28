import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";

export default function DirectDestinations({
  destinations,
  origin,
  destination,
}) {
  function DataGridTitle() {
    let title = "Direct destinations from origin/destination";
    if (Object.keys(origin).length > 0 && Object.keys(destination).length > 0) {
      title = `Common direct destinations from ${
        origin.stateCode
          ? `${origin.cityName}, ${origin.stateCode}`
          : `${origin.cityName}`
      } and ${
        destination.stateCode
          ? `${destination.cityName}, ${destination.stateCode}`
          : `${destination.cityName}`
      }`;
    } else if (
      Object.keys(origin).length > 0 &&
      !Object.keys(destination).length > 0
    ) {
      title = `Direct destinations from ${
        origin.stateCode
          ? `${origin.cityName}, ${origin.stateCode}`
          : `${origin.cityName}`
      }`;
    } else if (
      !Object.keys(origin).length > 0 &&
      Object.keys(destination).length > 0
    ) {
      title = `Direct destinations from ${
        destination.stateCode
          ? `${destination.cityName}, ${destination.stateCode}`
          : `${destination.cityName}`
      }`;
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

  const originOnlyColumns = [
    {
      field: "flightTime",
      headerName: "Estimated Flight Time",
      width: 205,
      valueGetter: (params) => {
        return params.row.originFlightTimeNum;
      },
      renderCell: (params) => {
        return params.row.originFlightTime;
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
  const destinationOnlyColumns = [
    {
      field: "flightTime",
      headerName: "Estimated Flight Time",
      width: 205,
      valueGetter: (params) => {
        return params.row.destinationFlightTimeNum;
      },
      renderCell: (params) => {
        return params.row.destinationFlightTime;
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
  const combinedColumns = [
    {
      field: "originFlightTime",
      headerName: "Flight Time from Origin",
      width: 250,
      valueGetter: (params) => {
        return params.row.originFlightTimeNum;
      },
      renderCell: (params) => {
        return params.row.originFlightTime;
      },
      disableColumnMenu: true,
    },
    {
      field: "destinationFlightTime",
      headerName: "Flight Time from Destination",
      width: 250,
      valueGetter: (params) => {
        return params.row.destinationFlightTimeNum;
      },
      renderCell: (params) => {
        return params.row.destinationFlightTime;
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
      columns={
        Object.keys(origin).length > 0 && Object.keys(destination).length > 0
          ? combinedColumns
          : !Object.keys(origin).length > 0 &&
            Object.keys(destination).length > 0
          ? destinationOnlyColumns
          : Object.keys(origin).length > 0 &&
            !Object.keys(destination).length > 0
          ? originOnlyColumns
          : []
      }
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
