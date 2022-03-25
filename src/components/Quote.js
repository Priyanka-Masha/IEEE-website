import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./Quote.css";

const Quote = () => {
  return (
    <div className="main">
      <div className="bg">
        <section className="panel">
          <h2>
            When something is important enough, you do it even if the odds are
            not in your favor!
          </h2>
          <div className="card__text">
            <p>Elon Musk, Engineer & Inventor</p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Quote;
