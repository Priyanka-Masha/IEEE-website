import React, { useState } from "react";
// import Warper from './Warper';
import { Link } from "react-router-dom";
import { Color } from "three";
import "./Events.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import img from "../../../Assets/Eventsimg/speaker.jpg";

const Events = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div className="event">
      <div class="row1">
        <div class="column">
          <div class="eventCard">
            <div className="eveimg">
              <img className="img" src={img} alt="hello" />
            </div>
            <div className="evetext">
              <h1>Speakers Forum</h1>
              <p>
                organised “SPEAKERS FORUM”- An elocution event, was conducted
                from 22.02.2022 to 28.02.2022 with 35 participants
              </p>
            </div>
            <div class="section full-height">
              <input
                class="modal-btn"
                type="checkbox"
                id="modal-btn"
                name="modal-btn"
              />
              <label for="modal-btn">
                Read More <i class="uil uil-expand-arrows"></i>
              </label>
              <div class="modal">
                <div class="modal-wrap">
                  <h1>Speakers forum</h1>
                  <p>
                    Date:Feb 28,2022
                    <br />
                    <br />
                    IEEE Women In Engineering AG under St. Joseph’s College of
                    Engineering Student Branch Chapter organised “SPEAKERS
                    FORUM”- An elocution event, was conducted from 22.02.2022 to
                    28.02.2022 with 35 participants. The event was coordinated
                    by Jamuna U, Abinayaa Sri T, Christel Peeris R, Ramya R and
                    Kaviya P. The participants exhibited their talents in
                    relation to the assigned topic “GENDER EQUALITY IN REALITY”.
                    The winners were Ms.Arthi (1st), Ms. Tamizhselvi (2nd) and
                    Ms. Sathya(3rd).They were provided with merit certificates
                    and all the participants were provided with participation
                    certificates.
                    <br />
                    <br />
                    Co-organizing unit : IEEE Women In Engineering Affinity
                    Group
                    <br />
                    <br />
                    Conducted date : 22/02/2022 to 28/02/2022
                    <br />
                    <br />
                    Total no.of.Participants : 35
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="eventCard">
            <div className="eveimg">
              <img
                className="img"
                src="https://ieeesjcesbc.org/wp-content/uploads/2022/02/WhatsApp-Image-2022-03-13-at-5.09.47-PM-7-1.jpeg"
                alt="hello"
              />
            </div>
            <div className="evetext">
              <h1>Bright reds bash</h1>
              <p>
                The IEEE Power Electronics Society of St Joseph's College of
                Engineering Organized the “Bright Reds Bash”, a virtual fun
                gathering for different student branches, on February 27, 2022.
              </p>
            </div>
            <div class="section full-height">
              <input
                class="modal-btn"
                type="checkbox"
                id="modal-btn"
                name="modal-btn"
              />
              <label for="modal-btn">
                Read More <i class="uil uil-expand-arrows"></i>
              </label>
              <div class="modal">
                <div class="modal-wrap">
                  <div>
                    <img
                      src="https://ieeesjcesbc.org/wp-content/uploads/2022/02/WhatsApp-Image-2022-03-13-at-5.09.47-PM-1-1.jpeg"
                      alt=""
                    />
                  </div>
                  <h1>bright reds bash</h1>
                  <p>
                    Date:Feb 28,2022
                    <br />
                    <br />
                    IEEE Women In Engineering AG under St. Joseph’s College of
                    Engineering Student Branch Chapter organised “SPEAKERS
                    FORUM”- An elocution event, was conducted from 22.02.2022 to
                    28.02.2022 with 35 participants. The event was coordinated
                    by Jamuna U, Abinayaa Sri T, Christel Peeris R, Ramya R and
                    Kaviya P. The participants exhibited their talents in
                    relation to the assigned topic “GENDER EQUALITY IN REALITY”.
                    The winners were Ms.Arthi (1st), Ms. Tamizhselvi (2nd) and
                    Ms. Sathya(3rd).They were provided with merit certificates
                    and all the participants were provided with participation
                    certificates.
                    <br />
                    <br />
                    Co-organizing unit : IEEE Women In Engineering Affinity
                    Group
                    <br />
                    <br />
                    Conducted date : 22/02/2022 to 28/02/2022
                    <br />
                    <br />
                    Total no.of.Participants : 35
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="eventCard">
            <div className="eveimg">
              <img className="img" src={img} alt="hello" />
            </div>
            <div className="evetext">
              <h1>தமிழில் தேடு</h1>
              <p>
              The IEEE  SJCE SB Maanavar Mandram  of St Joseph’s College of Engineering, conducted a riddle event 'தமிழில் தேடு' related to Tamil Literatures.
              </p>
            </div>
            <div class="section full-height">
              <input
                class="modal-btn"
                type="checkbox"
                id="modal-btn"
                name="modal-btn"
              />
              <label for="modal-btn">
                Read More <i class="uil uil-expand-arrows"></i>
              </label>
              <div class="modal">
                <div class="modal-wrap">
                  {/* <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="" /> */}
                  <h1>தமிழில் தேடு</h1>
                  <p>
                    Date:Feb 27,2022
                    <br />
                    <br />
                    The IEEE  SJCE SB Maanavar Mandram  of St Joseph’s College of Engineering, 
                    conducted a riddle event ‘தமிழில் தேடு’ related to Tamil Literatures. 
                    50 people registered through the registration, 35 of them participated in 
                    the event and best three were given winners certificate and the others were 
                    provided with participation certificate. The student coordinators for this event
                     are Mani Sha N , Akshaya Krishnan , Amirtha Varshini , Jaya Shruthi , Godson S V Noble.


