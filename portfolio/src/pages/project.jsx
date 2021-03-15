import React from 'react'

import { Container, Image, Row, Col } from 'react-bootstrap'
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
        console.log(projectId)
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
                    <Row>
                        <Col sm={6}>
                            <h1>{this.state.project.name}</h1>
                            <div>{this.state.project.timeStart} - {this.state.project.timeEnd}</div>
                            <div>{this.state.project.description}</div>
                        </Col>
                        <Col sm={6}>
                            <div className="mainimage">
                                <Image src={this.state.project.images.main} fluid />
                            </div>
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