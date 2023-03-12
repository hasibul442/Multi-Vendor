import React from "react";
import { NAVBAR, SIDEBAR } from "../../Include";

import { ColorModeContext, useMode } from "../../themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Orders from "../../Pages/Orders/Orders";
function Master() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
        <div className="app">
          <SIDEBAR />
          <main className="content">
            <NAVBAR />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </main>
        </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Master;
