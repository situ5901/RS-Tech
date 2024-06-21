import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './component/page/About';
import Services from './component/page/Services';
import Technology from './component/page/Technology';
import Careers from './component/page/Careers';
import { Navbar } from './component/page/Navbar';
import Home from './component/page/Home.jsx';
import Contact from './component/page/contact'
import Web from './component/page/web.jsx'
import Error from './component/page/Error.jsx';
import Design from './component/page/Design.jsx';
import Appdevelopment from './component/page/Appdev.jsx';
import Digitalmarketing from './component/page/Digitalmarketing.jsx';


function App() {
  return (
   <>
 <Navbar/>

<Routes>
<Route path="/"element={<Home/>}/>
  <Route path="/About"element={<About/>}/>
  <Route path="/Services"element={<Services/>}/>
  <Route path="/Technology"element={<Technology/>}/>
  <Route path="/Careers"element={<Careers/>}/>
  <Route path="/Contact"element={<Contact/>}/>
  <Route path="/web" element={<Web/>}/>
  <Route path='*' element={<Error/>}/>
  <Route path="/Design" element={<Design/>}/>
  <Route path="/Appdevelopment" element={<Appdevelopment/>}/>
  <Route path="/DigitalMarketing" element={<Digitalmarketing/>}/>

</Routes>



   </>
  );
}

export default App;
