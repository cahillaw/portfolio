import { React, Component } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './css/navBar.css'

export class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
     
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container className = "navcontainer">
          <Navbar.Brand href="/">Andy Cahill</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">About Me</Nav.Link>
                  <Nav.Link href="/skills">Skills</Nav.Link>
                  <Nav.Link href="/projects">Projects</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>  
              </Navbar.Collapse>
          </Container>
        </Navbar>
    );

  }
}