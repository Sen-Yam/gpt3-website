import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
const Links=[
  {
    title:'Links',
    options:['Overons','Social Media','Counters','Contact']
  },
  {
title: 'Company',
options:['Terms & Conditions','Privacy Policy','Contact']
  },
  {
title:'Get in touch',
options:['Crechterwoord K12 182 DK Alknjkcb','085-132567','info@payme.net']
  }
]
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
        <div className='gpt3__footer-header'>
          <h1 className='gradient__text'>Do you want to step in to the <br />future before others</h1>
          <button> <p>Request Early Access</p></button>
        </div>
        <div className='gpt3__footer-content'>
          <div className='gpt3__footer-content_logo'>
           <img src={logo} />
           <p>Crechterwoord K12 <br /> 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className='gpt3__footer-content_links'>
            {Links.map((link,index)=>(
                <div className='link' key={index}>
                  <h4>{link.title}</h4>
                  <div className='option'>
                  {link.options.map((option,indice)=>(
                    <p>{option}</p>
                  ))}
                     </div>
                </div>
            ))}
          </div>
        </div>
       <div className='last'>
       <p className='lastp'>© 2021 GPT-3. All rights reserved.</p>
       </div>
    </div>
  )
}

export default Footer