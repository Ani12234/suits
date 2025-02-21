import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Loader from "./Loader";

const HomePage = () => {
  return (
    <div>
      {/* Loader component will be displayed first */}
      <Loader />

      {/* Navbar and other sections */}
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default HomePage;
