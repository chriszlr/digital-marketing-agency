import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="bg-[#5a21cc] text-white">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};

export default App;
