import React from 'react'
import './web.css'
import webimage from '../assest/webbgai.png'
import webtype from '../assest/webtypebgimg.png'
import web12 from '../assest/web12bgimg.png'
import web13 from '../assest/web13bgimg.png'
import webjava from '../assest/webjavabgimg.png'
import webreact from '../assest/webreactbgimg.png'
import webui from '../assest/webuibgimg.png'
import websec3 from '../assest/websec3bgimg.png'
import man from '../assest/manbg.png'
import star from '../assest/star2bg.png'
import AI from '../assest/AI2img.png'
function web() {
  return (
    <>
      <div className="webone">
        <div className="webtextmain">
          <h1 style={{ color: "black" }}><b>Web Devlopment</b></h1>
          <h3 style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet,  <br />consectetur adipisicing elit.</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint laboriosam delectus optio odit dolores officia ex omnis aut! Recusandae accusamus dolore, quibusdam fugit dolorem ratione quaerat fuga nihil iste perferendis?</p>
        </div>
        <div className="webtextmain2">
          <img src={webimage} alt="" />
        </div>
      </div>

      <div className="webtwo">
        <div className="webthree">
          <h6>web Devlopment</h6>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo earum
            iste quos modi officiis voluptaiciis voluptatem incidunt eligendi ipsam neque hic</p>
          <img src={webtype} alt="" />
        </div>
        <div className="webfour">
          <h6>Web Devlopment</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum culpa ab nam voluptatem accusamus adipisci corrupti soluta quaerat tenetur minima!</p>
          <img src={web12} alt="" />
        </div>
        <div className="webfive">
          <h6>Web Devlopment</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate optio incidunt minus hic ipsa? Quaerat illum magni obcaecati laboriosam suscipit!</p>
          <img src={web13} alt="" />
        </div>
      </div>
      <div className="websix">
        <div className="webseven">

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam sunt omnis unde sed ipsum tempore voluptatem blanditiis at quos.</p>
          <img src={webreact} alt="" />
        </div>
        <div className="webeight">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure asperiores sed, quidem in atque laudantium reprehenderit eaque ut veritatis recusandae!</p>
          <img src={webjava} alt="" />
        </div>
        <div className="webnine">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sit possimus accusamus totam ullam et, cumque suscipit quisquam corrupti ratione.</p>
          <img src={webui} alt="" />
        </div>
      </div>
      <div className="webten">
        <div className="webtwelve">
          <img src={websec3} alt="" />
        </div>

        <div className="webeleven">
          <h1 style={{ color: 'white' }}>About Web Development</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, reprehenderit tempore hic fugit voluptates amet itaque numquam soluta sint distinctio mollitia aperiam nobis est obcaecati saepe ut maiores, quisquam ipsam tenetur. Laboriosam rem tempora soluta quos labore culpa cumque corporis architecto, eveniet dicta pariatur ullam similique nesciunt placeat enim eius?</p>
          <div className="webelevenpartmain">
            <div className="webelevenpart">
              <h4>Frontend Development</h4>
              <h4>Database Schema</h4>
            </div>
            <div className="webelevenpart3">   </div>
            <div className="webelevenparttwo">
              <h4>Backend Development</h4>
              <h4>UI/UX</h4>

            </div>

          </div>

        </div>
      </div>
      <div className="webthriteen">
        <div className="webfourteen">
          <div className="webfourteenpart">
            <img src={man} alt="" />
          </div>
          <div className="webfourteenparttwo">
            <h3>Trusted by <u>99+</u></h3>
            <h3>Clients for<u>199+</u></h3>
            <h3>Projects</h3>
          </div>
        </div>
        <div className="webfifteen">
          <div className="webfifteenpart">
            <h2 style={{ color: "black" }}><b>15+</b></h2>
            <p><b>creative team to <br />care for projects</b></p>
          </div>
          <div className="webfifteenparttwo">
            <h1 style={{ color: "black" }}>4.9</h1>
            <img src={star} alt="" />
            <p><b>199+ Rating</b></p>
          </div>
        </div>
      </div>
      <div className="websixteen">
        <div className="webseventeen">
          <h1 style={{ color: "white" }}><span>AI Integration</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure omnis cupiditate? Blanditiis, cupiditate. Repellat neque enim nemo dolores quos eos dolore amet sed sunt, exercitationem pariatur a tempore cupiditate!</p>


          <div className="webeighteen">
            <div className="webnineteen">
              <ul>
                <li><h5>Natural Language Processing</h5></li>
                <li><h5>AI Chatbots and Assistants</h5></li>
                <li><h5>Predictive Analutics</h5></li>
            
           
                <li> <h5>Image Recognition</h5></li>
                <li> <h5>AI Automation Tools</h5></li>
                <li> <h5>Data Analysic with ML</h5></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="webtwentyone">
          <img src={AI} alt="" />
        </div>
      </div>

    </>
  )
}

export default web