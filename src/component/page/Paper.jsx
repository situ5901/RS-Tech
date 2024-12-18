import React from 'react'
import './Paper.css'
import { Link } from 'react-router-dom';

function Paper() {
  return (
    <div className="branch-sec">
      <div className="branch-title">
        <h1>Computer Enginnering</h1>
      </div>
      <div className="paper-list">
        <div className="paper-box">
          <span>🌟</span>
          <h4>COMMON-1-YEAR-APPLIED-CHEMISTRY-180014-2023</h4>
        </div>
        <div className="download-box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-2QTebY4VF9vNUKB6B5V7ktyOGyuASmBGQ&s" alt="" />
          <button className="Download-button" onClick={() => window.open("https://www.hsbteonline.com/papers/computer-6-sem-mobile-application-development-v2-180863-2023.pdf", "_blank")}>
            <svg
              viewBox="0 0 640 512"
              width="20"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
              ></path>
            </svg>
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Paper
