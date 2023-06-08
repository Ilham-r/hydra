import React , {useState}  from 'react'
import tech1 from '../../assets/Tech1.png'
import tech2 from '../../assets/Tech2.png'
import tech3 from '../../assets/Tech3.png'
import tech4 from '../../assets/Tech4.png'
import leftChev from '../../assets/leftChev.png'
import rightChev from '../../assets/rightChev.png'
import './tech.css'
const Tech = () => {
    const brands=[tech1,tech2,tech3,tech4]
    const [slideIndex, setSlideIndex] = useState(0);
    const length = brands.length;
  
    const nextSlide = () => {
      setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
    };
  
    const prevSlide = () => {
      setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
    };
  return (
  <div className="tech__container" id='why'>
    <div className="tech__container-title">
        <h1>TECHNOLOGIES & HARDWARE</h1>
        <h3>USED BY HYDRA VR.</h3>
    </div>
    <div className="tech__container-brands">
{
    brands.map((brand)=>(
        <img src={brand} alt="tech" />
    ))
}
    </div>
    <div className="tech__container-brands_mobile">
    <div className='arrows'> <img src={leftChev} alt="prev slide" onClick={prevSlide}/></div>
    <img src={brands[slideIndex]} alt="tech" />
    <div  className='arrows'> <img src={rightChev} alt="next slide"onClick={nextSlide}/></div>
    </div>
  </div>
  )
}

export default Tech