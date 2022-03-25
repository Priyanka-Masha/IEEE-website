import React from "react";
import "./About.css";
import zz from "../Assets/zz.jpg";
import Faq from "./Faq";
import AboutCards from "./AboutCards";
import Images from "./Images";
import Quote from './Quote';
import Counter from "./Counter";

const About = () => {
  return (
    <div>
      <div className="aboutBox">
        <div className="about1">
          <h1>ABOUT US</h1>
          <div className="parah">
            <p>Institute of Electrical and Electronics Engineers is a non-profit professional association
              headquartered in the United States that is dedicated to advancing technological innovation and
              excellence. Founded in the year 2002 under Madras Section Region 10, IEEE SJCE SBC is the
              student-run chapter of this global network that aims to extend IEEE’s outreach to students and
              faculty at an individual level.
            </p>
            <p>
              At St.Joseph’s college of engineering the IEEE Student Branch was officially approved and inaugurated
              in the year 2002 with a grand induction program. From 2002 to 2014 the Student Branch chapter had
              organized and participated in various events. In the year 2014 we applied and started 14 technical
              societies and 2 affinity groups. Since then, the student branch started to conduct many events under
              the various societies and affinity groups like workshops, guest lectures, Industrial Visit, NGO,
              technical and non-technical events. As of now the student branch has around 80 student members among
              various societies. The Student members actively participated in many national and international
              events across countries.</p>
          </div>
        </div>
        <div className="about2">
          <img className="zzi" src={zz} alt="" />
        </div>
      </div>
      <div className="cards">
        <div className="cardsName">
          <h1>Why IEEE?</h1>
        </div>
        <div className="cardsDiv">
          <AboutCards />
        </div>
      </div>
      <div className="fact">
        <div className="facts">
          <h1>[ FUN FACT ]</h1>
          <div className="factNos">
            <div className="factNo">
              <h2><Counter num={82}/></h2>
              <p>Active Members</p>
            </div>
            <div className="factNo">
              <h2><Counter num={127}/>+</h2>
              <p>Events Organized</p>
            </div>
            <div className="factNo">
              <h2><Counter num={12}/></h2>
              <p>Active Societies</p>

            </div>
            <div className="factNo">
              <h2><Counter num={2}/></h2>
              <p>Active Affinity Groups</p>
            </div>
          </div>
        </div>
      </div>
      <div className="quote">
        <Quote />
      </div>
      <div className="images">
        <h1>images</h1>
        <Images />
      </div>
      <div className="faq">
        <div className="faqHead">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>

        </div>
        <div className="">
          <Faq />
        </div>
      </div>
    </div>

  );
};








export default About;
