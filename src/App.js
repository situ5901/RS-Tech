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
import Compiler from "./component/page/Compiler.jsx"
import SEO from './component/page/SEO.jsx';
import SMM from './component/page/SMM.jsx';
import JpgToPdfConverter from './component/page/JPGtoPDF.jsx'
import AIG from './component/page/AIG.jsx';
import QRcode from "./component/page/QRcode.jsx"
import BG from "./component/page/BG.jsx"



function App() {

  const [show, setShow] = useState(false);
  const [pop,setpop] = useState([])
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 2000); // show the modal after 2 seconds
    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => setShow(false);
  


  useEffect(() => {
    axios.get('http://localhost:3001/popup')
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
      <div className="linkedin" style={{ display: "flex", alignItems: "center" }}>
    {/* Connect LinkedIn */}
    <p style={{ marginTop: "20px", textAlign: "center" }}>{popup.name}</p>
    <img
        style={{ marginTop: "1px", width: "50px", height: "45px" }} 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFUnuVFzzHj1yk7W_UbwxadDqU6Fpdq4w5FXwSrUuLN4OGCbEqI3Anm0wEIAh6OrVTHg&usqp=CAU" 
        alt="AI Face"
    />
</div>


      </Modal.Title>
    </Modal.Header>
    <Modal.Body style={{ backgroundColor: '#01091b', color: 'white', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div className="pop" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <img src={popup.image} alt="" width={"150px"} height={"150px"} />
    <p style={{ marginLeft: '25px', marginRight: "25px", fontSize: '12px', textAlign: 'left', maxWidth: '300px', lineHeight: '1.5', wordSpacing: 'normal', letterSpacing: 'normal' }}>
      {popup.message}
    </p>
  </div>
  <button style={{ padding: '2px 5px', marginTop: '-35px', fontSize: '14px', marginRight:'45px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
 <a style={{textDecoration:'none', color:'white'}} href='/image-generator'> Click Me</a>
</button>
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
        <Route path="/image-generator" element={<AIG/>}/>
        <Route path="/Compiler" element={<Compiler/>}/>
        <Route path="/JpgToPdfConverter" element={<JpgToPdfConverter/>}/>
        <Route path="/QRcode" element={<QRcode/>}/>
        <Route path="/BG" element={<BG/>}/>
        
      </Routes>

    <Footer/>
    </>
  )
}

export default App
