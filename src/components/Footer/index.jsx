import React from 'react'
import './Footer.css'
import sign from '../../assets/sign.png';
import vector from '../../assets/vector20.png'
import line from '../../assets/vector16.png'
import curv from '../../assets/vector18.png'
import curve from '../../assets/vector19.png'
import {Instagram,Facebook,Twitter,Pinterest,Youtube,Linkedin} from '../../assets/socials'

const Footer = () => {
    
   const imgs=[Instagram, Facebook, Twitter,Pinterest,Youtube,Linkedin]
  return (
   <div className="footer__container" >
    <div className="curves">
    <img src={curve} alt="curv" />
    <img src={curv} alt="curv" />
  
    </div>
    <div className="footer__container-menu">
<div className="footer__container-group">
  <img src={sign} alt="" />
</div>
<img src={vector} alt="vector" className='vector' />
    <div className="footer__container-group">
<p>ABOUT </p>
 <p>  SERVICES</p>
<p> TECHNOLOGIES</p>
<p> HOW TO</p>
 <p> JOIN HYDRA</p>
    </div>
    <img src={vector} alt="vector" className='vector' />
    <div className="footer__container-group">
  <p> F.A.Q </p> 
 <p> SITEMAP </p>
  <p> CONDITIONS </p>
 <p> LICENSES</p>
    </div>
    <img src={vector} alt="vector" className='vector' />
    <div className="footer__container-group">
      <p>SOCIALIZE WITH HYDRA</p>
        <div className="footer__container-group_socials">
          {
            imgs.map((image)=>(
              <img src={image} alt="" />
            ))
          }
        </div>
        <button>BUILD YOUR WORLD</button>
       </div>
       </div>
<img src={line} alt="line" className='line' />
   <p>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>

   </div>
  )
}

export default Footer