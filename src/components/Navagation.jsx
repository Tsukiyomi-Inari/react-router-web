import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./assets/Icon";



function Navigation() {
  return (
    <div className="navigation bg-info sticky-top " >
      <nav className="navbar navbar-expand navbar-dark  mb-5 ">
        <div className="container-fluid ">
          <NavLink className="navbar-brand d-inline-flex fs-6 " to="/">
      <Icon className="logo align-baseline "/>Mobile Development: MODE4201
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> 
         </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/classworks">
                  Classwork
                </NavLink>
              </li>  
              <li className="nav-item dropdown">
                <a className="dropdown-toggle nav-link active nav" href="/#" role="button" data-bs-toggle="dropdown">Labs</a>
                <ul className="dropdown-menu">
            <li className="dropdown-item"><NavLink className="dropdown-item" to="/labs/lab-1">Lab-1</NavLink></li>
             <li className="nav-item"><NavLink className="dropdown-item" to="/labs/lab-2">Lab-2</NavLink></li>
              </ul>
                </li>        
              <li className="nav-item"><NavLink className="nav-link active" to="/project">   Project
                </NavLink>
              </li>
        </ul>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;