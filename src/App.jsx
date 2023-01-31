import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <title>Alexander Laskevic</title>
      <Home></Home>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
