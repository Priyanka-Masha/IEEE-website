import React from "react";
import "./SociBody.css";

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
import TextTransition, { presets } from "react-text-transition";
import SociBodyCards from "./SociBodyCards";

const TEXTS = [
  "Computer Society",
  "Robotics and Automation Society ",
  "Industry Applications Society",
  "Power Electronics Society",

  "Antennas and Propagation Society",
  "Broadcast Technology Society",
  "Engineering in Medicine and Biology Society",
  "Communications Society",
  "Electron Devices Society",
  "Computational Intelligence Society",

  "Control Systems Society",
];

const SociBody = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="soci">
      <div className="sociBanner">
        <h1 className="animate-charcter">Societies</h1>
      </div>
      <div classname="soci">
        <div className="sociBanner1">
          <h1>
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
            />
          </h1>
        </div>
      </div>
      <SociBodyCards/>
    </div>
  );
};

export default SociBody;
