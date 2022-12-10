import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { getMarketInfoByCity } from "../../fetcher";

const SearchCity = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "City",
      headerName: "City",
      flex: 1,
    },
    {
      field: "Number of Walmart Stores",
      headerName: "Number of Walmart Stores",
      flex: 1,
    },
    {
      field: "Sales",
      headerName: "Sales",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.Sales.toFixed(2)}
        </Typography>
      ),
    },
    {
      field: "Year",
      headerName: "Year",
      flex: 1,
    },
    {
      field: "Number of Orders",
      headerName: "Number of Orders",
      flex: 1,
    },
    {
      field: "Top Selling Product",
      headerName: "Top Selling Product",
      flex: 1,
    },
  ];

  const [year, setYear] = useState("");
  const [city, setCity] = useState("");
  const [pageSize, setPageSize] = useState("20");
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = () => {
    getMarketInfoByCity(city, year).then((res) => {
      setSearchResults(res.results);
    });
  };

  const onYearChange = (event) => {
    setYear(event.target.value);
  };

  const onCityChange = (event) => {
    setCity(event.target.value);
  };

  const onPageSizeChange = (event) => {
    setPageSize(event.target.value);
  };

  return (
    <Box m="20px">
      <Header
        title="Market Info"
        subtitle="Search the market info for a specific city in Brazil"
      />
      <Box sx={{ border: "0px solid rgba(255, 255, 255, 0.7)" }}>
        <Typography
          variant="h5"
          color={colors.greenAccent[400]}
          sx={{ display: "inline" }}
        >
          City:
        </Typography>
        <InputBase
          sx={{ ml: 2, flex: 1, mb: 2, mr: 2, paddingLeft: "7px" }}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.7)",
            borderRadius: "4px",
            display: "inline-block",
          }}
          onChange={onCityChange}
          onKeyPress={(e) => {
            e.key === "Enter" && updateSearchResults();
          }}
        />
        <Typography
          variant="h5"
          color={colors.greenAccent[400]}
          sx={{ display: "inline" }}
        >
          Year:
        </Typography>
        <InputBase
          sx={{ ml: 2, flex: 1, mb: 2, mr: 2, paddingLeft: "7px" }}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.7)",
            borderRadius: "4px",
            display: "inline-block",
          }}
          onChange={onYearChange}
          onKeyPress={(e) => {
            e.key === "Enter" && updateSearchResults();
          }}
        />
        <Typography
          variant="h5"
          color={colors.greenAccent[400]}
          sx={{ display: "inline" }}
        >
          Page Size:
        </Typography>
        <InputBase
          sx={{ ml: 2, flex: 1, mb: 2, paddingLeft: "7px" }}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.7)",
            borderRadius: "4px",
          }}
          onChange={onPageSizeChange}
        />
        <IconButton
          type="button"
          sx={{ p: 1, ml: 2 }}
          onClick={updateSearchResults}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      <Box
        m="5px 0 0 0"
        height="70vh"
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
          rows={searchResults}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row.Sales}
          pageSize={pageSize ? parseInt(pageSize) : 20}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </Box>
    </Box>
  );
};

export default SearchCity;
