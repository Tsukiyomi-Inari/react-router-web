import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/fontawesome-free-solid';



function Navigation() {
  return (
    <div className="navigation bg-info" >
      <nav className="navbar navbar-expand navbar-dark ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Kat MODE4201 <FontAwesomeIcon icon={faCompactDisc} />
          </NavLink>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/classworks">
                  Classwork
                </NavLink>
              </li>          
            <li className="nav-item"><NavLink className="nav-link active" to="/labs">Labs</NavLink></li>
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