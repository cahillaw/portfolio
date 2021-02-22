import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { NavBar } from './components/navBar';
//pages 

import Home from './pages/home';
class App extends React.Component {
  render = () => {
    return <Router>
      <NavBar/>
      <Switch>
        <Route exact path = "/" component={Home} />
        <Redirect to ="/"/>
      </Switch>
    </Router>
  }
}

export default App