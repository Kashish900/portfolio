import React from 'react';
import './photomodal.css';
import {FaXmark} from 'react-icons/fa6';

function PhotoModal() {
    const myfunc2 = () => {
        const element = document.getElementById('photomodal');
        element.classList.remove("show");
      };

  return (

    <div className='photo' id='photomodal'>
        <div className="top">
            <div className="heading">Profile Picture</div>
            <div className="closediv"  onClick={myfunc2}><FaXmark size={25}/></div>
        </div>
        <div className="mainimage">
            <img src="./photos/profilepic.png" alt="profilepic" />
        </div>
    </div>
  )
}

export default PhotoModal