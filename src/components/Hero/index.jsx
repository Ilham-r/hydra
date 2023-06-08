import React ,{useState}from 'react'
import './Hero.css'
import arrow from '../../assets/arrow-small-right.png'
import location from '../../assets/location.png'
import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'
import {Vec1,Vec2,Vec3,Vec4,Vec5,Vec7,Imge} from '../../assets/vectors'
import {information} from '../constant/index'
import rightarrow from'../../assets/chevron-circle-right.png'
import leftarrow from'../../assets/chevron-circle-left.png'
const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = information.length;

  const nextSlide = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };
  return (
    <div className="hero__container">
      <div className="hero__container-wrapper">
      <div className="hero__container-text_section">
        <h1>
        <span> Dive</span> Into The Depths Of <span>Virtual Reality</span>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore 
nisl tincidunt eget. Lectus mauris eros in vitae .</p>

       <div className="hero__container-text_section-button">
        <button>BUILD YOUR WORLD</button>
        <img src={arrow} alt="arrow" />
       </div>
      </div>
      <div className="hero__container-image_section">

      <img src={Imge} alt="vr image" className='main__image'/>
      <img src={Vec1} alt="vector" />
      <img src={Vec2} alt="vector" />
      <img src={Vec3} alt="vector" />


      </div>
    </div>
    <div className="hero__container-rectangle">
    <div className="hero__container-rectangle_big">
       <div className="hero__container-rectangle_wrapper">
        <img src={location} alt="location" />
         <div className="hero__container-rectangle_info">
          <h4>Pay Us a Visit</h4>
          <p>Union St, Seattle, WA 98101, United States</p>
         </div>
       </div>
       <img src={Vec5}alt=" bar" />
       <div className="hero__container-rectangle_wrapper">
        <img src={phone} alt="phone" />
         <div className="hero__container-rectangle_info">
          <h4>Give Us a Call</h4>
          <p>(110) 1111-1010</p>
         </div>
       </div>
       <img src={Vec5}alt=" bar" />
       <div className="hero__container-rectangle_wrapper">
        <img src={mail} alt="mail" />
         <div className="hero__container-rectangle_info">
          <h4>Send Us a Message</h4>
          <p>Contact@HydraVTech.com</p>
         </div>
       </div>
     </div>
     <div  className='chev chevright'> <img src={rightarrow} alt="right arrow" onClick={prevSlide}/></div>
     <div className="hero_container-rectangle_mobile">
           <div className="hero__container-rectangle_wrapper">
        <img src={information[slideIndex].img} alt="mail" />
         <div className="hero__container-rectangle_info">
          <h4>{information[slideIndex].info1}</h4>
          <p>{information[slideIndex].info2}</p>
         </div>
       </div>
      
      
     </div>
     <div className='chev'> <img src={leftarrow} alt="left arrow" onClick={nextSlide} /></div>
    </div>
    
      
    </div>
  )
}

export default Hero