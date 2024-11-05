import React, { useState } from "react";
import one from '../assest/1.jpg'
import two from '../assest/2.jpg'
import three from '../assest/3.jpg'
import four from '../assest/4.jpg'
import five from '../assest/5.jpg'
import { NavLink } from "react-router-dom";
import ai from '../assest/ai.png'
import "./Home.css";
import moderniseimg1 from '../assest/moderniseimg1.jpg'
import Success from "./Success";
import Technologys from "./Technologys";


function Home() {



  const [mainText, setMainText] = useState("Requirement gathering is the first phase where you collect and document user requirements. This process guides the development of several important documents like the Software Requirement Specification (SRS) or product specification, a Use Case document, and a Requirement Traceability Matrix document.");

  const handleLinkClick = (event, text) => {
    event.preventDefault();
    setMainText(text);
  };

  return (
    <>

      {/* carouselExampleCaptions */}

      <div className="Home" style={{ background: "#FDFEFE  " }}>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" >
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active h-50">
              <img src={one} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={two} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={three} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={four} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={five} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        {/* Car */}
        <h1 style={{ textAlign: "center", marginTop: "25px" }}>What are our natural abilities</h1>
        <div className="card-container">
          <div className="card">
            <NavLink to="/web">
              <img src="https://www.strivemindz.com/images/offerings/mobile/web-development.jpg" alt="Delicious Food" />
            </NavLink>
            <div className="card-content">
              <h2>Web Development</h2>
              <p style={{ fontSize: "12px" }}>We design and build the website and provide many new functionality and features as well as work on the frontend and backend</p>
            </div>
          </div>
          <div className="card">
            <NavLink to="/Appdevelopment">
              <img src="https://media.licdn.com/dms/image/D5612AQErA6lpJuUsrQ/article-cover_image-shrink_600_2000/0/1713602232193?e=2147483647&v=beta&t=Yvy4RbZuyih-Ca1i103cwq48Ebz41Pptp8fNiGzUCWQ" width="80%" alt="Tasty Pasta" />
            </NavLink>
            <div className="card-content">
              <h2>App Development</h2>
              <p style={{ fontSize: "12px" }}>We have a team of developers focused on creating Android and iOS App and  UI/UX Design, it works on Android or iOS multi platform</p>
            </div>
          </div>
          <div className="card">
            <NavLink to="/Design">
              <img src="https://miro.medium.com/v2/resize:fit:682/1*j7TiBo6BraFMeXme9BHCcw.jpeg" alt="Healthy Salad" />
            </NavLink>
            <div className="card-content">
              <h2>UI/UX Design</h2>
              <p style={{ fontSize: "12px" }}>We also work on UX/UI, based on user requirements we prepare the best design that looks good and is attractive</p>
            </div>
          </div>
          <div className="card">
            <NavLink to="/Digitalmarketing">
              <img src="https://static.wixstatic.com/media/b7c0f0_adf75e2e2c83476a94dee17ac0288ad9~mv2.jpg/v1/crop/x_0,y_0,w_1956,h_1599/fill/w_378,h_309,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Untitled%20design-32_edited.jpg" alt="Healthy Salad" />
            </NavLink>
            <div className="card-content">
              <h2>Digital Marketing </h2>
              <p style={{ fontSize: "12px" }}>We provide the best digital marketing service possible allows a company to grow its business and improve the recognition of its brand</p>
            </div>
          </div>
        </div>


        <div className="modernise">
          <div className="modernise1">
            <h4>The RS team: where technology meets power</h4>
            <p>Our team is a cohesive unit that works collaboratively to ensure the successful completion of projects well ahead of schedule. We adopt a meticulous approach, breaking down complex tasks into manageable steps and tackling each one with unwavering dedication. We pour our hearts and souls into every project, leveraging our collective expertise to deliver high-quality results that exceed expectations. With technology at our fingertips, we're able to streamline processes, identify potential pitfalls, and rectify issues before they escalate into major problems Our team's technical expertise spans a wide range of areas, from cutting-edge programming languages to innovative design principles. We're well-versed in the latest industry standards and best practices, and we're committed to staying up-to-date with the latest developments in technology. This enables us to provide forward-thinking solutions that are tailored to our clients' specific needs and goals.</p>
          </div>

          <div className="modernise2">
            <img className="moderniseimg1" src={moderniseimg1} alt="" />
          </div>
        </div>

        {/* navmenu Section */}

        <div className="navmenu">
          <div style={{
            backgroundColor: '#01091b',
            color: "whitesmoke",
            borderRadius: "8px",
            padding: '15px',
            textAlign: 'center'
          }}>
            <h2 className="our-main" style={{ textAlign: "center" }}>Our Main Focuse is use to Latest </h2>
            <p style={{ textAlign: "center" }}>Technoloy and Successfully buid our ideas into Reality</p>
          </div>

          <div style={{
            overflow: 'auto'
          }}>
            <div className="menu">
              <a onClick={(event) => handleLinkClick(event, 'Requirement gathering is the first phase where you collect and document user requirements. This process guides the development of several important documents like the Software Requirement Specification (SRS) or product specification, a Use Case document, and a Requirement Traceability Matrix document')}>Requirement</a>
              <a onClick={(event) => handleLinkClick(event, 'Design is the phase where you elaborate the original plan and vision into a software design document (SDD). This includes system design, programming language, templates, platform to use, and application security measures. A prototype model is often developed in this phase to visualize the product and make changes without having to rewrite code.')}>Design</a>
              <a onClick={(event) => handleLinkClick(event, 'The deployment phase is the final stage of the Software Development Life Cycle (SDLC) where the developed software is released to the production environment and made available to the end-users. This phase involves planning, coordinating, and executing the deployment of the software to ensure a smooth transition from the development environment to the production environment.')}>Development</a>
              <a onClick={(event) => handleLinkClick(event, 'At RS-Tech, we understand the importance of a successful deployment phase. Our team of experts follows a structured approach to ensure a smooth transition from development to production. We use the latest tools and technologies to automate the deployment process, ensuring faster and more reliable deployments. Our team works closely with stakeholders to ensure a smooth transition and minimize disruptions. We also provide continuous monitoring and maintenance to ensure the software continues to meet the required standards.')}>Deployment</a>
            </div>

            <div className="main" style={{ maxWidth: "25" }}>
              <h4 style={{ textAlign: "center" }}>How we get things done</h4>
              <p>{mainText}</p>
            </div>

            <div className="right">
              <h3 className="about">RS-Tech Approach</h3>
              <p style={{ fontSize: "10px" }}>Structured deployment with automation, continuous monitoring, and stakeholder collaboration for seamless transitions from development to production.</p>
            </div>
          </div>

          <div style={{
            color: "whitesmoke",
            backgroundColor: '#01091b',
            textAlign: 'center',
            padding: '10px',
            marginTop: '7px'
          }}>
            er.situkumar@gmail.com
          </div>
        </div>

        {/* About Sectiong */}

        <div class="header">
          <h1>Reliable Digital Marketing Partners:</h1>
          <h1>Efficiently Driving Your Business Growth</h1>

          <p>Digital marketing involves promoting products or services through digital channels like social media and email.</p>
        </div>
        <div class="row1-container">
            <div class="box box-down cyan">
              <h2>PPC</h2>
              <NavLink to="PPC" style={{ textDecoration: 'none' }}>
              <p>advertising is a digital marketing model where advertisers pay for each ad click.</p>
              </NavLink>
              <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
            </div>

          <div class="box red" style={{ borderRadius: "10px" }} >
            <h2>SEO</h2>
            <NavLink to="seo" style={{ textDecoration: 'none' }}s>
            <p>we have a team to work on Optimizing website visibility in search engines.</p>
            </NavLink>
            <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
          </div>

          <div class="box box-down blue">
            <h2>SMM</h2>
            <NavLink to="SocialMedia" style={{ textDecoration: 'none' }}>
            <p>Boost Your Online Presence | Effective Social Media Management Solutions</p>
            </NavLink>
            <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
          </div>
        </div>
      
        <div className="row2-container">
          <img className="aimage" style={{ width: "20%" }} src={ai} />
        </div>
        <div className="hr">
          <hr className="HRHOME" />
        </div>
        <div className="failer">
        <Success />
        <hr />
        <Technologys/>
        </div>
      </div>
    </>
  );
}
export default Home;
