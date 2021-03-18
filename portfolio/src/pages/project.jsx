import React from 'react'

import { Container, Image, Row, Col, Card, CardColumns, Badge } from 'react-bootstrap'
import puzzlesjson from "../projects.json"
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
                console.log(project)
                project.images.gallery.map((src)=>{
                    console.log(src)
                })


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
                    <Row>
                        <Col sm={6}>
                            <h1>{this.state.project.name}</h1>
                            <Card.Subtitle className="mb-2 text-muted">{this.state.project.timeStart} - {this.state.project.timeEnd}</Card.Subtitle>
                            <div className ="description">{this.state.project.description}</div>
                            <ul className="bullets">
                                {this.state.project.bullets.map((bullet) => {
                                    return <li>{bullet}</li>
                                })}
                            </ul>
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
                            {this.state.project.tags.map((tag) => {
                                return <Badge className = "tag" variant="dark">{tag}</Badge>
                            })}
                        </Col>
                    </Row>
                    <Row className="galleryrow">
                        <Col sm={12}>
                            <h3>Gallery</h3>
                            <CardColumns>
                                {this.state.project.images.gallery.map((src) => {
                                    return <Card>
                                        <Card.Img src={src} />
                                    </Card>
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