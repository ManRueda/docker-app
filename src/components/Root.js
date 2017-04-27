import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import { history } from '../store'
import App from '../containers/App'
import About from './About'

const Root = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/about' component={About} />
      <Redirect to='/' />
    </Switch>
  </Router>
)

export default Root
