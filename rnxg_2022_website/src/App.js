import React from "react";
import About from "./Components/About";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Project from "./Components/Project";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Project />
    </div>
  );
}

export default App;
