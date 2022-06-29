import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Error404 from "./pages/Error404";

function App() {
  return (
    /**<div className="App">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>**/
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
