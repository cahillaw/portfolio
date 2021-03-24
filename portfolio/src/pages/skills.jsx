import React from 'react'

import { Container, Row, Col, Card, CardDeck, Button, CardColumns, Accordion } from 'react-bootstrap'
import './css/skills.css'

import skillsjson from "../json/skills.json"

class Skills extends React.Component {
    constructor (props) {
    super(props)
      this.state = {
        skills: ""
      }
    }

    componentDidMount() {
      const { skills } = skillsjson
      this.setState({
        skills: skills
      })
      console.log(skills)
    }

    render = () => {
       
      return (
          <div>
            <div className="banner"></div>
              <Container className="pagelayout" fluid>
                <Row>
                  <Col sm ={12}>
                    <h1>Skills</h1>
                    <CardColumns style={{marginBottom:"25px"}}>
                      {this.state.skills !== "" ? this.state.skills.map((skill, i) => {
                        return (
                            <Card className = "skillcard" key = {i}>
                                <a href = {skill.site}><Card.Img variant="top" src={skill.image} style={{margin:"10px", width:"90%"}} /></a>
                                <Card.Body>
                                  <Accordion>
                                    <Accordion.Toggle className="accordianbutton"as={Button} variant="link" eventKey="0">
                                    <Card.Title>{skill.name} </Card.Title>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Text>
                                          {skill.description}
                                        </Card.Text>
                                    </Accordion.Collapse>
                                  </Accordion>
                                </Card.Body>
                            </Card> )
                    }) : null}
                    </CardColumns>
                  </Col>
                </Row>
              </Container>
          </div>
      )
    }

  }
  
  export default Skills