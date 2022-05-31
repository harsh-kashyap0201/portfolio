import React, { Component } from 'react'
import getTouch from './Frame 1 (1).png'
export default class contact extends Component {
    render() {
    return (
        <div className='container contactbg'>
           
            <center><img src={getTouch} className='contactPic'/></center>
            <div className='container d-flex justify-content-around contactbox' >
                <div className='row'>
                    <div className='col-md-6'>
                    <span className='shy'>DON'T BE SHY !</span>
                    <br />
                    <span className='textContact'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</span>
                    
                    <br />
                    <br />
                    <span className='bold'>ADDRESS POINT</span>
                    <br />
                    37-A Ekta vihar, Govind Nagar(w) Jaipur , Rajasthan , India.
                    <br />
                    <br />
                    <span className='bold'>MAIL ME</span>
                    <br/>
                    <a href="mailto:harshkashyap2012002@mail.com" className='link'>harshkashyap2012002@gmail.com</a>
                    <br/>
                    <br/>
                    <span className='bold'>CALL ME</span>
                    <br/>
                    <a href="tel:+916367575699" className='link'>+91-6367575699</a>
                    </div>
                    <div className='col-md-6'>
                    <form>
                        <div class="form-group">
                            
                            <input type="text" class="form-control textbox" id="name" placeholder="YOUR NAME" />
                            <br />
                            <input type="email"className='form-control textbox' id="email" placeholder="YOUR EMAIL" />
                            <br/>
                            <textarea class="form-control textarea" id="message" rows="3" placeholder="YOUR MESSAGE"></textarea>
                        </div>
                    </form>
                    </div>   
                </div>
            </div>
            <center>Made with <span className='format'>❤</span> by <span className='format'>Harsh</span></center>
        </div>
        )
}
}