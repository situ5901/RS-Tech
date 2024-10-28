import React from 'react'
import "./Appdev.css"
import iphone from '../assest/iphone.jpeg';
import apple from '../assest/Apple btn.jpeg';
import playstore from '../assest/Playstore.jpeg';
import design from '../assest/desigin1.jpeg';
import coding from '../assest/coding.jpeg';
import depoly from '../assest/deploy.jpeg';
import mane from '../assest/manegment.jpeg';
import mob1 from '../assest/mobileads4.jpeg';
import mob2 from '../assest/mobileads2.jpeg';
import mob3 from '../assest/mobileads3.jpeg';
function Appdev()  {
  return (
    <>
      <div className="jeetmain">
        <div className="jeetone">
          <div className="jeetitem">
            <h2 className='jeeth1' style={{ color: "black" }}>Your journey to</h2>
            <h2 className='jeeth1' style={{ color: "black" }}>better credits</h2>
            <h2 className='jeeth1' style={{ color: "black" }}><span style={{ background: "#FCA311" }}>starts here</span></h2>
            <p className="jeetpara">Think the credit system is stacked against you? So do we. We'll help you get the credit you deserve.</p>
            <div className="jeetbtn">
              <img src={apple} alt="" />
              <img src={playstore} alt="" />

            </div>
          </div>
        </div>
        <div className="jeettwo">
          <div className="mobile">
            <img style={{height:"432px",width:"252px",borderRadius:"45px"}} src={iphone} alt="" />
          </div>
        </div>
      </div>

      <div className="jeetsecond">
        <div className="secondone">
          <div className="secondtext">
            <h3 className='secondh3'>Trusted by millions of customers.</h3>
          </div>
        </div>
        <div className="secondtwo">
          <div className="box1">
            <p className='secondpara'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
            </p>
            <div className="mainprofile">
            <div className="profile"></div>
            <div className='pro'>
            <h5>Raman</h5>
            <p style={{fontSize:"12px",fontWeight:"400"}}>Webflow Developer</p>
            </div>
            </div>
          </div>
          <div className="box1">
            <p className='secondpara'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
            </p>
            <div className="mainprofile">
            <div className="profile"></div>
            <div className='pro'>
            <h5>Parveen</h5>
            <p style={{fontSize:"12px",fontWeight:"400"}}>Webflow Developer</p>
            </div>
            </div>
          </div>
          <div className="box1">
            <p className='secondpara'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
            </p>
            <div className="mainprofile">
            <div className="profile"></div>
            <div className='pro'>
            <h5>Sukhbir</h5>
            <p style={{fontSize:"12px",fontWeight:"400"}}>Webflow Developer</p>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section3jeet">
        <div className="section3one">
          <h2 className="section3h2">How our Tracker work for you</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequuntur at id repellendus esse deserunt?</p>
          <div className="sectioncard">
            <div className="card1">
              <div style={{height:"100px",width:"100px",boxShadow:"2px 2px 2px 2px gray",borderRadius:"10px"}}>
                <img style={{height:"100px",width:"100px"}} src={design} alt="" />
              </div>
              <div style={{width:"80%"}}>
                <h5 style={{color:"red"}}>Desigining</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, incidunt.</p>
              </div>
            </div>
            <div className="card2">
             <div style={{height:"100px",width:"100px",boxShadow:"2px 2px 2px 2px gray",borderRadius:"10px"}}>
              <img style={{height:"100px",width:"100px"}} src={coding} alt="" />
              </div>
              <div style={{width:"80%"}}>
                <h5 style={{color:"blue"}}>Coding</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, incidunt.</p>
              </div>
            </div>
            <div className="card3">
            <div style={{height:"100px",width:"100px",boxShadow:"2px 2px 2px 2px gray",borderRadius:"10px"}}>
              <img style={{height:"100px",width:"100px",borderRadius:"10px"}} src={depoly} alt="" />
              </div>
              <div style={{width:"80%"}}>
                <h5 style={{color:"#fca311"}}>Deployment</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, incidunt.</p>
              </div>
            </div>
            <div className="card4">
            <div style={{height:"100px",width:"100px",boxShadow:"2px 2px 2px 2px gray",borderRadius:"10px"}}>
              <img style={{height:"100px",width:"100px",borderRadius:"10px"}} src={mane} alt="" />
              </div>
              <div style={{width:"80%"}}>
                <h5 style={{color:"green"}}>Management</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, incidunt.</p>
              </div>
            </div>
           
          </div>
        </div>
        <div className="section3two">
          <div className="twomain">
            <div className="card5"><img style={{width:"300px",height:"300px",boxShadow:"4px 4px 2px 2px black",borderRadius:"20px"}} src={mob1} alt="" /></div>
            <div className="card6"><img style={{width:"250px",height:"300px",boxShadow:"4px 4px 2px 2px black",borderRadius:"20px"}} src={mob2} alt="" /></div>
          </div>
          <div className="twomain2">
             <div className="card7"><img style={{width:"300px",height:"400px",boxShadow:"4px 4px 2px 2px black",borderRadius:"20px"}} src={mob3} alt="" /></div>
          </div>
        </div>
      </div>
      <div className="buttommain">
         <div className="buttomcard">
              <h4>lkjkjhklgkljhkhkjh</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, magnam?</p>
         </div>
      </div>
    </>
  )
}

export default Appdev