import React from 'react'
import {Brand,Cta,Navbar} from './components/index'
import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from './containers/index'
import './App.css'
import './index.css'
const App = () => {
  return (
    <div className='App' id="home">
     <div className='gradient__bg'>
    <Navbar />
    <Header />
     </div>
     <Brand />
     <WhatGPT3 />
     <Features />
     <Possibility />
     <Cta />
     <Blog />
     <Footer /> 
    </div>
  )
}

export default App