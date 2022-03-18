import React from "react";
import "./About.css";
import zz from "../Assets/zz.jpg"

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
          <div className="card">
            <h2>IEEE Standards</h2>
            <p>With an active portfolio of nearly 1,300 standards and projects under
              development, IEEE is a leading developer of industry standards in a
              broad range of technologies.</p>
          </div>
          <div className="card">
            <h2>IEEE eLearning Library</h2>
            <p>Online courses enable you to get up to speed quickly on emerging
              technologies and trends.</p>
          </div>
          <div className="card">
            <h2>Student Travel Grant</h2>
            <p>IEEE offers a number of student travel grants to assist Student
              members in attending conferences and presenting papers.</p>
          </div>
        </div>
        <div className="cardsDiv">
          <div className="card">
            <h2>Free @ieee.org Email​</h2>
            <p>With GoogleApps@IEEE, members gain a robust capability for messaging
              with access to email, calendar, and contact services from any
              Internet-connected computer.</p>
          </div>
          <div className="card">

            <h2>Scholarships & Fellowships​</h2>
            <p>IEEE offers a variety of scholarships, grants, and fellowships
              for IEEE Student members.</p>
          </div>
          <div className="card">

            <h2>IEEE Women In Engineering</h2>
            <p>IEEE Women in Engineering (WIE) is a global network of IEEE
              members and volunteers dedicated to promoting women engineers.</p>
          </div>
        </div>
      </div>
      <div className="fact">
        <div className="facts">
          <h1>FUN FACT</h1>
          <h2>hello</h2>
        </div>
      </div>
    </div>

  );
};

export default About;
