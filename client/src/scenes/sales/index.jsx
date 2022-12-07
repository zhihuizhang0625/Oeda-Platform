import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChartSales from "../../components/LineChartSales";
import { useEffect, useState } from "react";
import { getTopSalesProduct } from "../../fetcher";
import { mockLineData as data } from "../../data/mockData";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const LineSales = () => {
  const [year, setYear] = useState("2018");
  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
    // getMarketReport(event.target.value).then((res) => {
    //   setSearchResults(res.results);
    // });
  };

  return (
    <Box m="20px">
      <Header
        title="Best Selling Products"
        subtitle="Product category and sales for top 10 category with the highest amount of sales"
      />
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={year}
          onChange={handleChange}
          label="Year"
        >
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
        </Select>
      </FormControl>
      <Box height="75vh">
        <LineChartSales year={year} />
      </Box>
    </Box>
  );
};

export default LineSales;
