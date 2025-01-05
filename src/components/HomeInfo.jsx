import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'
const InfoBox = ({text, link , btnText}) => {
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
}
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I'm <span className="font-semibold">Shifa</span> 👋
    <br />
    A Software Engineering student.
    <br />
    Click and drag to take a tour of the island!
    </h1>

  ),
  2: (
    <div className="info-box">
    <p className="font-medium sm:text-xl text-center">I have previous experience in developer intern roles in group and solo projects </p>
    <Link to="/about" className="neo-brutalism-white neo-btn">
      Learn More
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
  ),
  3: (
    <div className="info-box">
    <p className="font-medium sm:text-xl text-center">I'm seeking a SWE role that challenges me to acquire new skills and work with people of different backgrounds!  </p>
    <Link to="/projects" className="neo-brutalism-white neo-btn">
      Learn More
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
  ),

  4: (
    <div className="info-box">
    <p className="font-medium sm:text-xl text-center">I'm proficient in developing full-stack web applications and I enjoy learning new technologies</p>
    <Link to="/contact" className="neo-brutalism-white neo-btn">
      Contact Me
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
  )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo