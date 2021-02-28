import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import './css/home.css'

class Home extends React.Component {
    constructor (props) {
    super(props)
      this.state = {
        route: "info"
      }
    }

    componentDidMount() {
        console.log("loaded")
    }

    render = () => {
       
      return (
          <div>
            <div className="banner"></div>
              <Container className="pagelayout">
                <Row>
                  <Col>
                    <h1>Hello! I am Andy Cahill</h1>
                    <p>I am a Senior studying Informatics at the University of Washington in Seattle. I am focusing on Software Development and Data Science.</p>

                    <p>I am a Senior studying Informatics at the University of Washington in Seattle. I am doing a custom track based around Software Development (focusing on Web Development) and Data Science.</p>

                  </Col>
                  <Col><img className="profile"
                  src="/images/profilepiccropped.jpg">
                  </img></Col>
                </Row>
                <Row>
                  <Col>My Skills</Col>
                  <Col>Projects</Col>
                  <Col>Contact Me</Col>
                </Row>
              </Container>
          </div>
      )
    }

  }
  
  export default Home