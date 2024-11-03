import React from 'react';
import './PPC.css';
import PPCLotti from '../assest/PPC.json';
import Lottie from 'lottie-react';
import lo1 from '../assest/googleads.png'
import lo2 from '../assest/semrush.png'
import lo3 from '../assest/spyfu.png'
import lo4 from '../assest/wordstream1.png'

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
          <div className="cardOne">
            <br />
            <h5>Keyword Research</h5>
            <p style={{fontSize: "16px", fontWeight: "normal"}}>Keyword research helps identify trends, boosting SEO and driving traffic.</p>
            </div>
          <div className="cardOne">
            <br />
            <h5>Ad Creation</h5>
            <p style={{fontSize: "16px", fontWeight: "normal"}}>Effective keyword research drives targeted ads, maximizing engagement and conversions.</p>
          </div>
          <div className="cardOne">
          <br />
            <h5>Landing Pages</h5>
            <p style={{fontSize: "16px", fontWeight: "normal"}}>Optimized landing pages increase conversions through targeted keyword-driven content.</p>
        
          </div>
          <div className="cardOne">
          <br />
            <h5>Budgeting</h5>
            <p style={{fontSize: "16px", fontWeight: "normal"}}>Strategic budgeting ensures effective keyword research for maximum ROI.</p>
          </div>
          <div className="cardOne">
            <br />
            <h5>Bidding Strategies</h5>
            <p style={{fontSize: "16px", fontWeight: "normal"}}>Keyword research informs bidding strategies, boosting ad placement and performance.</p>
          </div>
          <div className="cardOne">
          <br />
            <h5>Targeting</h5>
            <p style={{fontSize: "16px", fontWeight: "normal"}}>Precise keyword research enhances targeting, reaching the right audience effectively.</p>
          </div>
          <div className="cardOne">
                 <br />
            <h5>Analytics</h5>
            <p style={{fontSize: "16px", fontWeight: "normal"}}>Keyword research and analytics together refine strategies, optimizing campaign results.</p>
          </div>
          <div className="cardOne">
            <br />
            <h5>Audience Segmentation</h5>
            <p style={{fontSize: "16px", fontWeight: "normal"}}>Keyword research enhances audience segmentation, delivering tailored messages to groups.</p>
          </div>
        </div>

      </div>

      {/* PPC Service Section */}
      <div className="ppcthree">
        <div className="ppcservicetwo">
          <div className="ppc-row">
            <div className="ppc-box">
              <img src={lo1} alt="" />
            </div>
            <div className="ppc-box">
              <img src={lo2} alt="" />
            </div>
          </div>
          <div className="ppc-row">
            <div className="ppc-box">
              <img src={lo3} alt="" />
            </div>
            <div className="ppc-box" style={{display: 'flex',justifyContent: 'center',alignItems: 'center',border: '1px solid #ccc',padding: '0'}}>
              <img src={lo4} alt="" style={{width: '100%',height: '100%',objectFit: 'contain'}}
              />
            </div>
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
