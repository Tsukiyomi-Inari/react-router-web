import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/fontawesome-free-solid';



function Navigation() {
  return (
    <div className="navigation bg-info" >
      <nav className="navbar navbar-expand navbar-dark ">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            Kat MODE4201 <FontAwesomeIcon icon={faCompactDisc} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/home">
                  Home
                  <span className="sr-only">(current)</span>
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