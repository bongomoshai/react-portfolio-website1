import React from 'react'
import './about.css'
import ME from'../../assets/vec2.gif'
const about = () => {
  return (
    <section id='about'><div className='about__metxt'>
    <h1 className='me_text'>About me</h1></div>
    <h2></h2>
    {/* <h2 className='about__hey'>Hey there!</h2> */}
    <div className="container about__container">
      <div className="about__me">
       <div className="about__me-image">
       <img src={ME} alt="About Image" />
       </div>
      </div>
      <div className="about__content">
      {/* <small>
           I am a passionate Developer having intrest in Data Analytics, Machine Learning and having experience in Web Development.<br></br> 
           I want to develop sustainable and scalable social and technical systems to create impact.<br></br>
           </small> */}
       <div className="about__cards">
         <article className='about__card'>
           {/* <small>
           A passionate Developer having an experience in Data Analytics, Machine Learning, Web Development and want to develop sustainable and scalable social and technical systems to create impact.
           </small> */}
           <h3 className='about__hey'>Hey there!</h3>
           <br></br>
           <small>
            FULL NAME: Ayan Sarkar<br></br>
            PRONOUNS:  He/Him<br></br>
            BIRTH DATE:
            26th February, 2001<br></br>
            LOCATION:
Dhanbad, India<br></br>
EMAIL:
sarkarayon2621@gmail.com
  <br></br> <br></br>
  I am a passionate Developer having interest in Data Analytics, Machine Learning and having experience in Web Development.<br></br> 
           I want to develop sustainable, scalable  technical systems which could create social impact.<br></br>
           </small>
         </article>
       </div>
      </div>
    </div>
    </section>
  )
}

export default about