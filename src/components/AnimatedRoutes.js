import React from 'react'
import Home from './home'
import Resume from './resume'
import About from './newabout';
import Contact from './contact';
import Project from './project';
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation

} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
function AnimatedRoutes() {
    let location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
