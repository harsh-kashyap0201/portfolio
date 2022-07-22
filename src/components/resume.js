import React, { Component } from "react";
import "../components/styles/resume.css"
import {motion} from 'framer-motion';
export default class Resume extends Component {
    render() {
        return (
            <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            exit={{opacity:0, transition:{duration:0.5},ease:"easeInOut"}}
            className="resume container my-5">
                <span className="heading ">CHECK MY <a href="https://drive.google.com/file/d/1VG9UL2mWmtxonJd6Gjv3sGBkDCh1_mpi/view?usp=sharing" className="resumeLink"><span className="format">RESUME</span></a> </span> 
                <div className="container my-3 d-flex justify-content-between">
                    <div className="left me-5">
                        <div>
                            <span className="format subhead">EDUCATION</span> <hr/>
                            <ul className="droplist">
                                <li className="droplistitem">
                                    <span className="headitem">BTECH Computer Science and Engineering with Specialization in Block Chain Technology</span> <span className="date">2020 -2024</span>
                                    <li className="place">Vellore Institute of
                                    Technology, Vellore</li>
                                    
                                    <ul type="disc">
                                        <li className="data">Current CGPA : 8.62</li>
                                    </ul>
                                </li>
                                <li className="droplistitem">
                                    <span className="headitem">Central Board of Secondary Education XII</span> <span className="date">2020</span> 
                                    <li><span className="place">Maheshwari Public School, Jaipur</span></li>
                                    
                                    <ul type="disc">
                                        <li className="data">Percentage: 94% (PCM).</li>
                                        <li className="data">Qualified JEE Mains</li>
                                    </ul>
                                </li>
                                <li className="droplistitem">
                                    <span className="headitem">Central Board of Secondary Education X</span> <span className="date">2018</span> 
                                    <li><span className="place">Maheshwari Public School, Jaipur</span></li> 
                                    <ul type="disc">
                                        <li className="data">Percentage: 94.8% .</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <span className="format subhead">WORK EXPERIENCE</span> <hr/>
                            <ul className="droplist">
                                <li className="droplistitem">
                                    <span className="headitem">IoThinC VIT</span>  <span className="date">December 2020 - Present </span><li><span className="place">Core Commitee Member</span></li>
                                    <ul type="disc">
                                        <li className="data">
                                            Teamed with 4 people to develop the website for the
                                            organisation using ReactJS, Tailwind CSS and Figma.
                                        </li>
                                        <li className="data">
                                            Took Technical interviews of more than 25 students for
                                            recruitment
                                        </li>
                                    </ul>
                                </li>
                                <li className="droplistitem">
                                    <span className="headitem">INTERNSHALA</span> <span className="date">January, 2022 - February, 2022</span> <li><span className="place">Internshala Student Partner (ISP 27)</span></li>
                                    
                                    <ul type="disc">
                                        <li className="data">
                                            Promoted Internshala and their various courses in my college.
                                        </li>
                                        <li className="data">
                                            Helped students in my college to get training and internships by Internshala.
                                        </li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </div>

                        <div className="skills">
                            <div>
                                <span className="subhead format">MY SKILLS</span> <hr/> 
                                <ul className="droplist data" type="disc">
                                    <li className="droplistitem">
                                         <span className="headitem">Blockchain :</span> DApps, Solidity, Web3.js, Truf le, Ethereum,
                                        Metamask, Remix IDE, Genache
                                    </li>
                                    <li className="droplistitem"><span className="headitem">Database : </span>MySQL Server, MongoDB</li>
                                    <li className="droplistitem">
                                         <span className="headitem">Cryptograpghy : </span> Public key encryption, Private key
                                        encryption, Hashing, Digital Signature
                                    </li>
                                    <li className="droplistitem">
                                         <span className="headitem">Soft Skills : </span> Innovative,collaborative, Problem-solving,
                                        Teamwork, logical reasoning
                                    </li>
                                    <li className="droplistitem">
                                         <span className="headitem">Full stack Web-Development : </span> MongoDB, ExpressJS,
                                        React.js,Node.js
                                    </li>
                                    <li className="droplistitem">
                                         <span className="headitem">Programming Language : </span> Python, Java, Solidity, JavaScript,
                                        C, C++
                                    </li>
                                    <li className="droplistitem">
                                        <span className="headitem">Version Control : </span>Git , Github</li>
                                    <li className="droplistitem">
                                         <span className="headitem">Other : </span> Windowsenvironments and APIs, Systemssoftware, Data
                                        strucures and algorithms, Network programming, AJAX, JSON
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <span className="format subhead">CERTIFICATES</span> <hr/>
                            <ul className="droplist">
                                <li className="droplistitem">
                                    <span className="headitem">The Web Developer Bootcamp 2022 -Udemy</span>
                                    <ul type="disc">
                                        <li className="data">
                                            Online Courses Issued Jun 2022 <br /> <span className="place">(CredentialID
                                            UC-b77ae0f7-42c7-4860-be7c-4d4427624c84)</span> 
                                        </li>
                                    </ul>
                                </li>
                                <li className="droplistitem">
                                    <span className="headitem">Engineering Virtual Program at Goldman Sachs</span>
                                    <ul type="disc">
                                        <li className="data">
                                            Goldman Sachs Issued Sep 2021 <br /> <span className="place"> (CredentialID:
                                            w5ooSGpn65ATriznD)</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <span className="format subhead">PROJECTS</span> <hr/>
                            <ul className="droplist">
                                <li className="droplistitem mb-4">
                                    <span className="headitem">Faucet Dapp</span><span className="date">July 2022</span>
                                    <li><span className="place">Fungible Faucet Dapp</span></li>
                                    <ul type="disc">
                                        <li className="data">
                                            Developed a Decentralized App that mints and sends
                                            fungible tokens to a user's wallet. This DApp starts a
                                            local blockchain on your computer and deploys a basic
                                            contract to that blockchain.
                                        </li>
                                        <li className="data">
                                            Tech Stack: React, Solidity, Truffle, Ethereum testnet
                                        </li>
                                        <li className="data"> <a href="https://github.com/harsh-kashyap0201/Faucet-dapp" target="_blank" className="linkStyle">Link to project</a></li>
                                    </ul>
                                </li>

                                <li className="droplistitem mb-4">
                                    <span className="headitem">YelpCamp</span> <span className="date">Jun 2022 </span>
                                    <li><span className="place">Full-Stack Website</span></li>
                                    <ul className="data" type="disc">
                                        <li className="data">
                                            Created a full-stack web-based, a multi-functional
                                            application following MVC architecture, developed to learn Fullstack web development
                                            containing details of more than 50 campgrounds around the
                                            globe
                                        </li>
                                        <li className="data">
                                            Features:
                                            <ul>
                                                <li>
                                                    Responsive web design (RWD) with User authentication
                                                    (Login/Register/Logout) and authorization
                                                    (Post/Like/Edit/Add reviews) with MongoDB Atlas cloud database to store data
                                                </li>
                                                <li>
                                                    Included features like image upload using Cloudinary as cloud database and geocoding maps for locating campgrounds using mapbox.
                                                </li>
                                                <li>
                                                Flashes messages using connect-flash and express-session responding to users'interaction with RESTful API and session management.
                                                </li>
                                                
                                                <li>
                                                Included Security features using JOI, express mongo sanitize , sanitize html , helmet to prevent mongo injections, Cross Site Scripting (XSS) attacks.
                                                </li>
                                                <li>
                                                Created content security policy to prevent malicious scripts from being injected in website.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Tech Stack: Mongo DB ,Mongoose ,Express js ,Node js ,Node-Geocoder ,Passport.Js ,MongoDB Atlas cloud database, Cloudinary
                                        </li>
                                        <li><a href="https://github.com/harsh-kashyap0201/yelpCamp" target="_blank" className="linkStyle">Link to project</a></li>
                                    </ul>
                                </li>

                                <li className="droplistitem mb-4">
                                    <span className="headitem">
                                        NSFW-Preventor</span> <span className="date">May 2022</span> <li><span className="place">Chromium Browser Extension</span></li> 
                                    <ul type="disc">
                                        <li className="data">
                                            Built a Chromium browser extension (Manifest V3) to
                                            prevent NSFW images from being displayed on the screen
                                        </li>
                                        <li className="data">
                                            Features:
                                            <ul>
                                                <li>
                                                    Identifies explicit content in images that are not
                                                    safe for work or other public places using adult
                                                    content detection technology.
                                                </li>
                                                <li>
                                                    Detects exposed parts of a body and classifies if they
                                                    are considered NSFW content and displaying another
                                                    image if found NSFW
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="data">
                                            Tech Stack: Chrome Extension CLI, NSFW images detection
                                            and classification API, JavaScipt, Manifest V3
                                        </li>
                                        <li className="data"><a href="https://github.com/harsh-kashyap0201/NSFW-Preventor" target="_blank" className="linkStyle">Link to project</a></li>
                                    </ul>
                                </li>

                                <li className="droplistitem">
                                    <span className="headitem">News Today</span>    <span className="date">Feb 2022</span> <li><span className="place">Online News Portal</span></li>
                                    <ul className="data" type="disc">
                                        <li>
                                            Created an online News portal where a user can read news
                                            from various sources of more than 5 categories.
                                        </li>
                                        <li>
                                            Features:
                                            <ul>
                                                <li>
                                                    Summary of articles in 100 words which can Copy Shared
                                                    on various social media platforms.
                                                </li>
                                                <li>
                                                    Read News from various categories like general,
                                                    business, entertainment, sports,technology etc from
                                                    various sources.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>Tech Stack: React js, News API, Bootstrap v5.1</li>
                                        <li><a href="https://github.com/harsh-kashyap0201/News-Today-App" target="_blank" className="linkStyle">Link to project</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='my-3'> <center>Made with 💓 by <span className='format'>Harsh</span></center></div>
            </motion.div>
        );
    }
}
