import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataWalmart } from "../../data/mockData";
import Header from "../../components/Header";

const Table = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "customerID",
      headerName: "customerID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "orderID",
      headerName: "orderID",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.price}
        </Typography>
      ),
    },
    {
      field: "year",
      headerName: "Year",
      flex: 1,
    },
    {
      field: "month",
      headerName: "Year",
      flex: 1,
    },
    {
      field: "reviewScore",
      headerName: "reviewScore",
      flex: 1,
    },
    {
      field: "customerCity",
      headerName: "customerCity",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        // title="Sales Report for the top 5 Cities With the most Walmart Stores"
        title="Table"
        subtitle=""
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataWalmart}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Table;
