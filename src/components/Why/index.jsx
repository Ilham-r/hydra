import React, {useState} from 'react'
import arrow from '../../assets/arrow.png'
import leftChev from '../../assets/leftChev.png'
import rightChev from '../../assets/rightChev.png'
import './Why.css'
import {Services} from '../constant/index'
import Card from '../Card/Card'
const Why = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = Services.length;

  const nextSlide = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };
  return (
    <div className="why__container" id='services'>
      <div className="why__container-row">
        <div className="why__container-row_column">
        <h1>WHY BUILD</h1>
   <div className='group'>
   <h6>WITH HYDRA?</h6>
   <img src={arrow} alt="arrow" />
    </div>
        </div>
        <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
      </div>

      <div className="why__container-cards_container-desktop">
{Services?.map((service)=>(
  <Card img={service.img} title={service.title}/>
))}
      </div>
    <div className="why__container-cards_container-mobile">
      <div className='arrows'> <img src={leftChev} alt="prev slide" onClick={prevSlide}/></div>
     
 
  <Card img={Services[slideIndex].img} title={Services[slideIndex].title}/>
<div  className='arrows'> <img src={rightChev} alt="next slide"onClick={nextSlide}/></div>
    
    </div>
    </div>
  )
}

export default Why