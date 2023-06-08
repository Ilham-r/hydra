import React, {useState} from 'react'
import './how.css'
import arrow from '../../assets/arrow.png'
import right from '../../assets/right.png'
import vector from '../../assets/vector15.png'
import leftChev from '../../assets/leftChev.png'
import rightChev from '../../assets/rightChev.png'
import {Details} from '../constant/index'

const Card =(props)=>{
  return(
<div className="card__container" id='how'>
  <div className="card__conatiner-number">
   <h2> {props.num}</h2>
  </div>
  <div className="card__container-group">
    <img src={right} alt="arrow" />
    <h3>{props.title}</h3>
  </div>
</div>)
}
const How = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = Details.length;

  const nextSlide = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };
  return (
    <div className="how__container">
      <div className="how__container-row">
 
 <div className='how__container-row_column'>
<h1>HOW WE BUILD</h1>
<div className='group'>
<h6>WITH HYDRA VR?</h6>
<img src={arrow} alt="arrow" />
 </div>
 </div>
<p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
  </div>

 
  <div className="how__container-cards_container-desktop">
    <div className="how__container-cards_container-vector">
    <img src={vector} alt="vector"  />
    </div>
    
   {
    Details.map((detail)=>(
      <Card num={detail.num} title={detail.details}/>
    ))
   }
   </div>
   <div className="how__container-cards_container-mobile">
  

   <div className='arrows'> <img src={leftChev} alt="prev slide" onClick={prevSlide}/></div>
  
   <Card num={Details[slideIndex].num} title={Details[slideIndex].details}/>
   <div  className='arrows'> <img src={rightChev} alt="next slide"onClick={nextSlide}/></div>
       
   </div>
  </div>
   
  )
}

export default How