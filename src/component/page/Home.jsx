import React, { useState } from "react";
import one from '../assest/1.jpg'
import two from '../assest/2.jpg'
import three from '../assest/3.jpg'
import four from '../assest/4.jpg'
import five from '../assest/5.jpg'
import { NavLink } from "react-router-dom";
import "./Home.css";


function Home() {

  const [mainText, setMainText] = useState(" 'Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels (like coal, oil, and gas), which produces heat-trapping gases.");

  const handleLinkClick = (event, text) => {
    event.preventDefault();
    setMainText(text);
  };

  return (
    <>
    <div className="Home" style={{background:"#FDFEFE  "}}>
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
      
      <h1 style={{textAlign:"center", marginTop:"25px"}}>Why Organizations Choose RS-Tech</h1>
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


<div className="navmenu">



      <div style={{
        backgroundColor: '#01091b',
        color:"whitesmoke",
        borderRadius:"8px",
        padding: '15px',
        textAlign: 'center'
      }}>
      <h2 style={{textAlign:"center"}}>Our mein focus is to utilize the</h2>
      <p style={{textAlign:"center"}}>latest technology and turn our ideas into reality</p>
      </div>

      <div style={{
        overflow: 'auto'
      }}>
        <div className="menu">
          <a onClick={(event) => handleLinkClick(event, 'Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels (like coal, oil, and gas), which produces heat-trapping gases.1')}>Link 1</a>
          <a onClick={(event) => handleLinkClick(event, 'We have a team of developers focused on creating Android and iOS App and  UI/UX Design, it works on Android or iOS multi platform')}>App Development 2</a>
          <a onClick={(event) => handleLinkClick(event, 'We also work on UX/UI, based on user requirements we prepare the best design that looks good and is attractive')}>UI/UX Design 3</a>
          <a onClick={(event) => handleLinkClick(event, 'We provide the best digital marketing service possible allows a company to grow its business and improve the recognition of its brand')}>Digital Marketing 4</a>
        </div>

        <div className="main" style={{maxWidth:"25"}}>
          <p>{mainText}</p>
        </div>

        <div className="right">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
      </div>

      <div style={{
        color:"whitesmoke",
        backgroundColor: '#01091b',
        textAlign: 'center',
        padding: '10px',
        marginTop: '7px'
      }}>
        er.situkumar@gmail.com
      </div>



</div>

      <div className="row">
        <div className="columns">
          <h3>Requirement</h3>
          <p>A person who motivates others in the achievement of personal objectives such as improving relationships, setting goals, and determining priorities.</p>

        </div>
        <div className="columns">
          <h3>Planning</h3>
          <p>A person who acts independently without being affiliated with an organization. Who pursues a profession without a long-term commitment to any one employer.</p>

        </div>
        <div className="columns">
          <h3>Dividation</h3>
          <p>An entrepreneur who works “solo,” running their business. They might have contractors for hire, yet have full responsibility for running their business</p>

        </div>

        <div className="columns">
          <h3>Designing</h3>
          <p>An entrepreneur who works “solo,” running their business. They might have contractors for hire, yet have full responsibility for running their business</p>

        </div>

        <div className="columns">
          <h3>Testing</h3>
          <p>An entrepreneur who works “solo,” running their business. They might have contractors for hire, yet have full responsibility for running their business</p>

        </div>

        <div className="columns">
          <h3>Implementation</h3>
          <p>An entrepreneur who works “solo,” running their business. They might have contractors for hire, yet have full responsibility for running their business</p>

        </div>


      </div>
      </div>
    </>
  );
}
export default Home;
