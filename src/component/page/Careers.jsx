import React from 'react'
import "./Careers.css"
import MSME from "../assest/MSME.png"
import FUN from "../assest/FUN.png"
import GPHIMG from "../assest/GPH.png"
import COD from "../assest/COD.jpg"
import TOP from "../assest/TOP.png"
function Careers() {
  return (
    <>
      <div className="OURTEAM">
        <div className="OUTTEXT">
          <h1 style={{ color: "black" }}>Welcome to <span> OUR Team RS-Tech</span></h1>
          <p>Our dedication to delivering excellence fuels our passion, propelling us to greater heights. Join us in creating a lasting impact as we work toward a mission that inspires change, empowers communities, and transforms lives globally. Together, we can achieve extraordinary results and make a difference that truly matters.</p>
        </div>
        <div className="OURCR">
          <div className="OURCUST">
            <div className="OUR1">
              <div className="TSTSTS">
                <div className="CEO">

                </div>
                <div className="CEO2">

                </div>
                <div className="CEO4">

                </div>
                <div className="CEO5">

               </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className='Carrer' />
      <div className="CarrerTeam">
        <div className="CarrerTeams">
          <h2>Our <ins><span style={{ color: "#012141" }}>Workplace</span></ins> </h2>
        </div>
        <div className="CarrerWork">
          <div className="Carreone">
            <h4>RS Technologies has been certified as a Great Place to Work by the Great Place to Work Institute. This certification recognizes our commitment to creating a positive, inclusive, and empowering workplace culture for all our stakeholders.</h4>
          </div>
          <div className="Carretwo">
            <img src={MSME} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="BHJ">
        <h2>Our Team Section:</h2>
        <p>Our team is a dynamic blend of innovators, tech enthusiasts, and leaders <br /> dedicated to driving growth, delivering excellence, and creating impactful solutions for a brighter, tech-enabled future.</p>
      </div>
      <div className="OURMEMBERS">
  <div className="OURFIRST">
    <div className="OURMAIN"></div>
    <div className="OURTEXT">
      <h4>Sr.SDE</h4>
      <p>Miss.Shagun Kumari</p>
    </div>
  </div>
  <div className="OURFIRST2">
    <div className="OURMAIN2"></div>
    <div className="OURTEXT">
      <h4>Jr.SDE</h4>
      <p>Tony Thakral</p>
    </div>
  </div>
  <div className="OURFIRST3">
    <div className="OURMAIN3"></div>
    <div className="OURTEXT">
      <h4>Jr.SDE</h4>
      <p>Sukhbir</p>
    </div>
  </div>
  <div className="OURFIRST4">
    <div className="OURMAIN4"></div>
    <div className="OURTEXT">
      <h4>Heading 4</h4>
      <p>Subheading 4</p>
    </div>
  </div>
</div>


      <div className="MainCarreres">
        <h2 style={{ textAlign: "center" }}>Why Organizations Choose <ins style={{ color: "red" }}>RS-<span style={{ color: "black" }}>Tech</span> </ins></h2>
        <div className="Carrerwhychouse">
          <div className="CarrerePRo">
            <div className="SCOR">
              <div className="PROMAIN">
                <h1 style={{ fontSize: "60px" }}>30+</h1>
                <p>Finished Project</p>
              </div>
              <div className="PROMAIN2">
                <h1 style={{ fontSize: "60px" }}>23+</h1>
                <p>Happy Client</p>
              </div>
              <div className="PROMAIN3">
                <h1 style={{ fontSize: "60px" }}>10+</h1>
                <p>Working Project</p>
              </div>
            </div>
            <div className="expl">
              <p style={{ textAlign: "center" }}>The container highlights our achievements by showcasing client satisfaction, <br /> completed projects, and ongoing work, reflecting our commitment to excellence and continuous progress</p>
            </div>
          </div>
          <div className="CarrerWhyPro">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-interval="2000">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div class="carousel-inner">
               <a href="https://gphisar.ac.in/">
               <div class="carousel-item active">
                  <img src={GPHIMG} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 style={{ color: "black" }}>First slide label</h5>
                    <p style={{ color: "black" }}>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
               </a>
               <a href="http://funisland.co.in/"> <div class="carousel-item">
                  <img src={FUN} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 style={{ color: "black" }}>Second slide label</h5>
                    <p style={{ color: "black" }}>Some representative placeholder content for the second slide.</p>
                  </div>
                </div></a>
                <a href="http://topdocuments.cyou/">
                <div class="carousel-item">
                  <img src={TOP} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 style={{ color: "black" }}>Third slide label</h5>
                    <p style={{ color: "black" }}>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
                </a>

              <a href="https://carondemand.in/">
              <div class="carousel-item">
                  <img src={COD} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 style={{ color: "black" }}>Fourth slide label</h5>
                    <p style={{ color: "black" }}>Some representative placeholder content for the fourth slide.</p>
                  </div>
                </div>
              </a>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Careers
