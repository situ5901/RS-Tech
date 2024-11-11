import React from 'react';
import './SMM.css';
import Lottie from 'lottie-react';
import SMMMM from "../assest/AMM.png"
import SMMPANEL from "../assest/SMMPANEL.json"
function SMM() {
  return (
    <>
      <div className="smm-main">
        <div className="smmone">
          <div className="ssmm">
            <h2 className='animationSMM'>Grow Your <span> Social Media</span> Instantly</h2>
            <h2 style={{ color: "white" }}>with</h2>
            <h2 style={{ color: "white" }}>Our SMM Panel</h2>

            <p style={{ color: "white" }}>Boost your social media growth effortlessly with our SMM panel. Affordable, fast, and reliable solutions to increase engagement and followers instantly!</p>
          </div>
        </div>

        <div className="smm-sec">
          <div className="anmi">
            <img src={SMMMM} alt="" />
          </div>
        </div>
      </div>
      <div className="SMMHR">

      </div>

      <div className="SEOSEOND">
        <div className="card-container">
          <div className="card">
            <h3>Card 1</h3>
            <p>This is the description for Card 1.</p>
          </div>
          <div className="card">
            <h3>Card 2</h3>
            <p>This is the description for Card 2.</p>
          </div>
          <div className="card">
            <h3>Card 3</h3>
            <p>This is the description for Card 3.</p>
          </div>
          <div className="card">
            <h3>Card 4</h3>
            <p>This is the description for Card 4.</p>
          </div>
        </div>
      </div>


      <div className="SMMSITU">
        <div className="SEOTHREE">
          <div className="SERTHREE1">
            <div className="card-row">
              <div className="card">Card 1</div>
              <div className="card">Card 2</div>
             </div>
             <div className="card-row">
              <div className="card">Card 3</div>
              <div className="card">Card 4</div>
            </div>
           </div>
           <div className="SERTHREE2">
            <h1 className='SERTHREE2TEXT' style={{ color: "white" }}>Boost Social Media Engagement with Our <span>Reliable SMM Panel</span> Services.</h1>
            <p>Our SMM panel provides fast, affordable services to boost engagement, increase followers, and maximize social media presence effectively.</p>
          </div>
        </div>
      </div>




      <div className="SMMFOREMAA">

        <div className="SMMFORE">
          <div className="SMMFOREONE">
            <p style={{ fontSize: "20px" }} className='SMMTEST'>Here are five reasons people use SMM <span> <b>(Social Media Marketing)</b> </span> panels:</p>
            <p><b>1.Affordable Social Media Growth:</b>SMM panels offer cost-effective ways to increase followers, likes, views, and engagement quickly. </p>
            <p><b>2.Time Efficiency:</b>They help users grow their social media presence faster than organic growth alone.</p>
            <p><b>3.Wide Range of Services:</b>Panels provide various services, including targeted engagement, post boosts, and profile enhancement across multiple platforms.</p>
            <p><b>4.Easy Management:</b>Most panels have a user-friendly interface, making it easy to place and manage multiple orders at once.</p>
            <p><b>Improved Social Proof: </b>Higher follower counts and engagement rates can improve credibility and attract organic followers.</p>
          </div>
          <div className="SMMFORETWO">
            <Lottie style={{ width: '400px', height: '400px' }} animationData={SMMPANEL} loop={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SMM;
