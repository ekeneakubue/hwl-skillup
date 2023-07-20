import React, { useRef }  from 'react'
import './application.css'
import { BsTelephoneFill, BsHouseFill, BsEnvelopeFill, BsWhatsapp, BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
// import emailjs from '@emailjs/browser';

export default function Application() {
    //EmailJS Config
    // const form = useRef()
    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm(
    //         'service_btzv1hw', 
    //         'template_mzxhqqj', 
    //         form.current, 
    //         'CbvCANNmhODLvBPoS'
    //     )
    //     .then((result) => {
    //         console.log(result.text);
    //         console.log("message sent")            
    //         document.getElementById("alert").innerHTML = ('Success! Please check your email to complete your Registration')
    //         }, 
    //         (error) => {
    //             console.log(error.text);
    //             document.getElementById("alert").innerHTML = ('Error, Check your network and try again')
    //         }
    //     );
    // };
    
  return (
    <div className="container justify-content-center">  
        <div className="myapp">
          
            <form className='form-group text-center' id="contactForm">
                <br/><br/>    
                <h5>JOIN US THROUGH THESE LINKS</h5>                     
                <div id='alert' className='message'></div>
                <div className="row mt-4">                        
                    <div className="col-lg-12 form-item">
                        <h1><i class="bi bi-telegram text-info"></i></h1>
                        <a href="https://t.me/+uBK7MXiFZvxlZTk8"><div className="text-info">https://t.me/+uBK7MXiFZvxlZTk8</div></a>
                        <br/><br/>
                    </div>
                    <div className="col-lg-12 form-item">
                        <h1><i class="bi bi-discord text-warning"></i></h1>
                        <a href="https://discord.gg/csJ974VU"><div className="text-warning">https://discord.gg/csJ974VU</div></a>
                    </div>                                
                </div>
            </form>
            
        </div>
    </div>
  )
}