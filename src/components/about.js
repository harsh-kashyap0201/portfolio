import React, { Component } from 'react'
import aboutPic from './Frame 1.png'
import interest from './interests3.png'
import misc from './misc2.png'
import lang from './lang4.png'
// document.body.style.background = "#080424";



export default class About extends Component {

    render() {
        return (
            <div className="about">
                <center><img src={aboutPic} className="aboutPic" /></center>
                <div className='aboutTextOuter container'>
                    <div className='aboutText container'>
                        <h1>Personal <span className='format'>Info <hr></hr> </span></h1>
                        <div className='data d-flex justify-content-evenly'>
                            <div className='left'>

                                <span className='format bold'>&gt; </span><b>Name: </b>&nbsp;Harsh Kashyap
                                <br /><span className='format bold'>&gt; </span><b>Age: </b>&nbsp;20
                                <br /><span className='format bold'>&gt; </span><b>college name: </b>&nbsp;VIT Vellore
                                <br /><span className='format bold'>&gt; </span><b>Branch: </b>&nbsp;CSE Specialization in BlockChain Technology
                                <br /><span className='format bold'>&gt; </span><b>City: </b>&nbsp;Jaipur ,Rajasthan
                                <br /><span className='format bold'>&gt; </span><b>Job/Internship: </b>&nbsp;Available
                                <br /><span className='format bold'>&gt; </span><b>Email:</b>&nbsp; harshkashyap2012002@gmail.com
                                <br /><span className='format bold'>&gt; </span><b>Phone: </b>&nbsp;6367575699

                            </div>
                            <div className='right'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa nobis optio eveniet esse officiis quasi in ad sed voluptates labore quod nesciunt similique recusandae id tenetur veritatis, nemo fuga quisquam itaque quas voluptatem magnam porro? Voluptates ducimus labore quidem molestias reprehenderit dolorum maxime, aperiam sapiente harum ut laudantium nobis rerum nam. Dignissimos ipsa asperiores quo sed, consectetur blanditiis dolor, veritatis voluptates inventore impedit repellendus quos eaque odit tenetur aliquid deserunt atque placeat reprehenderit.
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className='resume'>
                            <h1>MY <span className='format'> SKILLS <hr></hr> </span></h1>
                            <div className='skillImages d-flex justify-content-evenly'>
                                <img src={interest} className='skill' />
                                <img src={lang} className='skill' />
                                <img src={misc} className='skill' />
                            </div>

                        </div>
                        <div className='resumeContent'>
                            <h1>CHECK MY<span className='format'> RESUME <hr></hr> </span></h1>
                        </div>
                        <div class="container justify-content-around">
                            <div class="row">
                                <div className="col ">

                                    <span className='headingResume'>SUMARY</span>
                                    <br />
                                    <ul>
                                        <li><span className='format'>CAREER OBJECTIVE</span></li>
                                        
                                        A highly motivated individual and acquired skill in Web Development, attention to detail, and a solid Engineering background looking to obtain a responsible career opportunity to fully utilize my training and skills, while making a
                                        significant contribution to the success of the Organization
                                    </ul>
                                    <br />
                                    <br />
                                    <span className='headingResume'>EDUCATION</span>
                                    <br />
                                    <ul>
                                        <li><span className='format'>BACHELOR OF TECHNOLOGY (COMPUTER SCIENCE)</span></li>
                                        <span className='Date'>2020 - 2024</span>
                                        <br />
                                        <span className="company">Vellore Institute of Technology, Vellore</span>
                                        <br />
                                        Current CGPA : 8.7
                                        <br />
                                        <br />
                                        <li><span className='format'>HIGH SECONDARY EDUCATION</span></li>
                                        <span className='Date'>2018 - 2020</span>
                                        <br />
                                        <span className="company">Maheshwari Public School, Jaipur</span>
                                        <br />
                                        12th CBSE Board Score : 94.20 % (PCM)
                                        <br />
                                        Qualified JEE Mains
                                    </ul>
                                    <br />
                                    <br />
                                    <span className='headingResume'>CERTIFICATES</span>

                                    <ul>
                                        <li>certificate 1</li><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, voluptate.
                                        <li>certificate 2 </li><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, voluptate.
                                        <li>certificate 3</li> <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, voluptate.
                                        <li>certificate 4 </li><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, voluptate.
                                    </ul>
                                </div>
                                <div class="col">
                                    <span className='headingResume'>WORK EXPERIENCE</span>
                                    <br />
                                    <span className='format'>IoThinC VIT</span>
                                    <br />
                                    <span className='Date'>December 2020 - Present</span>
                                    <br />
                                    <span className="company">Core Commitee Member</span>
                                    <br />
                                    <ul>
                                        <li> Developed official website of IoThinc VIT</li>
                                        <li> Used React JS , Tailwind CSS and Figma for designing and developing Web applications</li>
                                        <li> Took Technical interviews for recruitments</li>
                                    </ul>
                                    <br />
                                    <span className='format'>INTERNSHALA</span>
                                    <br />
                                    <span className='Date'>January, 2022 - February, 2022</span>
                                    <br />
                                    <span className="company">Internshala Student Partner (ISP 27)</span>
                                    <ul>
                                        <li>Promoted Internshala and their various courses in my college.</li>
                                        <li>Helped students in my college to get training and internships by Internshala.</li>
                                    </ul>
                                    <br />
                                    <span className="headingResume">COMPETETIVE CODING</span>
                                    <br />
                                    <span className='format'>Hackerrank </span>: 5 star
                                    <br />
                                    <span className='format'>codechef</span>
                                    <br />
                                    <span className='format'>Leetcode</span>
                                    <br />
                                    <span className="headingResume">HONORS AND AWARDS</span>
                                    <br />
                                    <span className='format'>HONORS AND AWARDS 1</span>
                                    <br />
                                    <span className='format'>HONORS AND AWARDS 2</span>
                                    <br />
                                    <span className='format'>HONORS AND AWARDS 3</span>

                                </div>

                            </div>
                        </div>
                    </div>
                    <center>Made with <span className='format'>❤</span> by <span className='format'>Harsh</span></center>
                </div>
            </div>
        )
    }
}


