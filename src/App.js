import React from "react";
import "./App.css";
import { Menu } from "./components/Menu";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Employees } from "./components/Employees";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Menu />
      <Hero />
      <AboutUs />
      <Employees />
      <Footer />
    </>
  );
}

export default App;
