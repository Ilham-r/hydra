import React from 'react'
import vector from '../../assets/vector16.png'
import './contact.css'
const Contact = () => {
  return (
<div className="contact__container">
    <h1>JOIN HYDRA</h1>
    <img src={vector} alt="vector" />
    <p>Let’s Build Your VR Experience</p>
    <div className="contact__container-form">
    <form >
      <div className="flex_row">

       <input type="text"   placeholder='First Name'/>
       <input type="text"   placeholder='Last Name'/>
       </div>
       <div className="flex_row">
       <input type="email" placeholder='Email' />
       <input type="number" placeholder='Password' />
       </div>
       <input type="text" placeholder='Subject' />
       <textarea name="" id="" cols="30" rows="10" placeholder='Tell Us Something...' />

    </form>
    </div>
    <button>SEND TO HYDRA</button>
    
</div>
  )
}

export default Contact