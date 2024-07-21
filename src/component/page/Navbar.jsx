import React, { useState } from "react";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { loginWithRedirect , isAuthenticated, logout ,user } = useAuth0();
 
  const cssStyle = { };
  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting = '';
  
  if(currDate >=1 && currDate <=12){
    greeting = 'Good Morning 🥰';
    cssStyle.color = 'yellow'
    
  }else if(currDate >=12 && currDate <=16){
    greeting = 'Good Afternoon 🥵';
    cssStyle.color = 'lightgreen';
  }else if(currDate >=16 && currDate <=19){
    greeting = 'Good Evening 😌';
    cssStyle.color = 'cyan';
  }
  
  else {
    greeting = 'Good Night 🌜';
    cssStyle.color = '#228cdc';
  }

  return (
    <nav>
      <Link to="/" className="title">
        RS <span style={cssStyle}> TECH </span><br />
        <h6 className="situ">Shivansh ( Situ )</h6>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
     
      <ul className={menuOpen ? "open" : ""}>
      <h6 className="time">Hello : <span style={cssStyle}> {greeting} </span></h6>
      <li><NavLink to="/">Home</NavLink></li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        
        <li>
          <NavLink to="/Services">Technoloy</NavLink>
        </li>

        <li>
          <NavLink to="/Careers">Careers</NavLink>
        </li>

        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>

       
         {
          isAuthenticated ?  <li><button type="button" class="btn btn-danger"  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    
    </li>
    :
    <b> <li><button type="button" class="btn btn-outline-secondary" onClick={() => loginWithRedirect()}>Log In</button></li>
       </b>
         }
         <div className="loginimg"> {isAuthenticated && <img  src={user.picture} alt={user.name} height="30px" width="30px"  />}</div>
         

      </ul>
    </nav>
    
  );
};
