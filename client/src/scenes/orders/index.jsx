import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChartOrder from "../../components/LineChartOrder";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const LineOrder = () => {
  const [year, setYear] = useState("2018");
  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  return (
    <Box m="20px">
      <Header
        title="Best Selling Products Ranked by Order Amount"
        subtitle="Top 10 best-selling products by category (with most orders)"
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
        <LineChartOrder year={year} />
      </Box>
    </Box>
  );
};

export default LineOrder;
