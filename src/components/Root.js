import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import About from './About'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/about' component={About} />
      <Redirect to='/' />
    </Switch>
  </Router>
)

export default Root
