import React, { useState } from 'react';
import "./contact.css"

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("./register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, phone, message })
      });

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title-contact">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp;
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i> &nbsp;&nbsp;
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>&nbsp;&nbsp;
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form onSubmit={sendEmail}>
            <h3 className="title-contact">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} />
              
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              
              <span>Message</span>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>

    


    
  );
}

export default Contact;