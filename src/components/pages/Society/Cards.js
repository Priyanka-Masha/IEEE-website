import React from "react";
import image from "../../../Assets/background.jpg";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="row">
      <div className="row-one">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="img" src={image} />
              <h1>COMPUTER SOCIETY</h1>
            </div>
            <div className="flip-box-back">
              <Link to="/Societies/COMPUTERSOCIETY">
                <button className="button-49">Read More </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="img" src={image} />

              <h1>Robotics and Automation Society</h1>
            </div>
            <div className="flip-box-back">
              <h2></h2>
              <p></p>
              <Link to="/Societies/RoboticsandAutomationSociety">
                <button className="button-49">Read More </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="img" src={image} />
              <h1>Industry Applications Society</h1>
            </div>
            <div className="flip-box-back">
              <Link to="/Societies/IndustryApplicationsSociety">
                <button className="button-49">Read More </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row-one">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="img" src={image} />
              <h1>Power Electronics Society</h1>
            </div>
            <div className="flip-box-back">
              <Link to="/Societies/PowerElectronicsSociety">
                <button className="button-49">Read More </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="img" src={image} />
              <h1>Antennas and Propagation Society</h1>
            </div>
            <div className="flip-box-back">
              <Link to="/Societies/AntennasandPropagationSociety">
                <button className="button-49">Read More </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="img" src={image} />
              <h1>Broadcast Technology Society</h1>
            </div>
            <div className="flip-box-back">
              <Link to="/Societies/BroadcastTechnologySociety">
                <button className="button-49">Read More </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row-one">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="img" src={image} />
              <h1>Engineering in Medicine and Biology Society</h1>
            </div>
            <div className="flip-box-back">
              <Link to="/Societies/EngineeringinMedicineandBiologySociety">
                <button className="button-49">Read More </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="img" src={image} />
              <h1>Communications Society</h1>
            </div>
            <div className="flip-box-back">
            <Link to="/Societies/CommunicationsSociety">

              <button className="button-49">Read More </button>
              </Link>

            </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="img" src={image} />
              <h1>Electron Devices Society</h1>
            </div>
            <div className="flip-box-back">
            <Link to="/Societies/ElectronDevicesSociety">

              <button className="button-49">Read More </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div className="row-one">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="img" src={image} />
              <h1>Computational Intelligence Society</h1>
            </div>
            <div className="flip-box-back">
            <Link to="/Societies/ComputationalIntelligenceSociety">

              <button className="button-49">Read More </button>
              </Link>

            </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="img" src={image} />
              <h1>Control Systems Society</h1>
            </div>
            <div className="flip-box-back">
            <Link to="/Societies/ControlSystemsSociety">

              <button className="button-49">Read More </button>
              </Link>

            </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="img" src={image} />
              <h1>Women in Engineering</h1>
            </div>
            <div className="flip-box-back">
            <Link to="/Societies/WomeninEngineering">

              <button className="button-49">Read More </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
