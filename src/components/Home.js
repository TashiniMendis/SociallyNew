import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <header>
        <div>
        <div class="wrappers">
        
            <ul class="nav-area">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div class="welcome-text">
            <h1>
                Welcome 
            </h1>
            <Link to="/form" variant="outline-secondary" role="button">Sign Up</Link>
            <Link to="/Login" variant="outline-secondary">Sign In</Link>  
           
           
        </div>
    </div>
    </header>
    
  )
}

export default Home;