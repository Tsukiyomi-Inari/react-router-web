import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/fontawesome-free-solid';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';



function Navigation() {
  return (
    <div className="navigation bg-info" >
      <Navbar variant="dark" bg="info" expand="lg">
        <Container fluid>
          <NavLink className="navbar-brand" to="/">
            Kat MODE4201 <FontAwesomeIcon icon={faCompactDisc} />
          </NavLink>
          
            <Navbar.Item>
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
             </Navbar.Item>
              <Navbar.Item>
                <NavLink className="nav-link active" to="/classworks">
                  Classwork
                </NavLink>
                </Navbar.Item>
                <Navbar.Collapse id="navbar-dark" title="Dropdown" menuVariant="dark">
                <Nav>
            <NavDropdown>
                <NavDropdown.Toggle variant="success" if="dropdown-basic">
                    Labs
                </NavDropdown.Toggle>
                <NavDropdown.Menu>
                    <NavDropdown.Item href="#/action">Lab 1</NavDropdown.Item>
                    <NavDropdown.Item href="#/action">Lab 2</NavDropdown.Item>
                    <NavDropdown.Item href="#/action">Lab 3</NavDropdown.Item>
                </NavDropdown.Menu>
            </NavDropdown>
             </Nav> 
            </Navbar.Collapse>
            <Navbar.Item>
                <NavLink className="nav-link active" to="/project">
                  Project
                </NavLink>
            </Navbar.Item>
       </Container>
    </Navbar>
    </div>
  );
}

export default Navigation;