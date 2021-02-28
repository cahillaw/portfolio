import React from 'react'

import { Container } from 'react-bootstrap'
//import './css/skills.css'

class Skills extends React.Component {
    constructor (props) {
    super(props)
      this.state = {
      }
    }

    componentDidMount() {
        console.log("loaded")
    }

    render = () => {
       
      return (
          <div>
            <div className="banner"></div>
              <Container className="pagelayout">
               
              </Container>
          </div>
      )
    }

  }
  
  export default Skills