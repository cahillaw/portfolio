import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'
import { Footer } from '../components/footer';

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
          <div className="content">
            <div className="banner"></div>
              <Container className="pagelayout" fluid>
                <Row>
                  <Col sm ={8}>
                    <h1>Hello! I am Andy Cahill</h1>
                    <p>I am a Senior studying Informatics at the <strong>University of Washington</strong> in Seattle. I am doing a custom track focusing on <strong>Full-Stack Software Development</strong> and will graduate in June 2021.</p>
                    <p>What is Informatics? Informatics is at the intersection of Software Development, Design and Data Science. Informatics students focus on designing and developing information technology in an inclusive and usable way. For more information on Informatics, view the UW iSchool website <a href = "https://ischool.uw.edu/programs/informatics/what-is-informatics">here</a>.</p>
                    <p>My biggest passion is developing full-stack solutions to complex problems. I have extensive experience designing database schemas and RESTful back-end APIs. In addition, I am also knowledgeable in creating aesthetic, responsive and usable front-ends that can connect seamlessly to the back-end. My go-to back-end technologies include Go, Docker, SQL and AWS and my primary front-end framework is React. </p>
                  </Col>
                  <Col sm ={4} className="profilecol">
                    <Image className="profile"
                    src="/images/profilepiccropped.jpg" fluid>
                    </Image>
                  </Col>
                </Row>
              </Container>
          </div>
      )
    }

  }
  
  export default Home