import React from "react";
import Particles from "react-tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Routerss from "./Routerss";

const App = () => {
  return (
    <div classname="App">
      <Particles options={particlesOptions}/>
      <Routerss />
    </div>
  );
};

export default App;
