import React from 'react';
import "./web.css";
import under from '../assest/under.png';

function webdevelopment() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <img style={{ width: "550px", height: "350px" }} src={under} alt="" />
    </div>
  )
}

export default webdevelopment;