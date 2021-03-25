import React from 'react'

import { Container, Image, Row, Col, Card, CardColumns, Badge, Breadcrumb } from 'react-bootstrap'
import puzzlesjson from "../json/projects.json"
import './css/project.css'

class Project extends React.Component {
    constructor (props) {
    super(props)
      this.state = {
          project: ""
      }
    }

    componentDidMount() {
        var projectId = this.props.location.pathname.split("/", 5)[2];
        const { projects } = puzzlesjson
        projects.map((project) => {
            if(project.projectId == projectId) {
                this.setState({
                    project: project
                })
            }
        })
    }

    render = () => {
      if(this.state.project != "") {
          return (
            <div>
                <div className="banner"></div>
                <Container className="pagelayout" fluid>
                    <Row className = "breadrow">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/projects">
                                Projects
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>{this.state.project.name}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <h1>{this.state.project.name}</h1>
                            <Card.Subtitle className="mb-2 text-muted">{this.state.project.timeStart} - {this.state.project.timeEnd}</Card.Subtitle>
                            <div className ="description">{this.state.project.description}</div>
                            <ul className="bullets">
                                {this.state.project.bullets.map((bullet, i) => {
                                    return <li key = {i}>{bullet}</li>
                                })}
                            </ul>
                            {this.state.project.link ? <p><strong>Site Link: </strong><a href = {this.state.project.link}>{this.state.project.link}</a></p> : null}
                        </Col>
                        <Col sm={6}>
                            <div className="mainimage">
                                <Image src={this.state.project.images.main} fluid />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <h3>Tags</h3>
                            {this.state.project.tags.map((tag, i) => {
                                return <Badge className = "tag" variant="dark" key = {i}>{tag}</Badge>
                            })}
                        </Col>
                    </Row>
                    <Row className="galleryrow">
                        <Col sm={12}>
                            <h3>Gallery</h3>
                            <CardColumns>
                                {this.state.project.images.gallery.map((src, i) => {
                                    return (
                                    <Card key = {i}>
                                        <Card.Img src={src} />
                                    </Card>)
                                })}
                            </CardColumns>
                        </Col>
                    </Row>
                </Container>
            </div>
          )
      } 

      return (
          <div>
            <div className="banner"></div>
              <Container className="pagelayout">
                <h1>404 project not found</h1>
              </Container>
          </div>
      )
    }

  }
  
  export default Project