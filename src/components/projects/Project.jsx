import React from 'react';
import './project.css';

function Project() {
  return (
    <div className='project' id='project' >
      <h2>Project</h2>
      <div className="projectslider">
        <img className='leftarrow' src="./photos/downarrow.png" alt="" />
        <div className="projectcontainer">
          <img className='projectimg' src="./photos/project1.jpeg" alt="" />
          <img className='projectimg' src="./photos/project2.jpeg" alt="" />
        </div>
        <img className='rightarrow' src="./photos/downarrow.png" alt="" />
      </div>

    </div>
  )
}

export default Project