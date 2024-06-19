import React, { useEffect, useState } from 'react';
import axios from 'axios';
import devilUrl from './devil.png';
import './About.css';

function About() {
  const [user, setUser] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios.get("http://127.0.0.1:3001/data")
     .then(response => {
      setUser(response.data);
      })
     .catch(err => {
        console.log(err);
        setHasError(true);
      });
  }, []);

  return (
    <div>
      {
        hasError? (
          <>
          <div className="server-error">
          <img className='error' src={devilUrl} alt="" /><br />
          <h4>Warning: Server Error</h4>
          </div>
          </>
        ) : (
          user.map((item) => (
            <div className="main"> {/* assuming item has an id property */}

              <div className="one">

                <p>Hello: {item.name}</p>
              </div>

              <div className="two">

                <p>Email: {item.email}</p>

              </div>


              <div className="three">

                <p>Age: {item.age}</p>

              </div>
            </div>
          ))
        )
      }
    </div>
  );
}

export default About;