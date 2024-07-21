import React from 'react'
import "./Footer.css"
function Footer() {
 
  let year = new Date().getFullYear();

  return (
    <>
     <div className="footer">
      <p>Copyright © {year} RS-Tech. All rights reserved</p>
      </div> 
    </>
  )
}

export default Footer
