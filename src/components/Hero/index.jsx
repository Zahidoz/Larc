import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Nav from '../Nav'
import './style.scss'
const Hero = () => {

  const hero = useRef()
  
  useEffect(()=>{
     const x = setInterval(() => {
       hero.current.classList.toggle("changeImg");
     }, 10000);
     return ()=>{
      clearInterval(x)
     }
  },[])

  return (
    <div ref={hero} className="hero">
      <Nav theme={"light"} />
        <div className="hero-txt">
          <h1>Fall & Winter Coat Collection</h1>
          <p>
            The lastest collection from the British brands. <br /> Pre-order now
            and get your order in December
          </p>
          <button id="bg-dark">Show More -> </button>
        </div>
    </div>
  );
}

export default Hero