import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return(
  <nav className="navbar navbar-expand-lg navbar-dark">        
  <Link className="navbar-brand" to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" width="100" height="60" alt=""/></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/Vehicles">
            Vehicles
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Planets">
            Planets
        </Link>
      </li>
    </ul>
  </div>
</nav>
    )

}

export default NavBar;