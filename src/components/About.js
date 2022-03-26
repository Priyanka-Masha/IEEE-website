import React from "react";
import "./About.css";
import Faq from "./Faq";
import AboutCards from "./AboutCards";
import Images from "./Images";
import Quote from "./Quote";
import Counter from "./Counter";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <div className="abMain">
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <AboutBox />
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <div className="abcards">
          <div className="cardsName">
            <h1>Why IEEE?</h1>
          </div>
          <div className="cardsDiv">
            <AboutCards />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <div className="fact">
          <div className="facts">
            <div className="factHead">
              <h1>
                <ScrollAnimation animateIn="animate__pulse">
                  FUN FACT
                </ScrollAnimation>
              </h1>
            </div>

            <div className="factNos">
              <div className="factNo">
                <ScrollAnimation animateIn="animate__pulse">
                  <h2>
                    <Counter num={82} />
                  </h2>
                  <p>Active Members</p>
                </ScrollAnimation>
              </div>
              <div className="factNo">
                <ScrollAnimation animateIn="animate__pulse">
                  <h2>
                    <Counter num={127} />+
                  </h2>
                  <p>Events Organized</p>
                </ScrollAnimation>
              </div>
              <div className="factNo">
                <ScrollAnimation animateIn="animate__pulse">
                  <h2>
                    <Counter num={12} />
                  </h2>
                  <p>Active Societies</p>
                </ScrollAnimation>
              </div>
              <div className="factNo">
                <ScrollAnimation animateIn="animate__pulse">
                  <h2>
                    <Counter num={2} />
                  </h2>
                  <p>Active Affinity Groups</p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <div className="quote">
          <Quote />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <div className="images">
          <Images />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
        <div className="faq">
          <div className="faqHead">
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
          </div>
          <div className="">
            <Faq />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
