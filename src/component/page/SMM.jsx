import React from 'react'
import './SMM.css'
import smm from '../assest/smm.json'
import Lottie from 'lottie-react'

function SMM() {
  return (
    <>
    <div className="smm-main">
      <div className="smmone">
     <div className="ssmm">
     <h2>Grow Your Social Media Instantly</h2>
        <h2>with</h2>
        <h2>Our SMM Panel</h2>

        <p>Boost your social media growth effortlessly with our SMM panel. Affordable, fast, and reliable solutions to increase engagement and followers instantly!</p>
     </div>
      </div>

      <div className="smm-sec">
        <div className="anmi">
          <Lottie animationData={smm} loop={true}/>
        </div>
      </div>
    </div>
    
    </>

  )
}

export default SMM
