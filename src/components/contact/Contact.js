import { useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";

export default function Contact() {
  const refForm = useRef();
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("clicked");
    emailjs.sendForm('service_p918nrp', 'template_wez3jap', refForm.current, 'GlmHr1kGSAKDCQQBM')
      .then((result) => {
          console.log(result.text);
          setSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="contact" id="contact">
        <div className="bar"></div>

        <div className="wrapper">
          <div className="left">
            <h1 className="title">Contact me</h1>
            <div className="info-wrapper">
              <img src="assets/blue-phone.png" alt="" /> +1(780)716-6359
            </div>
            <div className="info-wrapper">
              <img src="assets/mail-message.png" alt="" /> qfd.Felix@gmail.com
            </div>
            <div className="info-wrapper">
              <img src="assets/Github_logo.png" alt="" /> <a href="https://github.com/QFD-Felix?tab=repositories">GitHub Link</a>
            </div>
          </div>

          <div className="right">
            <h3>
              <b>Want to contact me? </b> <br/>
              Please fill out the following box and I will reply as soon as possible.
            </h3>
            
            <form ref = {refForm} onSubmit={handleSubmit} >
              <input type="text" placeholder="Your Name" name="user_name"/>
              <input type="text" placeholder="Your Email" name="user_email"/>
              <input type="text" placeholder="Subject" name="user_subject"/>
              <textarea rows="10" placeholder="Message" name="message"></textarea>
              <button>Submit</button>
              <span>{submitted && "Thank you! I will reply as soon as possible."}</span>
            </form>
          </div>
        </div>
    </div>
  )
}
