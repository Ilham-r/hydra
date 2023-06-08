import React from 'react'
import {Vec5} from '../../assets/vectors'
import './card.css'
const Card = (props) => {
  return (
    <div className="card__wrapper">
        <img src={props.img} alt="image" />
        <h3>{props.title}</h3>
        
        <p>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
        <button>TRY IT NOW</button>
    </div>
  )
}

export default Card