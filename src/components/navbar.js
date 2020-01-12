import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row" id="logo">
        <div className="col-md-12 p-0 d-flex justify-content-center">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" width="100" height="60" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
        </div>
        <div className="row" id="navbar">
          <div className="col-md-12 d-flex justify-content-center border-top border-bottom border-dark">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active border-dark">
                    <Link className="nav-link" to="/">
                      Home
                  </Link>
                  </li>
                  <li className="nav-item active border-left border-right border-dark">
                    <Link className="nav-link" to="/Vehicles">
                      Vehicles
                  </Link>
                  </li>
                  <li className="nav-item active border-dark">
                    <Link className="nav-link" to="/Planets">
                      Planets
                  </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
  )

}

export default NavBar;