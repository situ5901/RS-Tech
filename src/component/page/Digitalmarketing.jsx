import React from 'react';
import './digital.css';
import d3 from '../assest/mrbrain21.jpg';
import Lottie from 'lottie-react';
import lottie from '../assest/graph.json'
import Growth from '../assest/growthremove.png'
import Gloti from '../assest/growthlotti.json'


function Digitalmarketing() {
  return (
    <>
      <div className="new">
        <div className="newmain">
          <div className="newone">
            <div className="n1">
              <h1 style={{ color: 'white' }}><b>We help you</b></h1>
            </div>
            <div className="n1">
              <h1 style={{ color: 'white' }}><b>grow your business</b></h1>
            </div>
            <div className="n1">
              <h1 style={{ color: 'white' }}><b>faster</b></h1>
            </div>
            <div className="n1">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam totam, natus aspernatur officia error architecto.</p>
            </div>
          </div>
          <div className="newtwo">
            <Lottie animationData={lottie} loop={true} />
          </div>
        </div>
      </div>

      <div className="new2">
        <div className="newthree">
          <img src={d3} alt="Brainstorm" />
        </div>
        <div className="newfour">
          <h1>💯🚀🎯</h1>
          <h2>Boost Your Online <br />
            Presence with Digital <br />
            Marketing Service
          </h2>
        </div>
      </div>

     <div className="errortext">
     <div className="newfive">
        <div className="newsix">
          <h3>Digital Marketing</h3>
          <p>Elementum venenotis ornare.<br />Sollicitudin mouris</p>
        </div>
        <div className="seven">
          <h3>Social Media</h3>
          <p>Elementum venenotis ornare.<br />Sollicitudin mouris</p>
        </div>
        <div className="eight">
          <h3>Creative Branding</h3>
          <p>Elementum venenotis ornare.<br />Sollicitudin mouris</p>
        </div>
      </div>
     </div>

      <div className="nine">
        <div className="ten">
          <h1><b>Helping Millions Grow Better Since 2024</b></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores aperiam natus optio, asperiores enim, velit fuga odit maxime corrupti.</p>
          
        </div>
        <div className="twelve">
          <Lottie animationData={Gloti}/>
        </div>
      </div>

      <div className="thirteen">
        <h1><b>Elevate Your Digital Presence Today</b></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos voluptas id, quam<br/> quia nisi quaerat odit minus facilis.</p>
      </div>

      <div className="fourteen">
        <div className="fifteen">
          <h3>Digital Strategy</h3>
          <p>Elementum venenotis ornare.<br />Sollicitudin mouris</p>
        </div>
        <div className="sixteen">
          <h3>Content Planning</h3>
          <p>Elementum venenotis ornare.<br />Sollicitudin mouris</p>
        </div>
        <div className="seventeen">
          <h3>Graphic Design</h3>
          <p>Elementum venenotis ornare.<br />Sollicitudin mouris</p>
        </div>
      </div>

      <div className="eighteen">
        <div className="nineteen">
          <h3>Website Design</h3>
          <p>Elementum venenotis ornare.<br />Sollicitudin mouris</p>
        </div>
        <div className="twenty">
          <h3>Storytelling</h3>
          <p>Elementum venenotis ornare.<br />Sollicitudin mouris</p>
        </div>
        <div className="twentyone">
          <h3>Copywriting</h3>
          <p>Elementum venenotis ornare.<br />Sollicitudin mouris</p>
        </div>
      </div>

      <div className="twentytwo">
        <div className="twentyfour">
          <h1><b>Choose Us to Grow <br />Your Business</b></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis exercitationem doloremque dolorem. Commodi incidunt dolores.</p>
          <h4>Result-Driven Approach</h4>
          <h4>Expertise in Multiple Platforms</h4>
          <h4>Continuous Optimization</h4>
        </div>
        <div className="twentythree">
          <img src={Growth} alt="" className='DGIMAGE'/>
        </div>
      </div>
    </>
  );
}

export default Digitalmarketing;