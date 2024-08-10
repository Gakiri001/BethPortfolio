import React from 'react'
import aboutpic from "../../assets/pic33.jpg"
import "./Home.css"

function About() {
  return (
    <div className='About'>
      <div className='Aboutleft'>
        <h2>Hi, I'm Beth,</h2>
        <p>
        I am a professional model with six years of experience in the fashion industry, beginning my journey in 2019. I started as a high fashion model and earned titles such as Miss Machakos University First Runners-Up (2019) and Miss International Women's Day First Runners-Up (2020). In 2021, I shifted my focus to parts and editorial modeling and was later crowned Miss County Murang'a in 2023.
          <br /> <br />
          Throughout my career, I've honed a diverse skill set in runway, editorial, and commercial modeling. My versatility and ability to embody various styles have made me a sought-after talent in the industry. I've collaborated with prominent designers and brands, participating in major fashion events that have solidified my reputation.
          <br /> <br />
          My journey is driven by a commitment to excellence, creativity, and authenticity. I am passionate about the transformative power of fashion and aim to continue collaborating with innovative brands while exploring new markets.
        </p>
      </div>
      <div className='AboutRight'>
        <img src={aboutpic} alt="" />
      </div>
    </div>
  )
}

export default About