import { Component } from "react";
import {Link} from "react-router-dom";
import "../components/styles/home.css"
import "../components/styles/navbar.css"

export default class Navbar extends Component {
    
    render() {
        return (
            <div>
                
                 <ul class="menu">
                    <li class="menu_list">
                        <span class="front fas fa-home"></span>
                        <Link to="/" class="side">home</Link>
                    </li>
                    <li class="menu_list">
                        <span class="front fas fa-info"></span>
                        <Link to="/about" class="side">about</Link>
                    </li>
                    <li class="menu_list">
                        <span class="front fas fa-paper-plane"></span>
                        <Link to="/resume" class="side">Resume</Link>
                    </li>
                    <li class="menu_list">
                        <span class="front fas fa-briefcase"></span>
                        <Link to="/" class="side">projects</Link>
                    </li>
                    <li class="menu_list">
                        <span class="front fas fa-paper-plane"></span>
                        <Link to="/contact" class="side">contact</Link>
                    </li>
                </ul> 

                
               
                
                </div>
)
}}