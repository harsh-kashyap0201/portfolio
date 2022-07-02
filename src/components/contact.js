import React, { Component } from 'react'
import getTouch from '../components/images/Frame 1 (1).png'
import './styles/contact.css'
import {motion} from 'framer-motion';
export default class contact extends Component {
    render() {

    return (
        <motion.div 
        initial={{opacity:0}} 
            animate={{opacity:1, transition:{duration:2}}} 
            exit={{opacity:0, transition:{duration:0.5},ease:"easeInOut"}}
        className='container'>
            <center><img src={getTouch} className='contactPic'/></center>
            <div className="container contactbg d-flex justify-content-between">
                <div className="left">
                    <span className='shy'>DON'T BE SHY !</span><hr />
                    <p><span className='textContact'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</span></p>
                    <br />
                    <ul className='connectlist'>
                        <li>
                            <span className='bold'>ADDRESS POINT</span>
                            <li className='place'> 37-A Ekta vihar, Govind Nagar(w) Jaipur , Rajasthan , India.</li>
                        </li>
                        <li>
                            <span className='bold'>MAIL ME</span>
                            <li className='place'><a href="mailto:harshkashyap2012002@mail.com" className='link'>harshkashyap2012002@gmail.com</a></li>
                        </li>
                        <li>
                            <span className='bold'>CALL ME</span>
                            <li className='place'><a href="tel:+916367575699" className='link'>+91-6367575699</a></li>
                        </li>
                    </ul>
                    <div className="social-container">
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="right my-5">
                    <form className='contactform' action="https://submit-form.com/9HNq264P" target="_blank">
                        {/* <label for="name">Name</label> */}
                        <input type="text" className="form-control textbox" id="name" name="name" placeholder="Name" required="" />
                        {/* <label for="email">Email</label> */}
                        <input type="email" className="form-control textbox" id="email" name="email" placeholder="Email" required="" />
                        {/* <label for="message">Message</label> */}
                        <textarea
                            className="form-control textarea"
                            id="message"
                            name="message"
                            placeholder="Message"
                            required=""
                        ></textarea>
                        <button type="submit" className='btn btnform'>Send</button>
                    </form>

                </div>

            </div>
            
        <div className='my-3'> <center>Made with 💓 by <span className='format'>Harsh</span></center></div>
        </motion.div>
        )
}
}