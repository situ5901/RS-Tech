import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './component/page/About';
import Services from './component/page/Services';
import Technology from './component/page/Technology';
import Careers from './component/page/Careers';
import { Navbar } from './component/page/Navbar';
import Home from './component/page/Home';
import Contact from './component/page/contact'

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
  
</Routes>



   </>
  );
}

export default App;
