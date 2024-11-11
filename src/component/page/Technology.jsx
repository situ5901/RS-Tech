import React from 'react';
import './Technology.css';
import { Link } from 'react-router-dom';

function Technology() {
  return (
    <>

      <div className="SERVHED">
        <div className="SERVICEFREE">
          <h1 style={{ color: "white" }}>we are provide free service for you </h1>
          <h1 style={{ color: "white" }}>Use it or improve your skills</h1>
          <p>Unlock your potential with our free services designed to help you learn and grow. Use them to sharpen and enhance your skills.</p>
        </div>
        <div className="SERVICEFREETWO">
          <img style={{ marginTop: "20px", marginRight: "50px" }} src="https://static.vecteezy.com/system/resources/previews/036/297/761/non_2x/ai-generated-business-woman-showing-thumbs-up-on-a-transparent-background-free-png.png" alt="" height="410px" width="400px" />

        </div>
      </div>

      <div className="image">
        <div className="ServiceONE">
          <Link to="/image-generator" className="SERONE">

          </Link>
          <Link to="/JpgToPdfConverter" className="SERTWO">

          </Link>
          <Link to="/QRcode" className="SERTHREE">

          </Link>
        </div>
        <div className="SERP">
        <div className="servicetext1">
          <p><b>AI Generate Iamge</b></p>
        </div>
        <div className="servicetext2">
          <p><b>JPG to PDF Converter</b></p>
        </div>
        <div className="servicetext3">
          <p><b>QR Code Generatore</b></p>
        </div>
      </div>
        <div className="ServiceONE">
          <Link to="/image-generator" className="Compiler">

          </Link>
          <Link to="/JpgToPdfConverter" className="SERTWO">

          </Link>
          <Link to="/path3" className="SERTHREE">

          </Link>
        </div>
        
      </div>


      <div className="SERP">
        <div className="servicetext1">
          <p><b>Online Code Compiler</b></p>
        </div>
        <div className="servicetext2">
          <p><b>JPG to PDF Converter</b></p>
        </div>
        <div className="servicetext3">
          <p><b>Under Constraction</b></p>
        </div>
      </div>
    </>
  );
}

export default Technology;
