import React from 'react'
import './contacts.css'
import {FaTelegramPlane} from 'react-icons/fa'
//for instagram
import {MdOutlineEmail} from 'react-icons/md'
//mail
import {ImInstagram} from 'react-icons/im'
import {GrLinkedinOption} from 'react-icons/gr'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';


const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ky8a5zv', 'template_bw6n91f', form.current, 'I8RhzdXZCe9ctzGlu')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
      e.target.reset()
  };

  return (
    <section id='contacts'>
      <h5>Let's catch up </h5>
      <h2>Contact info:</h2>
      <div className="container contacts__container">
        <div className="contact__options">
          <article className="contact__options">
          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Mail:</h4>
            <h5>sarkarayon2621@gmail.com</h5>
            <a href='mailto:sarkarayon2621@gmail.com' target="_blank">SEND A MAIL</a>
          </article>
          <br/>
          <article className='contact__option'>
          <FaTelegramPlane contact__option-icon/>
            <h4>Messenger</h4>
            {/* <a href='https://m.me/'>SEND A MAIL</a> */}
            <a href='https://www.facebook.com/profile.php?id=100004471066210'>Drop a hello</a>
          </article>
          <br/>
          <article className='contact__option'>
          <ImInstagram contact__option-icon/>
            <h4>DM me on</h4>
            <h5>Instagram</h5>
            <a href='https://www.instagram.com/direct/inbox/?hl=en'>Connect</a>
          </article>
          <br/>
          <article className='contact__option'>
          <GrLinkedinOption/><br/>
          {/* <h6>Or</h6> */}
            <h4>Connect over</h4>
            <h5>LinkedIn</h5>
            <a href='https://www.linkedin.com/in/ayan-sarkar-081b57206/'>Connect</a>
          </article>
          </article><br/>
          </div><br/>
          {/* END OF ACTION OPTIONS */}
          <h1>Your message</h1>
          <form ref= {form} onSubmit ={sendEmail}>
            <input type="text" name='name' placeholder='Full Name' required/>
            <input type="email" name='email' placeholder='Your Mail Id' required/>
            <textarea name="message"rows="7" placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary'>Send Messege</button>
          </form>
       
      </div>

    </section>
  )
}

export default Contacts