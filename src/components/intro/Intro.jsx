import React, { useEffect, useRef } from 'react';
import './intro.css';
import Typewriter from 'typewriter-effect/dist/core';


function Intro() {
  
  const textRef = useRef();
useEffect(()=>{
  new Typewriter(textRef.current, {
    strings: ['Java Developer', 'Web Designer','Java Full Stack Developer' ],
    autoStart: true,
    loop: true,
    delay: 75,
  });
}, []);

  return (
    <div  className='intro'  id='intro'>
      <div className="left">
        <div className="imgcontainer">
          <img src="./photos/profilepic.png" alt="profilepic" />
        </div>
      </div>
      <div className="right">
        <h2>Hi There, I'm</h2>
        <h1>Kashish</h1>
        <h3>And a <span  ref={textRef}></span></h3>
        <a href='#portfolio'><img src="./photos/downarrow.png" alt="" /></a>
      </div>
    </div>
  )
}

export default Intro