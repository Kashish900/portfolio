import React from 'react';
import './resume.css';

function Resume() {
  return (
    <div  className='resume' id='resume' >
      <div className="leftresume">
        <img src="./photos/resumeimage.jpg" alt="" />
      </div>
      <div className="rightresume">
        <div className="download">
          <h2>Download Resume</h2>
          <a href='./photos/resume.pdf' target='blank'>Download</a>
        </div>
        
      </div>
    </div>
  )
}

export default Resume