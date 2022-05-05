import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Skillexp from './components/skillexp/Skillexp'
import Projfolio from './components/projfolio/Projfolio'
import Contacts from './components/contacts/Contacts'
import Misc from './components/misc/Misc'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <> 
    <Header/>
    <Nav/>
    <About/>
    <Education/>
    <Skillexp/>
    <Projfolio/>
    <Misc/>
    <Contacts/>
    <Footer/>
    </>
    
  )
}

export default App