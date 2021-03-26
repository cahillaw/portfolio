import React from 'react'

import { Container } from 'react-bootstrap'
import { Footer } from '../components/footer';
import './css/contact.css'

class Contact extends React.Component {
    constructor (props) {
    super(props)
      this.state = {
      }
    }

    render = () => {
       
      return (
          <div className="content">
            <div className="banner"></div>
              <Container className="pagelayout">
                <h1>Contact</h1>
                <p>The best way to contact me is by email at <a href="mailto:cahillawx@gmail.com">cahillawx@gmail.com</a>. I look forward to hearing from you!</p>
                <a href = "https://github.com/cahillaw"><img className="github"
                src="/images/logos/githublogo.png">
                </img></a>

                <a href = "https://www.linkedin.com/in/cahillaw/"><img className="linkedin"
                src="/images/logos/linkedinlogo.png">
                </img></a>

              </Container>
          </div>
      )
    }

  }
  
  export default Contact