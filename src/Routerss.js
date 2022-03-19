import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Excom19 from "./components/pages/Excom/Excom19";
import Excom21 from "./components/pages/Excom/Excom21";
import Excom20 from "./components/pages/Excom/Excom20";
import Society from "./components/pages/Society/Society";
import AboutUs from "./components/pages/AboutUs";
import Events20 from "./components/pages/Events/Events20";

import Events21 from "./components/pages/Events/Events21";
import Events22 from "./components/pages/Events/Events22";
import Membership from "./components/pages/Membership";
import Contact from "./components/pages/Contact";

import SignIn from "./components/pages/SignIn";

import Cse from "./components/pages/Society/cse";
import Antenna from "./components/pages/Society/antenna";
import Robot from "./components/pages/Society/robot";
import Industry from "./components/pages/Society/industry";
import Cast from "./components/pages/Society/cast";
import Medicine from "./components/pages/Society/medicine";
import Coms from "./components/pages/Society/coms";
import Electron from "./components/pages/Society/electron";
import Cis from "./components/pages/Society/cis";
import Control from "./components/pages/Society/control";
import Women from "./components/pages/Society/women";
import Power from "./components/pages/Society/power";

const Routerss = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Body />
              <About />
            </>
          }
        />
        <Route
          exact
          path="/AboutUs"
          element={
            <>
              <Header />
              <AboutUs />
            </>
          }
        />

        <Route
          exact
          path="/Excom"
          element={
            <>
              <Header />
              <Excom19 />
              <Excom20 />
              <Excom21 />
            </>
          }
        />
        <Route
          exact
          path="/Societies"
          element={
            <>
              <Society />
            </>
          }
        />

        <Route />

        <Route
          exact
          path="/Events"
          element={
            <>
              <Header />
              <Events20 />
              <Events21 />
              <Events22 />
            </>
          }
        />
        <Route
          exact
          path="/Membership"
          element={
            <>
              <Header />
              <Membership />
            </>
          }
        />

        <Route
          exact
          path="/Gallery"
          element={
            <>
              <Header />
            </>
          }
        />
        <Route
          exact
          path="/ContactUs"
          element={
            <>
              <Header />
              <Contact />
            </>
          }
        />
        <Route
          exact
          path="/SignIn"
          element={
            <>
              <Header />
              <SignIn />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/Societies/COMPUTERSOCIETY"
          element={
            <>
              <Header />
              <Cse />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/Societies/RoboticsandAutomationSociety"
          element={
            <>
              <Header />
              <Robot />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/Societies/IndustryApplicationsSociety"
          element={
            <>
              <Header />
              <Industry />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/Societies/PowerElectronicsSociety"
          element={
            <>
              <Header />
              <Power />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/Societies/BroadcastTechnologySociety"
          element={
            <>
              <Header />
              <Cast />
            </>
          }
        />
      </Routes>{" "}
      <Routes>
        <Route
          exact
          path="/Societies/EngineeringinMedicineandBiologySociety"
          element={
            <>
              <Header />
              <Medicine />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/Societies/CommunicationsSociety"
          element={
            <>
              <Header />
              <Coms />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/Societies/ElectronDevicesSociety"
          element={
            <>
              <Header />
              <Electron />
            </>
          }
        />
      </Routes>{" "}
      <Routes>
        <Route
          exact
          path="/Societies/ComputationalIntelligenceSociety"
          element={
            <>
              <Header />
              <Cis />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/Societies/"
          element={
            <>
              <Header />
              <Antenna />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/Societies/ControlSystemsSociety"
          element={
            <>
              <Header />
              < Control/>
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/Societies/WomeninEngineering"
          element={
            <>
              <Header />
              <Women />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routerss;
