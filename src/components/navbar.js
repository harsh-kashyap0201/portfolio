import { Component } from "react";
import {Link} from "react-router-dom";
import "../components/styles/home.css"
import "../components/styles/navbar.css"

export default class Navbar extends Component {
    
    render() {
        return (
            <div>
                <ul className="menu">
                    <li className="menu_list">
                        <span className="front fas fa-home"></span>
                        <Link to="/" className="side">home</Link>
                    </li>
                    <li className="menu_list">
                        <span className="front fas fa-info"></span>
                        <Link to="/about" className="side">about</Link>
                    </li>
                    <li className="menu_list">
                        <span className="front fas fa-paper-plane"></span>
                        <Link to="/resume" className="side">Resume</Link>
                    </li>
                    {/* <li className="menu_list">
                        <span className="front fas fa-briefcase"></span>
                        <Link to="/project" className="side">projects</Link>
                    </li> */}
                    <li className="menu_list">
                        <span className="front fas fa-paper-plane"></span>
                        <Link to="/contact" className="side">contact</Link>
                    </li>
                </ul> 

                
               
                
                </div>
)
}}