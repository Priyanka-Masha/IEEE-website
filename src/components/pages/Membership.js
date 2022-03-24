import React from "react";
import videoBg1 from '../../Assets/people.mp4'
import videoBg2 from '../../Assets/work.mp4'
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import "./Membership.css"

const Membership = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();


  return (
  <div className="main">
    <div className="overlay">    </div>
    <video src={videoBg1} autoPlay loop muted></video>
    <h1>MEMBERSHIPPP</h1>
    <video className="overlay1" src={videoBg2} autoPlay loop muted ></video>
    <div className="content"> WELCOME </div>
    </div>
    
  );
};

export default Membership;
