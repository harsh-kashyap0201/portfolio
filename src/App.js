import React, { Component } from 'react'
import Home from './components/home'
import "./components/home.css"
import About from './components/about';
import Contact from './components/contact';
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Home/>
        <About/> */}
        <Contact/> 
      </div>
    )
  }
}
