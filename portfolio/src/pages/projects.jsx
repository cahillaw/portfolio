import React from 'react'

import { Container, Row, Col, Form, Card, Button, CardColumns, CardDeck, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Footer } from '../components/footer';

import './css/projects.css'

import puzzlesjson from "../json/projects.json"

class Projects extends React.Component {
    constructor (props) {
    super(props)
      this.state = {
          query: "",
          filterTags: [],
          tags: [],
          projects: [],
          results: false
      }
    }

    componentDidMount() {
        const { projects } = puzzlesjson

        const tagsSet = new Set()
        projects.map((project) => {
            project.tags.map((tag) => {
                tagsSet.add(tag)
            })
        })
        var tags = Array.from(tagsSet);
        this.setState({
            projects: projects,
            tags: tags,
        })
    }

    render = () => {

    return (
        <div className="content">
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
                <Row className="projectscontent">
                    <Col sm={1}>
                        <Container className="filters">
                            <h2>Tags</h2>
                            <Form.Group controlId="formBasicCheckbox">
                                {this.state.tags.map((tag, i) => (
                                    <Form.Check type="checkbox" label={tag} onChange={() => this.updateTagFilter(tag)} key = {i} />
                                ))}
                            </Form.Group>
                        </Container>
                    </Col>
                    <Col sm={11}>
                        <CardDeck className="projcarddeck">
                            {this.state.projects.map((project, i) => {
                                return this.displayCard(project) ?
                                    <Card className="projectcard" key = {i}>
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
                        {!this.state.results ? <h3 className="noresults">No results for the specified query. Try a broader search.</h3> : null}

                    </Col>
                </Row>

            </Container>
            <Footer/>

        </div>
      )
    }

    updateQuery = (event) => {
        console.log(event.target.value)
        this.setState({
          query: event.target.value.toLowerCase(),
          results: false
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
            filterTags: currentTags,
            results: false
        })
        console.log(this.state.filterTags)
    }

    displayCard = (project) => {
        var currentTags = this.state.filterTags
        var display = false

        if(this.state.query != "" && project.name.toLowerCase().includes(this.state.query)) {
            display = true 
        }

        if(this.state.query != "" && project.description.toLowerCase().includes(this.state.query)) {
            display = true
        }

        project.bullets.map((bullet) => {
            if(this.state.query != "" && bullet.toLowerCase().includes(this.state.query)) {
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

        if(display && !this.state.results) {
            this.setState({
                results: true
            })
        }

        return display
    }

  }
  
  export default Projects