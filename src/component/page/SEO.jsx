import React from 'react';
import SEOIMG from "../assest/SEO.png";
import Lottie from 'lottie-react'; // Default import of Lottie
import SERGRP from "../assest/GPHA.json";
import SEOIMN from "../assest/SEO.json"
import "./SEO.css";

function SEO() {
  return (
    <>
      <div className="SEOMain">
        <div className="SEOMAINONE">
          <h2 style={{ fontSize: "38px" }}><b>Your Website’s Ranking Drive</b></h2>
          <h2 style={{ fontSize: "28px", color: "blue" }}>More Traffic Effortlessly</h2>
          <p>Unleash the Power of SEO: Proven Techniques to Skyrocket Your Website's Ranking, Increase Organic Traffic, and Drive Long-Term Success in Competitive Digital Landscapes</p>
        </div>
        <div className="SEOMAINTWO">
          <img src={SEOIMG} alt="" />
        </div>
      </div>
      <hr className='HRSEOTG' />
      <div className="SEOSECOND">
        <div className="SEOSEC">
          <h1 style={{ color: "white" }}>Hello</h1>
          <p style={{ color: "white" }}>Jarry</p>
        </div>
        <div className="SEOSED">
          <h1 style={{ color: "white" }}>Hello</h1>
          <p style={{ color: "white" }}>Jarry</p>
        </div>
        <div className="SEOSECE">
          <h1 style={{ color: "white" }}>Hello</h1>
          <p style={{ color: "white" }}>Jarry</p>
        </div>
        <div className="SEOSEDF">
          <h1 style={{ color: "white" }}>Hello</h1>
          <p style={{ color: "white" }}>Jarry</p>
        </div>
      </div>
      <div className="SEOTHREEMAIN">
        <div className="SEROTHREEONE">
          <Lottie animationData={SERGRP} />
        </div>
        <div className="SEROTHREETWO">
          <h1 style={{ fontSize: "32px", marginTop: "20px", color: "white" }}>Technical SEO</h1>
          <h1 style={{ fontSize: "32px", marginTop: "20px", color: "white" }}>On-Page SEO Optimization</h1>
          <h1 style={{ fontSize: "32px", marginTop: "20px", color: "white" }}>Link Building and Backlinks</h1>
          <h1 style={{ fontSize: "32px", marginTop: "20px", color: "white" }}>High-Quality Content Creation</h1>
          <h1 style={{ fontSize: "32px", marginTop: "20px", color: "white" }}>Keyword Research and Optimization</h1>
          <p style={{ color: "white" }}>SEO strategies include keyword research, high-quality content, on-page optimization, link building, and technical SEO to improve rankings, traffic, and visibility.</p>
        </div>
      </div>

      <hr />

      <div className="SEROHEE">
        <div className="SEOMA">
          <div className="SEORound">

          </div>
          <div className="INF">
            <div className="SEOTXT">
              <p style={{ textAlign: "center" }}>Name</p>
              <p style={{ textAlign: "center" }}>Heena Kumari</p>
            </div>
            <div className="SEOTXT">
              <p style={{ textAlign: "center" }}>Qualification</p>
              <p style={{ textAlign: "center" }}>B.TECH</p>
            </div><div className="SEOTXT">
              <p style={{ textAlign: "center" }}>Designation</p>
              <p style={{ textAlign: "center" }}>SEO Executive</p>
            </div><div className="SEOTXT">
              <p style={{ textAlign: "center" }}>Experience</p>
              <p style={{ textAlign: "center" }}>4.3 Years</p>
            </div>
            <div className="SEOTXT">
              <Lottie
                animationData={SEOIMN}
                loop={true}
                style={{ height: "200px", width: "200px",marginLeft:"80px"}}
              />
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default SEO;
