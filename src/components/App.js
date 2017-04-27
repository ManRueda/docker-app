import '../assets/css/App.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello, Electron!</h1>
        <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
        <br />
        <Link to='/about'>About</Link>
        <span>Toogle is in: {this.props.app.toString()}</span>
        <br />
        <button onClick={this.props.toogle}>Toogle</button>
      </div>
    )
  }
}

export default App
