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
          <p className='subTitle'>I am <i>Nouran Mahmoud</i> , graduated from the Faculty of Science, Alexandria University, Computer Science Department.
            I am Frontend Developer with proficient knowledge in HTML , CSS and Javascript , as well as third-party libraries such as jQuery, and React js
           <span>
           <a target='_blank' href="https://drive.google.com/file/d/1tDhMU6kdPLnUuhcLKIU0MEUE6kC-QhlC/view?usp=sharing">view my cv</a>
           </span>
           </p>
           
          <div className="AllIcons flex">
            <div>
              <a className="icon icon-instagram" target='_blank' href="https://www.instagram.com/nouran.kaamal/"></a>
            </div>
            <div>
            <a className="icon icon-twitter" target='_blank' href="https://x.com/Nourankaamal/"></a>
            </div>
            <div>
            <a className="icon icon-github" target='_blank' href="https://github.com/NouranKamal"></a>
            </div>
            <div>
            <a className="icon icon-linkedin" target='_blank' href="https://www.linkedin.com/in/nouran-kamal-b0bb53263/"></a>
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
