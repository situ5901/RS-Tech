import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './component/page/About';
// import Linkedin from './component/assest/Linkedin.png'
import Services from './component/page/Technology.jsx';
import Careers from './component/page/Careers';
import { Navbar } from './component/page/Navbar';
import Home from './component/page/Home.jsx';
import Contact from './component/page/contact'
import Web from './component/page/web.jsx'
import Error from './component/page/Error.jsx';
import Design from './component/page/Design.jsx';
import Appdevelopment from './component/page/Appdev.jsx';
import Digitalmarketing from './component/page/Digitalmarketing.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"
import { useEffect, useState } from 'react';
import Footer from './component/page/Footer.jsx';
import PPC from './component/page/PPC.jsx';
import SEO from './component/page/SEO.jsx';
import SMM from './component/page/SMM.jsx';



function App() {

  const [show, setShow] = useState(false);
  const [pop,setpop] = useState([])
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 3000); // show the modal after 2 seconds
    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => setShow(false);
  


  useEffect(() => {
    axios.get('http://127.0.0.1:3001/situ')
      .then(response => {
        setpop(response.data); // Update show state with response data
      })
      .catch(error => {
        console.error(error); // Log error to console
      });
  }, []); 

  return (
    <>
      <Navbar />


      {/* Modal show pop-up */}

     
{pop.map((popup)=>{
  return(

    <Modal
    show={show}
    onHide={handleClose}
    aria-labelledby="example-modal-sizes-title-sm"
    backgroundColor="white" // or bg="white"
    centered
    enforceFocus={false}
    keyboard={true}
  >
    <Modal.Header closeButton style={{ backgroundColor: '#ffffff', color: 'black',height:"60px" }} >
      <Modal.Title id="example-modal-sizes-title-sm" style={{ color: 'black',textAlign:"center" }}>
        <div className="linkedin" style={{ display: "flex" }}>
          {/* Connetc Linkedin */}
          <p style={{marginTop:"20px",textAlign:"center"}}>{popup.name}</p>
          <svg style={{marginTop:"18px"}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0 0 48 48" >
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
          </svg>
        </div>

      </Modal.Title>
    </Modal.Header>
    <Modal.Body style={{ backgroundColor: '#01091b', color: 'white', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="pop" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={popup.image} alt="" width={"150px"} height={"150px"} />
        <p style={{ marginLeft: '25px', marginRight: "25px", fontSize: '12px', textAlign: 'left', maxWidth: '300px', lineHeight: '1.5', wordSpacing: 'normal', letterSpacing: 'normal' }}>
         {popup.message}
        </p>
      </div>
    </Modal.Body>

    <Modal.Footer style={{ backgroundColor: '#01091b', color: 'white' }}>
      <Button variant="secondary" onClick={handleClose} style={{ backgroundColor: 'white', color: 'black', border: 'none' }}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  )
})

}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/web" element={<Web />} />
        <Route path='*' element={<Error />} />
        <Route path="/Design" element={<Design />} />
        <Route path="/Appdevelopment" element={<Appdevelopment />} />
        <Route path="/DigitalMarketing" element={<Digitalmarketing />} />
        <Route path="/ppc" element={<PPC />} />
        <Route path="/SEO" element={<SEO/>}/>
        <Route path="/SocialMedia" element={<SMM />} />
      </Routes>

    <Footer/>
    </>
  )
}

export default App
