import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Intro = () => {
  

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
         
          <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am</span>
          <span>Reejan Katwal</span>
          <span>
            Completed my bachelor's degree i.e. Bsc Honour Computing from The British College .Got chance to work as a frontend developer as well as data analyst officer during my bachelor's time. 
            And my upcoming goals would be to learn different frontend frameworks. Also, I would like to enhance my knowledge and showcase my skills on company projects
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
       </div>
    </div>
  );
};

export default Intro;
