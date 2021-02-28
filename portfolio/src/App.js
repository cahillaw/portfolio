import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { NavBar } from './components/navBar';
//pages 

import Home from './pages/home';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
class App extends React.Component {
  render = () => {
    return <Router>
      <NavBar/>
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/about" component={Home} />
        <Route exact path = "/skills" component={Skills} />
        <Route exact path = "/projects" component={Projects} />
        <Route exact path = "/contact" component={Contact} />
        <Redirect to ="/"/>
      </Switch>
    </Router>
  }
}

export default App