import React from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap'
import SearchBar from "material-ui-search-bar";
import './css/projects.css'

class Projects extends React.Component {
    constructor (props) {
    super(props)
      this.state = {
          query: ""
      }
    }

    componentDidMount() {
        console.log("loaded")
    }

    render = () => {
        const list = ["swag","awseome","yieswad"]
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
                                    {list.map((tag) => (
                                        <Form.Check type="checkbox" label={tag} />
                                    ))}
                                </Form.Group>
                            </Container>
                        </Col>
                        <Col xs={10}>
                            Content
                        </Col>
                  </Row>

              </Container>
          </div>
      )
    }

  }
  
  export default Projects