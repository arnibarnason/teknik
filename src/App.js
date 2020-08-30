import React from "react";
import "./App.css";
import { Menu } from "./components/Menu";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <AboutUs />
    </div>
  );
}

export default App;
