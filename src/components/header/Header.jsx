import React from 'react'
import './header.css'
import Cta from './CTA'
import ME from '../../assets/me2.jpg'
import Headersocials from './headersocials'
import ReactCrop from 'react-image-crop'
const header = () => {
  return (
    <header >
      <div className='heder'>
      <h2>I am</h2>
      <h1>Ayan Sarkar</h1>
      <h5 className="text-light"> Student  |  Coder  |   Teetotaler </h5>
      <Cta/>
      <Headersocials/>
      <div className='me bounce'>
        <img src={ME} alt="me"/>
        </div>
      <a href="#contacts"className='scrolldown'>Scroll Down</a>
      </div>
      </header>
  )
}

export default header