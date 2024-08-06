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
    A Software Engineering student 
    </h1>

  ),
  2: (
    <div className="info-box">
    <p className="font-medium sm:text-xl text-center">I've completed multiple SWE internships</p>
    <Link to="/about" className="neo-brutalism-white neo-btn">
      Learn More
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
  ),

  4: (
    <div className="info-box">
    <p className="font-medium sm:text-xl text-center">I'm experienced in developing full-stack web applications</p>
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