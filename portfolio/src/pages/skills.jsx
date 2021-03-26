import React from 'react'

import { Container, Row, Col, Card, CardDeck, Button, CardColumns, Accordion } from 'react-bootstrap'
import { Footer } from '../components/footer';

import './css/skills.css'

import skillsjson from "../json/skills.json"

class Skills extends React.Component {
    constructor (props) {
    super(props)
      this.state = {
        skills: "",
        current: ""
      }

      this.scroll = React.createRef()  

    }

    componentDidMount() {
      const { skills } = skillsjson
      this.setState({
        skills: skills,
        current: skills[0]
      })
      console.log(skills)
    }

    render = () => {
       
      return (
          <div className="content">
            <div className="banner"></div>
              <Container className="pagelayout" fluid>
                <Row>
                  <Col md ={8} xs ={12}>
                    <h1>Skills</h1>
                    <Row className="skills">
                    {this.state.skills !== "" ? this.state.skills.map((skill, i) => {
                        return (
                            <Card className = "skillcard" key = {i}>
                                <Card.Img onMouseOver={()=>this.setCurrentSkill(skill.name)} onClick={()=>this.setCurrentSkill(skill.name)} variant="top" src={skill.image} className="skillimage"style={{margin:"20px"}} />
                            </Card> )
                    }) : null}
                    </Row>
                  </Col>
                  <Col md ={4}>
                    <br></br>
                    <br></br>
                    <Card ref={this.scroll}>
                      <Card.Header as="h5">{this.state.current.name}</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {this.state.current.description}
                        </Card.Text>
                        <a href={this.state.current.site}><Button variant="primary">View more</Button></a>
                      </Card.Body>
                    </Card>
                    <br></br>
                  </Col>
                </Row>
              </Container>
          </div>
      )
    }

   // executeScroll = () => myRef.current.scrollIntoView()    

    setCurrentSkill = (name) => {
      if(window.innerWidth < 768) {
        this.scroll.current.scrollIntoView() 
      } 
      this.state.skills.map((skill)=>{
        if(skill.name === name) {
          this.setState({
            current: skill
          })
        }
      })
    }

  }
  
  export default Skills