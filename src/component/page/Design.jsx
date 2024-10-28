import React from 'react'
import './Design.css'
import Figma from '../assest/figma.png'
import Lottie from 'lottie-react';
import Canva from '../assest/canva.png'
import Adobe from '../assest/AdobeXD.png'
import PS from '../assest/Photoshop.png'
import DesLotti from '../assest/UIlotti.json'
import DigiLotti from '../assest/digilotti.json'


function Design() {
  return (
    <>
      <div className="design-container">
        <div className="design-section-one">
          <div className='section-one-text'>
            <h1 className="heading-large" style={{ color: 'white' }}>UX/UI</h1>
            <p className="paragraph">Create website and application designs with us</p>
          </div>
        </div>

        <div className="design-section-two">
          <div className='section-two-title'>
            <h1><p><b>Elevate Your Brand with</b></p></h1>
            <h1><p>Stunning UX/UI Design</p></h1>
          </div>
          <div className='section-two-subtitle'>
            <h2 className="subtitle" style={{ color: 'black' }}>Start with us</h2>
          </div>
          <div className='section-two-description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo natus numquam quasi fuga. Quos.</p>
          </div>
        </div>
      </div>

      <div className="tools-section">
        <div className="tool">
          <img className='tool-img' src={Figma} alt="Figma" />
          <h2 className="tool-title">Figma</h2>
        </div>
        <div className="tool">
          <img className='tool-img' src={Canva} alt="Canva" />
          <h2 className="tool-title">Canva</h2>
        </div>
        <div className="tool">
          <img className='tool-img' src={Adobe} alt="Adobe XD" />
          <h2 className="tool-title">Adobe</h2>
        </div>
        <div className="tool">
          <img className='tool-img' src={PS} alt="Photoshop" />
          <h2 className="tool-title">Photoshop</h2>
        </div>
      </div>



      <div className="main-design">
        <div className="design-section-three">
          <div className="text-block">
            <h2 className="heading">This is Demo Text</h2>
            <h2 className="subheading">Welcome to ui/ux page</h2>
            <h3 className="intro">Hello Everyone</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora nobis distinctio.</p>
          </div>
          <div className="lottie-animation">
            <Lottie className='lottie' animationData={DesLotti} loop={true} />
          </div>
        </div>
      </div>
      <div className="dollarmain">
        <div className="dollarfive">

          <Lottie animationData={DigiLotti} loop={true} />

        </div>
        <div className="dollarone">
          <h2 style={{ color: 'white' }}>Light, Fast & Powerful</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nam ullam placeat dolor expedita labore blanditiis, aut odio quaerat quas, vel enim asperiores esse aperiam officiis ab minima eveniet laboriosam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolores aut beatae vitae laboriosam praesentium!</p>
          <div className="dollartwo">
            <div className="dollarthree">
              <h3>Title Goes Here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequuntur voluptatibus eaque, ad quos cum?</p>
            </div>
            <div className="dollarfour">
              <h3>Title Goes Here</h3>
              <p>Lorem ipsum dolc, eaque nostrum quis ex sit nemo eveniet beatae fuga necessitatibus, ab perspiciatis. Culpa quas</p>
            </div>
          </div>
        </div>


      </div>
      <div className="indexmain">
        <div className="indexone">
          <div className="indexseven">
            <div className="indextwo">
              <h3><b>5 Years of Experience</b></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam autem obcaecati recusandae ducimus, quo deserunt ab doloremque?</p>
            </div>
            <div className="indexthree">
              <h3><b>100% Satisfication</b></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque recusandae dolorum minus repellendus velit libero accusamus unde quos.</p>
            </div>
          </div>
          <div className="indexeight">
            <div className="indexfour">
              <h3><b>Expert Team Members</b></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolore magnam a quis vitae illo eligendi minus nostrum deserunt ab doloremque?</p>
            </div>
            <div className="indexfive">
              <h3><b>Best in India</b></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo corrupti quo, a delectus consectetur accusantium sapiente maxime atque?</p>
            </div>
          </div>
        </div>
        <div className="indexsix">
          <h1><b style={{ color: 'black' }}>What Makes Us The Best From Others</b></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iusto consectetur necessitatibus nihil magni, illo, dicta rem recusandae sit, quisquam saepe dolorum?</p>
        </div>
      </div>
    </>
  )
}

export default Design;