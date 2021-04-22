import { React, Component } from 'react'
import { Navbar, Row, Col, Nav, Button, Container } from 'react-bootstrap';
import './css/footer.css'

export class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
     
    }
  }

  render() {
    return (
        <Container className={(this.props.type === "short" ? "shortfootercontainer": "footercontainer")}>
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