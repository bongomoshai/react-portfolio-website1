import React from 'react'
import CV from '../../assets/CV.pdf'
import {BsCloudDownloadFill} from 'react-icons/bs'
const Cta = () => {
  return (
    <div className='cta'>
        <a href = {CV}download className='btn'>Download CV <BsCloudDownloadFill/></a>
        <a href="#contacts" className='btn btn-primary'>Let's Catch up</a>
    </div>
  )
}

export default Cta