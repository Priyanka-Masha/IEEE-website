import React from "react";
import Video from "../../Assets/video-2.mp4"
import image from "../../Assets/space.jpg"
import "./w3school.css"
import "./AboutUs.css"

const AboutUs = () => {
return (
<div className="AboutUs">
  <div class="section">
    <video id="bg-video" loop autoPlay muted>
      <source src={Video} type="video/mp4" />
    </video>
  </div>

  <body className="w3-light-grey">
    <div className="w3-content">

      <h1><b className="title">ABOUT US</b></h1>
    </div>

    <div className="w3-row">

      <div className="w3-col l8 s12">
        <div className="w3-card-4 w3-margin w3-white">
          <div className="w3-container">
            <h3><b className="heading">ABOUT IEEE:</b></h3>
          </div>

          <div className="w3-container">
            <p>IEEE is the world’s largest professional association dedicated to advancing technological innovation and
              excellence for the benefit of humanity. IEEE and its member inspire a global community through IEEE’s
              highly cited publications, conferences, technology standards, and professional and educational activities.
              IEEE, pronounced “Eye-triple-E,” stands for the Institute of Electrical and Electronics Engineers. The
              association is chartered under this name and it is the full legal name. To learn more about the
              association’s name, for more information please read the history of IEEE.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="w3-row">

      <div className="w3-col l8 s12">
        <div className="w3-card-4 w3-margin w3-white">
          <div className="w3-container">
            <h3><b className="heading">ABOUT IEEE MADRAS SECTION:</b></h3>
          </div>

          <div className="w3-container">
            <p>
              The IEEE Madras Section is one of the most active section in India, coming under Asia – Pacific Region,
              the Region 10 of IEEE covering Tamil Nadu and Pondicherry states. IEEE Madras Section was formally
              started, as a subsection of Bangalore Section, in 1973. The sub section was elevated into a full section,
              in 1978. IEEE Madras Section has several dedicated volunteers, who have been actively involved in making
              this one of the most active sections. IEEE Madras Section, has been represented regularly by a large
              number of members at annual India Council Events such as the All India Student Congress.

            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="w3-row">

      <div className="w3-col l8 s12">
        <div className="w3-card-4 w3-margin w3-white">
          <div className="w3-container">
            <h3><b className="heading">ABOUT IEEE ST.JOSEPH'S STUDENT BRANCH CHAPTER:</b></h3>
          </div>

          <div className="w3-container">
            <p>
              At St.Joseph’s college of engineering the IEEE Student Branch was officially approved and inaugurated in
              the year 2002 with a grand induction program. From 2002 to 2014 the Student Branch chapter had organized
              and participated in various events. In the year 2014 we applied and started 14 technical societies and 2
              affinity groups. Since then, the student branch strated to conduct many events under the various societies
              and affinity groups like workshops, guest lectures, Industrial Visit, NGO, technical and non-technical
              events. As of now the student branch has around 80 student members among various societies. The Student
              members actively participated in many national and international events across countries.

            </p>
          </div>
        </div>
      </div>
    </div>
  </body>

  <br /><br /><br />

  <div className="w3-third w3-margin-bottom">
    <img src={image} alt="New York" className="w3-hover-opacity"></img>
    <div className="w3-container w3-white">
      <p><b>New York</b></p>
      <p className="w3-opacity">Fri 27 Nov 2016</p>
      <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
    </div>
  </div>
  <div className="w3-third w3-margin-bottom">
  <img src={image} alt="New York" className="w3-hover-opacity"></img>
    <div className="w3-container w3-white">
      <p><b>Paris</b></p>
      <p className="w3-opacity">Sat 28 Nov 2016</p>
      <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
    </div>
  </div>
  <div className="w3-third w3-margin-bottom">
  <img src={image} alt="New York" className="w3-hover-opacity"></img>
    <div className="w3-container w3-white">
      <p><b>San Francisco</b></p>
      <p className="w3-opacity">Sun 29 Nov 2016</p>
      <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
    </div>
  </div>



</div>
);
};


export default AboutUs;