import React, { Component } from 'react'
import Navbar from './components/navbar';
import Home from './components/home'
import Resume from './components/resume'
import About from './components/newabout';
import Contact from './components/contact';
import AnimatedRoutes from './components/AnimatedRoutes';
import {
  Routes,
  Route,
  BrowserRouter,

} from "react-router-dom";

export default class App extends Component {
  render() {
    
    return (
        <BrowserRouter>
          <div>
            <Navbar />
            <AnimatedRoutes />
          </div>  
      </BrowserRouter>  
    )
  }
}
