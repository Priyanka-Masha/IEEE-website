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
              <Header />
              <Society />
            </>
          }
        />

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
    </Router>
  );
};

export default Routerss;
