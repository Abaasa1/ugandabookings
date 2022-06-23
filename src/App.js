import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
