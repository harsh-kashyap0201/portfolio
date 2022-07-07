import React, { Component } from 'react'
import './styles/project.css'
import {motion} from 'framer-motion';
export default class project extends Component {
    render() {

    return (
        <motion.div 
        initial={{opacity:0}} 
            animate={{opacity:1, transition:{duration:2}}} 
            exit={{opacity:0, transition:{duration:0.5},ease:"easeInOut"}}
        className='container project my-5'>
            <span className="heading ">CHECK MY <span className="format">PROJECTS</span> </span>
            <div className="container row my-3 mx-0 justify-content-">
            
            <div className="card projectCard col-md-6 mx-3 my-3">
                <img src="https://user-images.githubusercontent.com/77957756/177838821-582d575b-d70b-4827-8e81-a8ecf72588a6.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Yelp Camp</h5>
                    <h6 className='card-subtitle'>full-stack website</h6>
                    <p className="card-text">Created a full-stack web-based, a multi-functional application developed to learn Fullstack web development containing details of more than 50 campgrounds around the globe</p>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link">Project Link</a>
                    <a href="#" className="card-link">Github link</a>
                </div>
            </div>

            


            </div>
            
            
        <div className='my-3'> <center>Made with 💓 by <span className='format'>Harsh</span></center></div>
        </motion.div>
        )
}
}