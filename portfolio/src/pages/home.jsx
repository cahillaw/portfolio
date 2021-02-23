import React from 'react'

import { Image } from 'react-bootstrap'
import './css/home.css'

class Home extends React.Component {
    constructor (props) {
    super(props)
      this.state = {
        route: "info"
      }
    }

    componentDidMount() {
        console.log("loaded")
    }

    render = () => {
       
      return (
          <div>
            <div className="banner"></div>
        Hello
          </div>
      )
    }

  }
  
  export default Home