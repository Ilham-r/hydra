
import React , { useState } from 'react';
import hydra from '../../assets/hydra.png';
import sign from '../../assets/sign.png';
import bar from '../../assets/hamburger.svg';
import close from '../../assets/close.svg';
import './Navbar.css'
const Navbar = () => {
  
const[toggleMenu, setToggleMenu]=useState(false);
  return ( 
    <> 
    <div className="navbar__container">
        <div className="navbar__container-logo">
        <img src={sign} alt="hyora" />
        <img src={hydra} alt="hyora" />
       
        </div>
        <div className="navbar__links-container">
            <p> <a href="#about">ABOUT</a></p>
            <p> <a href="#services">SERVICES</a></p>
            <p> <a href="#techno">TECHNOLOGIES</a></p>
            <p> <a href="#how">HOW TO</a></p>
        </div>
        <div className="navbar__buttons">
        <button >CONTACT US</button>
        <button >JOIN HYDRA</button>
        </div>
        <div className="navbar__menu">

        {toggleMenu
  ?<img src={close} alt="close"  onClick={ ()=> setToggleMenu(false)}/>
  :<img src={bar}  alt="menu bar"  onClick={ ()=> setToggleMenu(true)}/>
   }
   {toggleMenu &&(
    <div className="navbar__menu-container">
      <div className="navbar__menu-container_linkes">
      <p> <a href="#about">ABOUT</a></p>
            <p> <a href="#services">SERVICES</a></p>
            <p> <a href="#techno">TECHNOLOGIES</a></p>
            <p> <a href="#how">HOW TO</a></p>
      </div>
      <div className="navbar__menu-container_linkes-buttons">
        <button >CONTACT US</button>
        <button >JOIN HYDRA</button>
        </div>
    </div>
   )

   }
        </div>
    </div>
    </>
  )
}

export default Navbar