import React from 'react';
import Rta from '../assest/rta.jpeg';
import Gph from '../assest/gph.jpeg'
import "./Flax.css"

function Flax() {
  return (
    <>
    <div className="textfor">
            <h2 style={{fontSize:"25px",color:"#10190b",marginTop:"25px",textAlign:"center"}}>Why Organizations Choose Repozitory</h2>
          </div>
      <div className="flax">
        <div className="one-flax">
           <p><b>Project objectives:-</b>Clearly define and outline specific, measurable, achievable, relevant, and time-bound (SMART) goals to ensure successful project delivery and stakeholder satisfaction.</p>  
           <p><b>Project objectives:-</b>Clearly define and outline specific, measurable, achievable, relevant, and time-bound (SMART) goals to ensure successful project delivery and stakeholder satisfaction.</p>  
           <p><b>Project objectives:-</b>Clearly define and outline specific, measurable, achievable, relevant, and time-bound (SMART) goals to ensure successful project delivery and stakeholder satisfaction.</p>  
           <p><b>Project objectives:-</b>Clearly define and outline specific, measurable, achievable, relevant, and time-bound (SMART) goals to ensure successful project delivery and stakeholder satisfaction.</p>  
           <p><b>Project objectives:-</b>Clearly define and outline specific, measurable, achievable, relevant, and time-bound (SMART) goals to ensure successful project delivery and stakeholder satisfaction.</p>  
           <p><b>Project objectives:-</b>Clearly define and outline specific, measurable, achievable, relevant, and time-bound (SMART) goals to ensure successful project delivery and stakeholder satisfaction.</p>  
           <p><b>Project objectives:-</b>Clearly define and outline specific, measurable, achievable, relevant, and time-bound (SMART) goals to ensure successful project delivery and stakeholder satisfaction.</p>  
           <p><b>Project objectives:-</b>Clearly define and outline specific, measurable, achievable, relevant, and time-bound (SMART) goals to ensure successful project delivery and stakeholder satisfaction.</p>  

           <p><b>Project objectives:-</b>Clearly define and outline specific, measurable, achievable, relevant, and time-bound (SMART) goals to ensure successful project delivery and stakeholder satisfaction.</p>  


           <p><b>Project objectives:-</b>Clearly define and outline specific, measurable, achievable, relevant, and time-bound (SMART) goals to ensure successful project delivery and stakeholder satisfaction.</p>  




        </div>
        <div className="two-flax">
          <div id="carouselExampleControls" className="carousel slide m-4 justify-content-center" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active bg-white">
                <div className="row ">
                  <div className="col-md-6" >
                    <img src={Rta} className="d-block w-100 h-75" alt="..." />
                  </div>
                  <div className="col-md-6">
                    <img src={Gph} className="d-block w-100 h-75" alt="..." />
                  </div>
                </div>
              </div>
              <div className="carousel-item bg-white" >
                <div className="row">
                  <div className="col-md-6">
                    <img src={Rta} className="d-block w-100 h-75 " alt="..." />
                  </div>
                  <div className="col-md-6">
                    <img src={Gph} className="d-block w-100 h-75 " alt="..." />
                  </div>
                </div>
              </div>
              <div className="carousel-item bg-white">
                <div className="row">
                  <div className="col-md-6">
                    <img src={Rta} className="d-block w-100 h-75 " alt="..." />
                  </div>
                  <div className="col-md-6">
                    <img src={Gph} className="d-block w-100 h-75 " alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flax;