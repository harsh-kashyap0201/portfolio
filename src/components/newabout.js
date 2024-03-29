import React, { Component } from 'react'
import aboutPic from '../components/images/new aboutme.png'
import c from '../components/images/c lang.svg'
import cpp from '../components/images/cpp.svg'
import eth from '../components/images/eth.svg'
import exp from '../components/images/exp.svg'
import genache from '../components/images/genache.svg'
import java from '../components/images/javaimg.svg'
import  js from '../components/images/javaScriptslogo.svg'
import  metamask from '../components/images/metamask.svg'
import  mongo from '../components/images/mongo.svg'
import  mysql from '../components/images/mysql-logo.svg'
import  nodejs from '../components/images/nodejs.svg'
import  py from '../components/images/py.svg'
import  rj from '../components/images/reactjs.svg'
import  sol from '../components/images/sol.svg'
import  truffle from '../components/images/truffle.svg'
import  web from '../components/images/web3.svg'
import remix from'../components/images/remix.png'
import git from'../components/images/git.svg'
import github from'../components/images/github.svg'
import heroku from'../components/images/heroku.svg'

import "../components/styles/about.css"
import {motion} from 'framer-motion';
export default class About extends Component {

    render() {
        return (
            <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            exit={{opacity:0, transition:{duration:0.5},ease:"easeInOut"}}
            className='container aboutpage'>
                <div>
                <center><img src={aboutPic} className="aboutPic" /></center>
                    <span className='heading'>PERSONAL <span className='format'>INFO</span></span> 
                    <hr />  
                    <div className='personal-info d-flex justify-content-evenly'>
                        <div className='left me-5'>
                            <ul className='baseFont'>
                                <li><span className='subheadAbout'>Name:</span>  Harsh Kashyap</li>
                                <li><span className='subheadAbout'>Age:</span>  20 </li>
                                <li><span className='subheadAbout'>College name:</span>  VIT Vellore </li>
                                <li><span className='subheadAbout'>Branch:</span>  CSE Specialization in BlockChain Technology</li>
                                <li><span className='subheadAbout'>City:</span>  Jaipur ,Rajasthan</li>
                                <li><span className='subheadAbout'>Job/Internship:</span>  Available</li>
                                <li><span className='subheadAbout'>Email:</span> <a href="mailto:harshkashyap2012002@mail.com" className='link'>harshkashyap2012002@gmail.com</a></li>
                                <li><span className='subheadAbout'>Phone:</span> <a href="tel:+916367575699" className='link'>+91-6367575699</a></li>
                            </ul>
                        </div>
                        <div className='right ms-3'>
                            <p className='aboutText'>Full stack developer and a blockchain enthusiast. Passionate about implementing and launching new projects, currently in my 3rd year at Vellore Institute of Technology. Having technical experience of building, maintaining, and deploying full stack web applications and decentralized apps.I can adapt to any technology rapidly, making myself flexible in any tech stack. A diligent person strong in design and integration with intuitive problem-solving skills who wants to learn continuously. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology to translate business requirements into technical solutions.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="skillset container">
                        <span className='heading'>MY <span className='format'>SKILLS</span></span>
                    <div className="row my-3">
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={sol} alt="" srcSet="" /> Solidity</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={truffle} alt="" srcSet="" /> Truffle</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={eth} alt="" srcSet="" /> Ethereum</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={web} alt="" srcSet="" /> Web3.js</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={metamask} alt="" srcSet="" />Metamask </div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={genache} alt="" srcSet="" /> Genache</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={remix} alt="" srcSet="" /> Remix IDE</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={mongo} alt="" srcSet="" /> MongoDB</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={exp} alt="" srcSet="" /> ExpressJS</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={rj} alt="" srcSet="" /> ReactJS</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={nodejs} alt="" srcSet="" /> NodeJS</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={heroku} alt="" srcSet="" /> Heroku</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={mysql} alt="" srcSet="" /> MYSQL</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={py} alt="" srcSet="" /> Python</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={java} alt="" srcSet="" /> Java</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={c} alt="" srcSet="" /> C</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={cpp} alt="" srcSet="" /> C++</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={js} alt="" srcSet="" /> Javascripts</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={git} alt="" srcSet="" /> Git</div>
                        </div>
                        <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
                            <div className="badge"> <img src={github} alt="" srcSet="" /> Github</div>
                        </div>
                    </div>

                    </div>
                </div>
                <div className='my-3'> <center>Made with 💓 by <span className='format'>Harsh</span></center></div>
            </motion.div>
        )
    }}