import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { NavBar } from './components/navBar';
import { Footer } from './components/footer';
//pages 

import Home from './pages/home';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Project from './pages/project';
class App extends React.Component {
  render = () => {
    return <Router>
      <div className="page-container">
      <NavBar/>
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/skills" component={Skills} />
        <Route exact path = "/projects" component={Projects} />
        <Route exact path = "/contact" component={Contact} />
        <Route exact path = "/projects/:projectId" component={Project}/>
        <Redirect to ="/"/>
      </Switch>
      <Footer/>
      </div>
      </Router>
  }
}

export default App