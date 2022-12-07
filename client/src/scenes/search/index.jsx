import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { getSearchResult } from "../../fetcher";

const Search = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "order_id",
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
      headerName: "Month",
      flex: 1,
    },
  ];

  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("1000000000");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [pageSize, setPageSize] = useState("20");
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = () => {
    getSearchResult(category, minPrice, maxPrice, year, month).then((res) => {
      setSearchResults(res.results);
    });
  };

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const onMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const onMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const onYearChange = (event) => {
    setYear(event.target.value);
  };

  const onMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const onPageSizeChange = (event) => {
    setPageSize(event.target.value);
  };

  return (
    <Box m="20px">
      <Header
        title="Transaction Info"
        subtitle="Details for the transactions that can be filtered based on price range, category, and time range"
      />
      <Box sx={{ border: "0px solid rgba(255, 255, 255, 0.7)" }}>
        <Typography
          variant="h5"
          color={colors.greenAccent[400]}
          sx={{ display: "inline" }}
        >
          Category:
        </Typography>
        <InputBase
          sx={{ ml: 2, flex: 1, mb: 2, mr: 2, paddingLeft: "7px" }}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.7)",
            borderRadius: "4px",
            display: "inline-block",
          }}
          onChange={onCategoryChange}
          onKeyPress={(e) => {
            e.key === "Enter" && updateSearchResults();
          }}
        />
        <Typography
          variant="h5"
          color={colors.greenAccent[400]}
          sx={{ display: "inline" }}
        >
          Min Price:
        </Typography>
        <InputBase
          sx={{ ml: 2, flex: 1, mb: 2, mr: 2, paddingLeft: "7px" }}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.7)",
            borderRadius: "4px",
            display: "inline-block",
          }}
          onChange={onMinPriceChange}
          onKeyPress={(e) => {
            e.key === "Enter" && updateSearchResults();
          }}
        />
        <Typography
          variant="h5"
          color={colors.greenAccent[400]}
          sx={{ display: "inline" }}
        >
          Max Price:
        </Typography>
        <InputBase
          sx={{ ml: 2, flex: 1, mb: 2, mr: 2, paddingLeft: "7px" }}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.7)",
            borderRadius: "4px",
            display: "inline-block",
          }}
          onChange={onMaxPriceChange}
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
          Month:
        </Typography>
        <InputBase
          sx={{ ml: 2, flex: 1, mb: 2, mr: 2, paddingLeft: "7px" }}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.7)",
            borderRadius: "4px",
          }}
          onChange={onMonthChange}
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
          getRowId={(row) => row.id}
          pageSize={pageSize === 0 ? 20 : pageSize}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </Box>
    </Box>
  );
};

export default Search;
