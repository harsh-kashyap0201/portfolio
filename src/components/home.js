import { Component } from "react";

import pic from './WhatsApp_Image_2022-05-26_at_8.09.35_PM-removebg-preview.jpg';
export default class Home extends Component {
    render() {
        return (
            <div>
            
            <div class="area" >
                        <ul class="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
                
            <div className="d-flex justify-content-end">
                <div className="container image">
                    <img
                        src={pic}
                        alt=""
                        className="imgMain"
                    />
                </div>
                <div className="container text-center landingText d-flex align-items-start flex-column">
                    <h1 className="text-start">
                        <span className="landingName">I'M HARSH KASHYAP.</span><br /><b>WEB DESIGNER & DEVELOPER.</b> 
                    </h1>
                    <p className="text-start">
                        I'm a Web Designer & Developer based in India. I have
                        experience in designing and developing websites. I
                        specialize in creating responsive websites.
                    </p>
                    <div className="button_slide slide_right ">MORE ABOUT ME </div>
                </div>
                <input type="checkbox" id="active" />
                <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
                <div class="wrapper">
                    <ul>
                        <li className="menuOptions"><a href="#">Home</a></li>
                        <li className="menuOptions"><a href="#">About</a></li>
                        <li className="menuOptions"><a href="#">Resume</a></li>
                        <li className="menuOptions"><a href="#">Projects</a></li>
                        <li className="menuOptions"><a href="#">Contact me</a></li>
                    </ul>
                </div>
            </div>
            </div >
            <center>Made with <span className='format'>❤</span> by <span className='format'>Harsh</span></center>
            </div>
        );
    }
}

