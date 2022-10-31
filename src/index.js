import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NavBar from "./components/AppBar/NavBar";
import Bitstamp from "./pages/Bitstamp/Bitstamp";
import Tutorials from "./pages/Tutorials/Tutorials";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/bitstamp" element={<Bitstamp />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
