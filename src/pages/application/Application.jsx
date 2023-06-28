import React, { useRef }  from 'react'
import './application.css'
import { BsTelephoneFill, BsHouseFill, BsEnvelopeFill, BsWhatsapp, BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import emailjs from '@emailjs/browser';

export default function Application() {
    //EmailJS Config
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_btzv1hw', 
            'template_mzxhqqj', 
            form.current, 
            'CbvCANNmhODLvBPoS'
        )
        .then((result) => {
            console.log(result.text);
            console.log("message sent")            
            document.getElementById("alert").innerHTML = ('Success! Please check your email to complete your Registration')
            }, 
            (error) => {
                console.log(error.text);
                document.getElementById("alert").innerHTML = ('Error, Check your network and try again')
            }
        );
    };
    
  return (
    <div className="container justify-content-center">  
        <div className="myapp">
          
            <form className='form-group text-center' id="contactForm" ref={form} onSubmit={sendEmail}>
                <br/><br/>    
                <h5>Start Your Application</h5>                     
                <div id='alert' className='message'></div>
                <div className="row mt-4">                        
                    <div className="col-lg-12 form-item">
                        <div className="form-group">
                            <input name="user_name" id="name" type="text" className="form-int form_setup" placeholder="Your Name*" required/>
                        </div>
                    </div>
                    <div className="col-lg-12 form-item">
                        <div className="form-group">
                            <input name="user_email" id="email" type="email" className="form-int form_setup" placeholder="Your Email*" required/>
                        </div>
                    </div>  
                    <div className="col-lg-12 form-item">
                        <div className="form-group">
                            <input name="user_phone" id="phone" type="phone" className="form-int form_setup" placeholder="Your Whatsapp No*" required/>
                        </div>
                    </div>                                      

                    <div className="col-12 btn-form-item">
                        <button className='form-int-button send-btn bg-primary text-light' type="submit" id="send" >            
                            <h6><i className="bi bi-send-fill text-danger"></i> Apply</h6>
                        </button>                                                                            
                    </div>  
                                
                </div>
            </form>
            
        </div>
    </div>
  )
}