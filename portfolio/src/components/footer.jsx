import { React, Component } from 'react'
import { Navbar, Row, Col, Nav, Button, Container } from 'react-bootstrap';
import './css/footer.css'

export class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
     
    }
  }

  componentDidMount() {
    console.log(this.props.type)
    }

  render() {
    return (
        <Container className={(this.props.type === "short" ? "shortfootercontainer":"footercontainer")}>
            <Row className="justify-content-md-center">
                <Col lg="2" sm="4" xs="6">
                    <p className="centertext">
                        <a href = "/"><li className="list-unstyled"><span className="footertext">About Me</span></li></a>
                        <a href = "/"><li className="list-unstyled"><span className="footertext">Skills</span></li></a>
                        <a href = "/"><li className="list-unstyled"><span className="footertext">Projects</span></li></a>
                    </p>
                </Col>
                <Col lg="2" sm="4" xs="6">
                    <p className="centertext">
                    <a href = "https://github.com/cahillaw"><li className="list-unstyled"><span className="footertext">Github</span></li></a>
                    <a href = "https://linkedin.com/in/cahillaw"><li className="list-unstyled"><span className="footertext">LinkedIn</span></li></a>
                    <a href = "mailto:cahillawx@gmail.com"><li className="list-unstyled"><span className="footertext">Email</span></li></a>
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="centertext">
                        <span className="footertext">&copy; {new Date().getFullYear()} Andy Cahill </span>
                    </p>
                </Col>
            </Row>
        </Container>
    );

  }
}