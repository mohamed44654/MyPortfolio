import React from 'react';
import Link from 'react';
import './hero.css';
import Lottie from "lottie-react";
import heroAnimation from '../../../public/animation/hero.json';

export default function Hero() {
  return (
    <section className='hero flex'> 
      <div className="left-section">
        <div className="parent-avatar flex">
          <img className='avatar' src="./avatar.png" alt="" />
          <div className='icon-verified'></div>
          </div>
          <h1 className='title'>FRONT-END DEVELOPER</h1>
          <p className='subTitle'>I am <i>Mohamed Khaled</i> , Graduated from the Information Systems Department, CIC (Canadian International College).
            I am Frontend Developer with proficient knowledge in HTML , CSS and Javascript , as well as third-party libraries such as jQuery, and Angular
           <span>
           <a target='_blank' href="https://drive.google.com/file/d/1tDhMU6kdPLnUuhcLKIU0MEUE6kC-QhlC/view?usp=sharing">view my cv</a>
           </span>
           </p>
           
          <div className="AllIcons flex">
            <div>
            <a className="icon icon-github" target='_blank' href="https://github.com/mohamed44654"></a>
            </div>
            <div>
            <a className="icon icon-linkedin" target='_blank' href="https://www.linkedin.com/in/mohamed-khaled-96b006267"></a>
            </div>
          </div>

      </div>
      <div className="right-section animation">
      <Lottie 
          loop={true}
          style={{height:600}}
          animationData={heroAnimation}
          />
      </div>
      </section>
  )
}
