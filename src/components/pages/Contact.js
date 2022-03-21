import React from "react";
import "./Contact.css"
import Video from "../../Assets/contact_bg_video.mp4"

const Contact = () => {
  return (
    <div>
      <div className="client_data" >
        <form className="con">
          <input type="text" id="name" placeholder="Enter your name" className="name" /> <br /> <br />
          <input type="text" id="mailId" placeholder="Enter your email-id" className="mailId" /> <br /><br />
          <input type="text" id="entered_text" placeholder="Enter your message" className="message" /> <br /> <br />
          <button className="submit">SUBMIT</button>
        </form>
      </div>
      <div className="Our_data">
        <h1><u>Our Contact</u></h1>
        <h2>Email address:</h2>
        <h3>contactus@ieeesjcesbc.org</h3>
        <h2>Call us:</h2>
        <h3>+91 97898 40294</h3>


      </div>
      <video id="bg-video" loop autoPlay muted >
        <source src={Video} type="video/mp4" />
      </video>
      
    </div>


  );
};

export default Contact;
