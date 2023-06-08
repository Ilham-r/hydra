import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Why from './components/Why'
import Tech from './components/Technologies/Tech'
import How from './components/How/How'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
     <Navbar />
     <Hero/>
     <Introduction/>
     <Why />
     <Tech/>
     <How/>
     <Contact />
     <Footer/>
    </>
  )
}

export default App
