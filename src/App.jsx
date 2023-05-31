import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
