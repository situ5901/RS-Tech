import React from 'react';
import './PPC.css';
import PPCLotti from '../assest/PPC.json';
import Lottie from 'lottie-react';

function PPC() {
  return (
    <>
      {/* PPC Main Section */}
      <div className="ppcmain">
        {/* Headline Section */}
        <div className="ppc-header">
          <h2 className='ppc-one' style={{ fontSize: "50px", lineHeight: "1.2" }}>
            Boost Your Brand Visibility
          </h2>
          <div className="norm">
            <h2>Maximize Your Reach: The Power of PPC Advertising!</h2>
            <p>
              PPC advertising allows businesses to pay for clicks on their ads, enhancing visibility,
              targeting specific audiences, and providing measurable results.
            </p>
          </div>
        </div>
        
        {/* Lottie Animation */}
        <div className="ppc-two">
          <Lottie className="lottie-animation" animationData={PPCLotti} loop={true} />
        </div>
      </div>

      {/* Horizontal Rule */}
      <div className="hr">
        <hr />
      </div>

      {/* PPC Involves Section */}
      <div className="commonly">
        <h2>What PPC Involves:</h2>
        <div className="cardContainer">
          {['Keyword Research', 'Ad Creation', 'Landing Pages', 'Budgeting', 'Bidding Strategies', 'Targeting', 'Analytics', 'Audience Segmentation'].map((item, index) => (
            <div className="cardOne" key={index}>
              <h5>{item}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* PPC Service Section */}
      <div className="ppcthree">
        <div className="ppcservicetwo">
          <div className="ppc-row">
            <div className="ppc-box">Box 1</div>
            <div className="ppc-box">Box 2</div>
          </div>
          <div className="ppc-row">
            <div className="ppc-box">Box 3</div>
            <div className="ppc-box">Box 4</div>
          </div>
        </div>

        {/* PPC Strategies Section */}
        <div className="ppcserviceone">
          <div className="ppctext">
            <h2>Brighten Your Business Growth</h2>
            <h2>With</h2>
            <h2><span className="typewriter">Powerful PPC Strategies!</span></h2>
          </div>
          <div className="para">
            <p><b>1. Instant Results and Visibility</b></p>
            <p>
              PPC ads appear at the top of search results, offering immediate exposure to your target audience.
              This visibility drives traffic quickly, helping you reach potential customers without waiting for organic growth.
            </p>
            <p><b>2. Targeted Reach and Customization</b></p>
            <p>
              PPC allows precise targeting based on location, interests, demographics, and even device type.
              This ensures that ads are shown to the right audience, maximizing conversion rates and reducing unnecessary ad spending.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PPC;
