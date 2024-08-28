import React from 'react'
import "./web.css"
import Lottie from 'lottie-react';
import webdev from '../assest/web.json'
import tech1 from '../assest/technologys.json'
import tech2 from '../assest/tech2.json'
import tech3 from '../assest/tech3.json'
function web() {
  return (
    <>
      <div className="webmain">

        <div className="webone">
          <h1 style={{ fontWeight: 'bold' }}>What is Web Development</h1>
          <p>Web development is the process of building and maintaining websites, web applications, and mobile applications that run on the internet. It involves a combination of programming languages, frameworks, tools, and databases to create a dynamic and interactive online experience for users.</p>
          <h2 style={{ fontWeight: 'bold', fontSize: 20 }}>Web development can be broadly classified into two categories:</h2>
          <ul>
            <li> <b>Front-end development:</b> Focuses on creating the user interface and user experience of a website or application using programming languages like HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js.</li>
            <br />
            <li> <b>Back-end development:</b> Deals with the server-side logic, database integration, and API connectivity using programming languages like Java, Python, Ruby, PHP, and frameworks like Node.js, Django, and Ruby on Rails.</li>
          </ul>
        </div>

        <div className="webtwo">

          <Lottie animationData={webdev} loop={true} />
        </div>
      </div>




      <div className="webmain">

        <div className="webone">
          <Lottie animationData={tech1} loop={true} style={{ height: '90%' }} />
        </div>

        <div className="webtwo">
          <h2 style={{ fontWeight: 'bold' }}>Technologies in Web Development:</h2>
          <p>Here's a non-exhaustive list of popular technologies used in web development:</p>
          <h2 style={{ fontSize: 20 }}>Front-end Technologies:</h2>
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>jQuery</li>
            <li>Vue.js</li>
            <li>Ember.js</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>Material-UI</li>
            <li>HTML(Hypertext Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>

          </ul>
        </div>
      </div>


      <div className="webmain">

        <div className="webone">
          <h2 style={{ fontWeight: 'bold' }}>Technologies in Web Development:</h2>
          <p>Here's a non-exhaustive list of popular technologies used in web development:</p>
          <h2 style={{ fontSize: 20 }}>Back-end Technologies:</h2>
          <ul>
            <li>Node.js (JavaScript runtime)</li>
            <li>Ruby on Rails (Ruby framework)</li>
            <li>Laravel (PHP framework)</li>
            <li>Express.js (Node.js framework)</li>
            <li>Python (programming language)</li>
            <li>Firebase Realtime Database</li>
            <li>PHP (programming language)</li>
            <li>Java (programming language)</li>

          </ul>
        </div>

        <div className="webtwo">
          <Lottie animationData={tech2} loop={true} style={{ height: '90%' }} />
        </div>
      </div>

      <div className="webmain">

        <div className="webone">
          <Lottie animationData={tech3} loop={true} style={{ height: '90%' }} />

        </div>

        <div className="webtwo">
          <h2 style={{ fontWeight: 'bold' }}>Technologies in Web Development:</h2>
          <p>Here's a non-exhaustive list of popular technologies used in web development:</p>
          <h2 style={{ fontSize: 20 }}>Database</h2>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>SQL Server</li>
            <li>Oracle </li>
            <li>Firebase Realtime Database</li>
            <li>JavaScript</li>
            <li>Material-UI</li>
            <li>HTML(Hypertext Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>

          </ul>
        </div>
      </div>


    </>
  )
}

export default web
