import React from 'react'

import { Container, Row, Col, Form, Card, Button, CardColumns, CardDeck, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/projects.css'

import puzzlesjson from "../projects.json"

class Projects extends React.Component {
    constructor (props) {
    super(props)
      this.state = {
          query: "",
          filterTags: []
      }
    }

    componentDidMount() {
        console.log(puzzlesjson)
    }

    render = () => {
    const { projects } = puzzlesjson

    const tagsSet = new Set()
    projects.map((project) => {
        project.tags.map((tag) => {
            tagsSet.add(tag)
        })
    })
    var tags = Array.from(tagsSet);

    return (
        <div>
        <div className="banner"></div>
            <Container className="pagelayout">
                <Row>
                    <Col>
                    <h1>Projects</h1>
                        <Form.Group controlId="search" className="searchbar">
                            <Form.Control placeholder="Search..." onChange={this.updateQuery}/>
                            <Form.Text className="text-muted">
                            Search by project name, description or phrase.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <Container className="filters">
                            <h2>Tags</h2>
                            <Form.Group controlId="formBasicCheckbox">
                                {tags.map((tag, i) => (
                                    <Form.Check type="checkbox" label={tag} onChange={() => this.updateTagFilter(tag)} key = {i} />
                                ))}
                            </Form.Group>
                        </Container>
                    </Col>
                    <Col xs={10}>
                        <CardDeck style={{marginBottom:"25px"}}>
                            {projects.map((project, i) => {
                                return this.displayCard(project) ?
                                    <Card style={{ minWidth: '18rem', maxWidth:'18rem', marginTop:"20px" }} key = {i}>
                                        <Card.Img variant="top" src={project.images.main} />
                                        <Card.Body>
                                        <Card.Title>{project.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{project.timeStart} - {project.timeEnd}</Card.Subtitle>
                                        <Card.Text>
                                        {project.description}
                                        </Card.Text>
                                        <Link to = {'/projects/' + project.projectId}>
                                        <Button variant="primary">View More</Button>
                                        </Link>
                                        </Card.Body>
                                    </Card>
                            : null
                            })}
                        </CardDeck>
                    </Col>
                </Row>

            </Container>
        </div>
      )
    }

    updateQuery = (event) => {
        console.log(event.target.value)
        this.setState({
          query: event.target.value.toLowerCase()
        })
      }

    updateTagFilter = (tag) => {
        var currentTags = this.state.filterTags
        if(currentTags.includes(tag)) {
            const index = currentTags.indexOf(tag);
            if (index > -1) {
                currentTags.splice(index, 1);
            }
        } else {
            currentTags.push(tag)
        }

        this.setState({
            filterTags: currentTags
        })
        console.log(this.state.filterTags)
    }

    displayCard = (project) => {
        var currentTags = this.state.filterTags
        var display = false

        if(this.state.query != "" && project.name.includes(this.state.query)) {
            display = true 
        }

        if(this.state.query != "" && project.description.includes(this.state.query)) {
            display = true
        }

        project.bullets.map((bullet) => {
            if(this.state.query != "" && bullet.includes(this.state.query)) {
                display = true
            }
        })

        currentTags.map((tag) => {
            if(!project.tags.includes(tag) && display) {
                display = false
            } else if (project.tags.includes(tag) && this.state.query === "") {
                display = true
            }
        })
        
        
        if(this.state.query === "" && currentTags.length < 1) { //if no tags, always return each card
            display = true
        }

        return display
    }

  }
  
  export default Projects