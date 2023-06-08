import React from 'react'
import './Introduction.css'
import VR from '../../assets/vrguy.png'
import arrow from '../../assets/arrow.png'
const Introduction = () => {
  return (
   <div className="introduction__container" id='about'>
     <div className="introduction__container-row">
 
    <div className='introduction__container-row_column'>
   <h1>INTRODUCTION</h1>
   <div className='group'>
   <h6>TO HYDRA VR</h6>
   <img src={arrow} alt="arrow" />
    </div>
    </div>
<p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
     </div>
     <div className="introduction__container-row2">
    <img src={VR} alt="vr guy" />
    <div className='introduction__container-row_column'>
      <h1>ABOUT</h1>
      <h6>HYDRA VR</h6>
      <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
n tempor.</p>
<button>LET’S GET IN TOUCH</button>

    </div>

      
</div>

   </div>
  )
}

export default Introduction