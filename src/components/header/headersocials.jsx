import React from 'react'
import{GrLinkedin} from 'react-icons/gr'
import{GrInstagram} from 'react-icons/gr'
import{BsFacebook} from 'react-icons/bs'
import{BsTwitter}from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target={"_blank"}><GrLinkedin
        className='icons'/></a>
        <a href="https://instagram.com" target={"_blank"}><GrInstagram className='icons'/></a>
        <a href="https://facebook.com" target={"_blank"}><BsFacebook className='icons'/></a>
        <a href="https://twitter.com" target={"_blank"}><BsTwitter className='icons'/></a>
        <a href="https://github.com" target={"_blank"}><BsGithub className='icons'/></a> 
    </div>
  )
}

export default headersocials