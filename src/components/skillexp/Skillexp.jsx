import React from 'react'
import './skillexp.css'
import {GiBookshelf} from 'react-icons/gi'
import{FiCornerRightDown} from 'react-icons/fi'
import{TiMediaRecord} from 'react-icons/ti'
// import logo1 from '../../assets/java.png'

const skillexp = () => {
  return (
      <section id='skillexp'>
        <h2>Skills and Experiences</h2>
          <div className="container skill__exp">
          <h3>SKILLS <FiCornerRightDown/></h3><br/>
            <div className="container exp__skill">
            <h4 className="color-primary"><GiBookshelf/>Languages:</h4>
             <div className="exp__content">
             <div>
               <article className='details'>
               <div>
               <h6><TiMediaRecord/>C</h6>
               <small className='text-light'>Intermediate</small>
               </div>
               {/* <h6>C++</h6>
               <h6>JAVA</h6>
               <h6>Python</h6> */}
               </article><br/>
               <article className='details'>
                <div>
                <h6><TiMediaRecord/>C++</h6>
               <small className='text-light'>Experienced</small>
                </div>
               </article><br/>
               <article className='details'>
               <div>
               <h6><TiMediaRecord/>JAVA</h6>
               <small className='text-light'>Intermediate</small>
               </div>
               </article><br/>
               </div>
               <div>
               <article className='details'>
               <div>
               <h6><TiMediaRecord/>PHP</h6>
               <small className='text-light'>Intermediate</small>
               </div>
               </article><br/>
               <article className='details'>
               <div>
               <h6><TiMediaRecord/>Python</h6>
               <small className='text-light'>Basic</small>
               </div>
               </article><br/>
               <article className='details'>
              <div>
              <h6><TiMediaRecord/>JavaScript</h6>
               <small className='text-light'>Basic</small>
              </div>
               </article>
               </div>
             {/* <img src={logo1} alt="Logo" />; */}
             </div>
            </div>
            {/* <div className="container exp__exp">
            <article className='details'>
               <h4 className="color-primary"><GiBookshelf/>Development :</h4><br/>
               <h6><TiMediaRecord/>HTML</h6>
               <small className='text-light'>Experienced</small>  
               </article><br/>
               <article className='details'>
               <h6><TiMediaRecord/>CSS</h6>
               <small className='text-light'>Intermediate</small>
               </article>
               <br/>
               <article className='details'>
               <h6><TiMediaRecord/>NodeJs</h6>
               <small className='text-light'>Beginner</small>
               </article>
               <br/>
               <article className='details'>
               <h6><TiMediaRecord/>ReactJs</h6>
               <small className='text-light'>Intermediate</small>
               </article><br/>
               <article className='details'>
               <h6><TiMediaRecord/>MySQL</h6>
               <small className='text-light'>Intermediate</small>
               </article><br/>
               <article className='details'>
               <h6><TiMediaRecord/>MongoDB</h6>
               <small className='text-light'>Beginner</small>
               </article><br/>
               <article className='details'>
               <h6><TiMediaRecord/>PHP</h6>
               <small className='text-light'>Intermediate</small>
               </article><br/>
               <article className='details'>
               <h6><TiMediaRecord/>Git</h6>
               <small className='text-light'>Beginner</small>
               </article><br/>

              </div>   */}
           <div className="container exp__skill">
             <div className="exp__content">
             <h4 className="color-primary"> Development:</h4><br/>
              <div>
                <article className='details'>
                  <div>
                  <h6><TiMediaRecord/>HTML</h6>
                  <small className='text-light'>Experienced</small>  
                  </div>
                </article><br/>
                <article className='details'>
                  <div>
                  <h6><TiMediaRecord/>CSS</h6>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article><br/>
                {/* <article className='details'>
                  <div>
                  <h6><TiMediaRecord/>NodeJs</h6>
                  <small className='text-light'>Beginner</small>
                  </div>
                </article><br/> */}
                <article className='details'>
                  <div>
                  <h6><TiMediaRecord/>ReactJs</h6>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article><br/>
               </div>
               <div>
               <article className='details'>
               <div>
               <h6><TiMediaRecord/>MySQL</h6>
               <small className='text-light'>Intermediate</small>
               </div>
               </article><br/>
               {/* <article className='details'>
              <div>
              <h6><TiMediaRecord/>MongoDB</h6>
               <small className='text-light'>Beginner</small>
              </div>
               </article><br/> */}
               <article className='details'>
               <div>
               <h6><TiMediaRecord/>Git</h6>
               <small className='text-light'>Beginner</small>
               </div><br/>
               </article>
               <article className='details'>
                  <div>
                  <h6><TiMediaRecord/>NodeJs</h6>
                  <small className='text-light'>Beginner</small>
                  </div>
                </article><br/>
             </div>
            </div>    
          </div>
          </div>
        </section>
  )
}
export default skillexp