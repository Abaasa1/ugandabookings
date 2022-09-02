import React from "react";
import Body from "../components/Body";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Body />
    </div>
  );
}
