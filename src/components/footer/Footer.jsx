import React from "react";
import { SocialIcon } from "react-social-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>
        Ayan Sarkar
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer_socials'>
        <SocialIcon url= 'https://www.linkedin.com/in/ayan-sarkar-081b57206/' target='_blank' />
        <SocialIcon
          url='https://www.facebook.com/profile.php?id=100004471066210'
          target='_blank'
        />
      </div>
      <div className='footer_copyright'>
        <small>&copy; Ayan Sarkar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;