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

  componentDidMount() {
    console.log("nav")
  }

  render() {
    return (
        <Navbar expand="xl" className="color-nav" variant="light">
            <Container className = "navcontainer">
                <Navbar.Brand className="extend" href = "/">
                    <strong>Andy Cahill</strong>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">About Me</Nav.Link>
                    <Nav.Link href="/skills">Skills</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>  
            </Container>
        </Navbar>
    );

  }
}