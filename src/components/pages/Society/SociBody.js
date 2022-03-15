import React from "react";

import Antenna from "./antenna";
import Cse from "./cse";
import Electron from "./electron";
import Industry from "./industry";
import Cast from "./cast";
import Coms from "./coms";
import Control from "./control";
import Cis from "./cis";
import Power from "./power";
import Robot from "./robot";
import Medicine from "./medicine";
import Women from "./women";
const SociBody = () => {
  return (
    <div>
    <h1>this is the frqn body of the soci</h1>
      <Cse />
      <Cast />
      <Cis />
      <Coms />
      <Control />
      <Electron />
      <Antenna />
      <Industry />
      <Medicine />
      <Power />
      <Robot />
      <Women />
    </div>
  );
};

export default SociBody;
