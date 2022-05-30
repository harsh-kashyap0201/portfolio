import { Component } from "react";

import pic from './WhatsApp_Image_2022-05-26_at_8.09.35_PM-removebg-preview.jpg';

export default class Home extends Component {
    render() {
        return (
            
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
                        <span className="landingName ">I'M HARSH KASHYAP.</span><br /> WEB DESIGNER & DEVELOPER.
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact me</a></li>
                    </ul>
                </div>

            </div>
        );
    }
}

