import React from 'react'
import './nav.css'
import{IoIosHome}from 'react-icons/io'
import{FaUserCircle}from 'react-icons/fa'
import{ImBooks}from 'react-icons/im'
import{GiSoapExperiment}from 'react-icons/gi'
import{RiContactsBookFill}from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const[activeNav,setActiveNav]=useState('#home')
  return (
<nav>
  <a href='#'   onClick={()=>setActiveNav('#')}
className={activeNav==='#'?'active':''}><IoIosHome/></a>
  <a href='#about' 
  onClick={()=>setActiveNav('#about')}
  className={activeNav==='#about'?'active':''}>
  <FaUserCircle/></a>
  <a href='#skillexp'
   onClick={()=>setActiveNav('#skillexp')}
   className={activeNav==='#skillexp'?'active':''}
  ><ImBooks/></a>
  <a href='#misc'
   onClick={()=>setActiveNav('#misc')}
   className={activeNav==='#misc'?'active':''}
  ><GiSoapExperiment/></a>
  <a href='#contacts'
   onClick={()=>setActiveNav('#contacts')}
   className={activeNav==='#contacts'?'active':''}
  ><RiContactsBookFill/></a>
</nav>
    )
}

export default Nav;