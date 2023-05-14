import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Navbar from "./Include/Navbar";
import "./i18n.js";
import Slider from "./Include/Slider";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
