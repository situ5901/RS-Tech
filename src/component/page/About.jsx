import React from 'react'
import "./About.css"
import Aboutimage from "../assest/aboutimage.png"
function About() {
  return (
    <>
      <div className="about">

        <div className='about-one'>
          <h1 className='rs'>Company Overview</h1>
          <p style={{ fontSize: "14 px" }}>
            At <b>RS-Tech,</b> we are a team of passionate IT professionals dedicated to delivering innovative solutions that meet the evolving needs of our clients. Our mission is to provide cutting-edge technology services that empower businesses to succeed in today's fast-paced digital landscape.

            With a strong focus on <b>[specific areas of expertise, e.g., Web Development, App Development, Digital Marketing etc]</b>, we strive to build long-term relationships with our clients, understanding their unique challenges and developing tailored solutions that drive growth and efficiency.

            Our team of experts is committed to staying at the forefront of the latest technologies and trends, ensuring that our clients receive the best possible guidance and support. We believe in fostering a culture of innovation, collaboration, and continuous learning, which enables us to deliver exceptional results and exceed our clients' expectations.

            Get in touch with us to learn more about our services and how we can help your business thrive in the digital age.</p>
          <h3>Our Story</h3>
          <p style={{ fontSize: "14px" }}>Founded in 2024 by founder's Shivansh (Situ), RS-Tech was born out of a desire to We're starting from scratch with no employees and limited financial resources. This means we'll need to be creative, resourceful, and strategic in our approach to building our company. Some potential strategies to consider <ul> 
            <li>Leverage freelance or contract workers to augment your skills and capacity</li>
            <li>Focus on low-cost, high-impact marketing and sales strategies, such as social media, content marketing, and networking
            </li>
            <li>Develop strategic partnerships with other businesses or organizations to access new markets, expertise, or resources</li>
            <li>Prioritize your services and focus on a specific niche or industry to differentiate yourself and build a strong reputation</li>
            </ul></p>
          </div>

        <div className='about-two'>
          <img src={Aboutimage} alt="" />
        </div>

      </div>

      <div className="whyrstech">
        <h2>How does Rasa work towards success?</h2>
        <h6>recognition excellence proven customer satisfaction</h6>
      </div>

      <div className="brand">
       <div className="des">
       <div className='design'></div>
       <h4>Planning</h4>
       </div>
       <div className="develp">
       <div className='development'></div>
       <h4>Designing</h4>
       </div>
       <div className="market">
       <div className='marketing'></div>
       <h4>Development</h4>
       </div>
       <div className="bran">
       <div className='brandid'></div>
       <h4>Marketing</h4>
       </div>
      </div>


    </>
  )
}

export default About
