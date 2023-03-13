import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "@/themes";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar/NavBar";
import Dashboard from "@/Pages/Dashboard";


function Master() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
        <div className="app">
          <SideBar />
          <main className="content">
            <NavBar />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/orders" element={<Orders />} /> */}
            </Routes>
          </main>
        </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Master;
