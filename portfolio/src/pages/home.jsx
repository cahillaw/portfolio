import React from 'react'

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
        Hello
          </div>
      )
    }

  }
  
  export default Home