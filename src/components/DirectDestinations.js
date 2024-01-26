import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";

export default function DirectDestinations() {
  const renderSelectButton = (params) => {
    return (
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          console.log(params.row);
          console.log("hello world");
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
    { field: "id", headerName: "ID" },
    { field: "firstName", headerName: "First name" },
    { field: "lastName", headerName: "Last name" },
    {
      field: "age",
      headerName: "Age",
      type: "number",
    },
  ];

  const rows = [
    { id: 1, lastName: "26h 5m", firstName: "Jon", age: 35 },
    { id: 2, lastName: "36h 9m", firstName: "Cersei", age: 42 },
  ];
  return (
    <DataGrid
      rows={rows}
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
