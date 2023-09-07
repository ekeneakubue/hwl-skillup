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
                <h5>JOIN US THROUGH Whatsapp</h5>                     
                <div id='alert' className='message'></div>
                <div className="row mt-4">                        
                    <div className="col-lg-12 form-item">
                        <h1 className="foot-icon"><a href="https://wa.me/+23409023488168" target="_blank" rel="noopener npreferrer"><i class="bi bi-whatsapp text-success"></i> Whatsapp</a></h1>
                        <br/><br/>
                    </div>                                                   
                </div>
            </form>
            
        </div>
    </div>
  )
}