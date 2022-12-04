import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Box, Typography, useTheme, IconButton, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect } from "react";
import { getSearchResult } from "../../fetcher";
import { MapBrazil } from "react-brazil-map";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [age, setAge] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("1000000000");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState("");
  const [pageSize, setPageSize] = useState("20");
  const [searchResults, setSearchResults] = useState([]);
  const [district, setDistrict] = useState("");

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

  const handleClick = (event, district) => {
    console.log(event.target);
    console.log("district", district);
  };

  // useEffect(() => {
  //   getSearchResult(category, minPrice, maxPrice, year, month).then((res) => {
  //     console.log("searchResults2:", res.results);
  //     setSearchResults(res.results);
  //   });
  // });

  return (
    <Box m="20px">
      <Header title="Geographic Distribution" />

      <Box height="40%">
        <MapBrazil
          onChange={setDistrict}
          bg={colors.grey[200]}
          fill="#e0e0e0"
          colorStroke={colors.primary[500]}
          colorLabel={colors.primary[500]}
          width={300}
          height={300}
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          sx={{ ml: 15, mt: 2, flex: 1 }}
        >
          Submit
        </Button>
        {/* <Box
          display="flex"
          justifyContent="start"
          mt="20px"
          sx={{ ml: 9, flex: 1, paddingLeft: "7px" }}
        ></Box> */}
        {/* <Typography
          variant="h5"
          color={colors.grey[200]}
          sx={{ display: "inline" }}
        >
          {district}
        </Typography> */}
      </Box>
      <Box
        m="0px 0 0 0"
        height="40vh"
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

export default Geography;
