import React from 'react';
import './navbar.css';
import myphoto from '../../images/mine.jpg';
import { FiMail, FiPhone } from 'react-icons/fi';
import {HiOutlineBars3} from 'react-icons/hi2';
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'



function Navbar({menuoption,setmenufunction}) {
 
  const myfunc = () => {
    const element = document.getElementById('photomodal');
    element.classList.add("show");
  };

 

  return (
    <div className={"navbar " + (menuoption && "active")} >
      <div className="left">
        <div className="name">
          <img src={myphoto} className='myimage' alt="profilepic" onClick={myfunc} />
          <div className="contactdetails">
            <a href="#intro">Kashish</a>
            <span>
            <span className='number'><FiPhone size={12} /> 9289236902 &nbsp;&nbsp;| </span>
            <span><FiMail size={12} /> kashishkashish9560@gmail.com </span>
            </span>
          </div>

        </div>


      </div>
      <div className="right">
        <HiOutlineBars3  size={40} onClick={()=>{setmenufunction(!menuoption)}} />

      </div>

    </div>
  )
}

export default Navbar