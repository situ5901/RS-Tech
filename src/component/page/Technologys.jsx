import React from 'react';
import './Technologys.css';
import py from '../assest/py.png'
import react from '../assest/react.png'
import node from '../assest/nodejs.png'
import mongo from '../assest/mongoDB.png'
import nestjs from '../assest/nestjs.png'
import express from '../assest/express.png'
import java from '../assest/java.png'
import angular from '../assest/angular.png'
import docker from '../assest/docker.png'
import flutter from '../assest/flutter.png'
import wordpress from '../assest/wordpress.png'
import icon from '../assest/icon.png'
import Lottie from 'lottie-react';
import friebase from '../assest/friebase.png'
import laravel from '../assest/laravel.png'
import php from '../assest/php.png'
import sql from '../assest/sql.png'
import Lotti from '../assest/Lotti.json'

function Technologys() {
  return (
    <div>
      <div className='text'><p style={{textAlign:'center',fontSize:30}}>Our main Focus is on Technology  and we are Experts in this Technology</p></div>
      <div className="cant">
        <div className="left">
          <div className="one">
            <img src={react} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={node} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={mongo} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={nestjs} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={java} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={express} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={angular} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={docker} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={flutter} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={friebase} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={wordpress} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={py} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={laravel} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={php} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={sql} alt="" style={{height:50,width:50}}/>
            </div>
          <div className="one">
            <img src={icon} alt="" style={{height:50,width:50}}/>
            </div>
        </div>
        <div className="sit">
          <Lottie animationData={Lotti} loop={true} />
        </div>
      </div>
    </div>
  );
}

export default Technologys;