<br />
                    <br />
                    Co-organizing unit : IEEE SJCE SB மாணவர்மன்றம்
                    
                    <br />
                    <br />
                    Conducted date : 27/02/22
                    <br />
                    <br />
                    Total no.of.Participants : 35
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="eventCard">
            <div className="eveimg">
              <img className="img" src={img} alt="hello" />
            </div>
            <div className="evetext">
              <h1>Speakers Forum</h1>
              <p>
                organised “SPEAKERS FORUM”- An elocution event, was conducted
                from 22.02.2022 to 28.02.2022 with 35 participants
              </p>
            </div>
            <div class="section full-height">
              <input
                class="modal-btn"
                type="checkbox"
                id="modal-btn"
                name="modal-btn"
              />
              <label for="modal-btn">
                Read More <i class="uil uil-expand-arrows"></i>
              </label>
              <div class="modal">
                <div class="modal-wrap">
                  <h1>Speakers forum</h1>
                  <p>
                    Date:Feb 28,2022
                    <br />
                    <br />
                    IEEE Women In Engineering AG under St. Joseph’s College of
                    Engineering Student Branch Chapter organised “SPEAKERS
                    FORUM”- An elocution event, was conducted from 22.02.2022 to
                    28.02.2022 with 35 participants. The event was coordinated
                    by Jamuna U, Abinayaa Sri T, Christel Peeris R, Ramya R and
                    Kaviya P. The participants exhibited their talents in
                    relation to the assigned topic “GENDER EQUALITY IN REALITY”.
                    The winners were Ms.Arthi (1st), Ms. Tamizhselvi (2nd) and
                    Ms. Sathya(3rd).They were provided with merit certificates
                    and all the participants were provided with participation
                    certificates.
                    <br />
                    <br />
                    Co-organizing unit : IEEE Women In Engineering Affinity
                    Group
                    <br />
                    <br />
                    Conducted date : 22/02/2022 to 28/02/2022
                    <br />
                    <br />
                    Total no.of.Participants : 35
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="eventCard">
            <div className="eveimg">
              <img className="img" src={img} alt="hello" />
            </div>
            <div className="evetext">
              <h1>Speakers Forum</h1>
              <p>
                organised “SPEAKERS FORUM”- An elocution event, was conducted
                from 22.02.2022 to 28.02.2022 with 35 participants
              </p>
            </div>
            <div class="section full-height">
              <input
                class="modal-btn"
                type="checkbox"
                id="modal-btn"
                name="modal-btn"
              />
              <label for="modal-btn">
                Read More <i class="uil uil-expand-arrows"></i>
              </label>
              <div class="modal">
                <div class="modal-wrap">
                  {/* <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="" /> */}
                  <h1>Speakers forum</h1>
                  <p>
                    Date:Feb 28,2022
                    <br />
                    <br />
                    IEEE Women In Engineering AG under St. Joseph’s College of
                    Engineering Student Branch Chapter organised “SPEAKERS
                    FORUM”- An elocution event, was conducted from 22.02.2022 to
                    28.02.2022 with 35 participants. The event was coordinated
                    by Jamuna U, Abinayaa Sri T, Christel Peeris R, Ramya R and
                    Kaviya P. The participants exhibited their talents in
                    relation to the assigned topic “GENDER EQUALITY IN REALITY”.
                    The winners were Ms.Arthi (1st), Ms. Tamizhselvi (2nd) and
                    Ms. Sathya(3rd).They were provided with merit certificates
                    and all the participants were provided with participation
                    certificates.
                    <br />
                    <br />
                    Co-organizing unit : IEEE Women In Engineering Affinity
                    Group
                    <br />
                    <br />
                    Conducted date : 22/02/2022 to 28/02/2022
                    <br />
                    <br />
                    Total no.of.Participants : 35
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="eventCard">
            <div className="eveimg">
              <img className="img" src={img} alt="hello" />
            </div>
            <div className="evetext">
              <h1>Speakers Forum</h1>
              <p>
                organised “SPEAKERS FORUM”- An elocution event, was conducted
                from 22.02.2022 to 28.02.2022 with 35 participants
              </p>
            </div>
            <div class="section full-height">
              <input
                class="modal-btn"
                type="checkbox"
                id="modal-btn"
                name="modal-btn"
              />
              <label for="modal-btn">
                Read More <i class="uil uil-expand-arrows"></i>
              </label>
              <div class="modal">
                <div class="modal-wrap">
                  {/* <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="" /> */}
                  <h1>Speakers forum</h1>
                  <p>
                    Date:Feb 28,2022
                    <br />
                    <br />
                    IEEE Women In Engineering AG under St. Joseph’s College of
                    Engineering Student Branch Chapter organised “SPEAKERS
                    FORUM”- An elocution event, was conducted from 22.02.2022 to
                    28.02.2022 with 35 participants. The event was coordinated
                    by Jamuna U, Abinayaa Sri T, Christel Peeris R, Ramya R and
                    Kaviya P. The participants exhibited their talents in
                    relation to the assigned topic “GENDER EQUALITY IN REALITY”.
                    The winners were Ms.Arthi (1st), Ms. Tamizhselvi (2nd) and
                    Ms. Sathya(3rd).They were provided with merit certificates
                    and all the participants were provided with participation
                    certificates.
                    <br />
                    <br />
                    Co-organizing unit : IEEE Women In Engineering Affinity
                    Group
                    <br />
                    <br />
                    Conducted date : 22/02/2022 to 28/02/2022
                    <br />
                    <br />
                    Total no.of.Participants : 35
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="eventCard">..</div>
        </div>
        <div class="column">
          <div class="eventCard">..</div>
        </div>
        <div class="column">
          <div class="eventCard">..</div>
        </div>
        <div class="column">
          <div class="eventCard">..</div>
        </div>
        <div class="column">
          <div class="eventCard">..</div>
        </div>
        <div class="column">
          <div class="eventCard">..</div>
        </div>
      </div>
    </div>
  );
};

export default Events;
