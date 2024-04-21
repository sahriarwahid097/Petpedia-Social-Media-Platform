import React from "react";
import { Link } from 'react-router-dom';
import img from '../../images/overview.png';

function Login() {
  return (
    <div id='login'>
      <div className="login-image-container">
        <img src={img}  className="login-image" />
      </div>
      <div className="login-text">
        <p><span>LOGIN OR SIGNUP<br></br></span>
        TO JOIN THE COMMUNITY
        </p>
        <p>
          <Link to="/signup" className="button">Login/Sign Up</Link>
        </p>  
      </div>
    </div>
  );
}

export default Login;




