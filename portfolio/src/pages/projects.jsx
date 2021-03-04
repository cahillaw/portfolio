import React from 'react'

import { Container, Row, Col, Form, Card, Button, CardColumns, CardDeck, CardGroup } from 'react-bootstrap'
import SearchBar from "material-ui-search-bar";
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
                    <h1>My Projects</h1>
                    <SearchBar
                        className="searchbar"
                        value={this.state.query}
                        onChange={() => console.log("cahnge")}
                        onRequestSearch={() => console.log("cahnge")}/>
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
                        <CardDeck>
                            {projects.map((project, i) => {
                                return this.displayCard(project.tags) ?
                                    <Card style={{ minWidth: '18rem', maxWidth:'18rem', marginTop:"20px" }} key = {i}>
                                        <Card.Img variant="top" src={project.images.main} />
                                        <Card.Body>
                                        <Card.Title>{project.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{project.timeStart} - {project.timeEnd}</Card.Subtitle>
                                        <Card.Text>
                                        {project.description}
                                        </Card.Text>
                                        <Button variant="primary">View More</Button>
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

    displayCard = (projectTags) => {
        var currentTags = this.state.filterTags
        var display = true
        if(currentTags.length < 1) { //if no tags, always return each card
            return display
        }

        currentTags.map((tag) => {
            if(!projectTags.includes(tag)) {
                display = false
            }

        })
        
        return display
    }

  }
  
  export default Projects