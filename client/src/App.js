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
import SignIn from "./pages/SignIn";
import Experiences from "./pages/Experiences";
import Destinations from "./pages/Destinations";
import Blogs from "./pages/Blogs";
import TermsAndConditions from "./pages/TermsAndConditions";
import ContactUs from "./pages/ContactUs";
import AddHotel from "./pages/dashboard/AddHotel";
import axios from "axios";

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
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/dashboard/manage-destinations" element={<AddHotel />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
