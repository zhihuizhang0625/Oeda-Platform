import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChartSales from "../../components/LineChartSales";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const LineSales = () => {
  const [year, setYear] = useState("2018");
  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  return (
    <Box m="20px">
      <Header
        title="Top Products Ranked by Sales"
        subtitle="Top 10 revenue-generating products by category (with highest sales)"
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
