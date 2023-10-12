import React from 'react';
import './navbar.css';
import { FiMail, FiPhone } from 'react-icons/fi';
import {HiOutlineBars3} from 'react-icons/hi2';
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
          <img src="./photos/profilepic.png" className='myimage' alt="profilepic" onClick={myfunc} />
          <div className="contactdetails">
            <a href="#intro">Kashish</a>
            <span>
            <span className='number'><FiPhone size={12} /> 9289236902 &nbsp;&nbsp;| </span>
            <span><FiMail size={12} /> kashishkashish9560@gmail.com </span>
            </span>
          </div>

        </div>


      </div>
      <div className="right"onClick={()=>{setmenufunction(!menuoption)}}>
         {menuoption ? <AiOutlineClose  size={40} /> : <HiOutlineBars3  size={40}/>}

      </div>

    </div>
  )
}

export default Navbar