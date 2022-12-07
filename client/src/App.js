import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Search from "./scenes/search";
import Market from "./scenes/market";
import LineSales from "./scenes/sales";
import LineOrders from "./scenes/orders";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import SearchCity from "./scenes/searchCity";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/search" element={<Search />} />
              <Route path="/searchCity" element={<SearchCity />} />
              <Route path="/market" element={<Market />} />
              <Route path="/sales" element={<LineSales />} />
              <Route path="/orders" element={<LineOrders />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
