import '../assets/css/App.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello, Electron!</h1>
        <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
        <Link to='/about'>About</Link>
      </div>
    )
  }
}

export default App
