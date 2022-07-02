import { Component } from "react";
import {Link} from "react-router-dom";
// import "../components/styles/home.css"
import pic from './images/me.png';
import {motion} from 'framer-motion';
export default class Home extends Component {
    render() {
        return (
            <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            exit={{opacity:0,transition:{duration:0.5}}}>
            <div className="area" >
                        <ul className="circles">
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
                        <span className="landingName">I'M HARSH KASHYAP.</span><br /><b>Full Stack Developer and Blockchain Enthusiast.</b> 
                        <h1>
                        <a href="" class="typewrite" data-period="2000" data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
                            <span class="wrap"></span>
                        </a>
                        </h1>
                    </h1>
                    <p className="text-start">
                        I'm a Full stack developer and a Blockchain Enthusiast based in India. Currently in my 3rd year at Vellore Institute of Technology.
                    </p>
                    <div className="button_slide slide_right ">MORE ABOUT ME </div>
                </div>
            </div>
            </div >
            <div className='my-3'> <center>Made with 💓 by <span className='format'>Harsh</span></center></div>
            </motion.div>
        );
    }
}

