import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect } from "react";
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

  const [age, setAge] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("1000000000");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState("");
  const [pageSize, setPageSize] = useState("20");
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = () => {
    getSearchResult(category, minPrice, maxPrice, year, month).then((res) => {
      console.log("searchResults2:", res.results);
      setSearchResults(res.results);
    });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
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

  const onPageChange = (event) => {
    setPage(event.target.value);
  };

  const onPageSizeChange = (event) => {
    setPageSize(event.target.value);
  };

  return (
    <Box m="20px">
      <Header
        // title="Sales Report for the top 5 Cities With the most Walmart Stores"
        title="Search"
      />

      {/* <FormControl
        style={{
          border: "1px solid rgba(255, 255, 255, 0.7)",
          borderRadius: "4px",
        }}
        sx={{ ml: 2, mb: 2, minWidth: 120 }}
        size="small"
      >
        <Select
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
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
        />
        {/* <Typography
          variant="h5"
          color={colors.greenAccent[400]}
          sx={{ display: "inline" }}
        >
          Page:
        </Typography>
        <InputBase
          sx={{ ml: 2, flex: 1, mb: 2, mr: 2, paddingLeft: "7px" }}
          placeholder="1"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.7)",
            borderRadius: "4px",
          }}
          onChange={onPageChange}
        /> */}
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
          rows={searchResults}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row.id}
          pageSize={pageSize ?? 20}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </Box>
    </Box>
  );
};

export default Search;
