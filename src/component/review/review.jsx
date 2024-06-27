import React from 'react'
import "./review.css"
import { FaStar } from "react-icons/fa";
import Image4 from "../../assets/image4.jpg"
import Image5 from "../../assets/image5.jpg"
import Image6 from "../../assets/image6.jpg"


export default function review() {
  return (
    <div className='review section container'>
      <div className='secContainer grid'>
        <div className='textDiv'>
        <span className='redText'>FORM OUR CODER</span>
      <h3>Real Coder History From Our Beloved Coder</h3>
      <p>
        Choosing our coding platform means embracing a journey of endless possibilities and continuous growth. Our platform is more than just a tool for writing code; it's a gateway to an enriching and enjoyable experience that transcends the boundaries of traditional programming.
      </p>
      <div className='stars flex'>
        <FaStar className='icon'/>
        <FaStar className='icon'/>
        <FaStar className='icon'/>
        <FaStar className='icon'/>
        <FaStar className='icon'/>
        </div>
        <div className='coderimage flex'>
    <img src={Image4}alt='image4'></img>
    <img src={Image5}alt='image5'></img>
        </div>
      </div>
      <div className='imgDiv'>
        <img src={Image6}alt='Div image'></img>
      </div>

      </div>
    </div>
  )
}
