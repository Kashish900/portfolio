import React from 'react'
import './menu.css';

function Menu({menuoption,setmenufunction}) {
  return (
    <div  className={"menu " + (menuoption && "active")}>
        <ul>
            <li onClick={()=>{setmenufunction(false)}}><a  href='#intro'>Home</a></li>
            <li onClick={()=>{setmenufunction(false)}}><a  href='#skill'>Skill</a></li>
            <li onClick={()=>{setmenufunction(false)}}><a  href='#project'>Project</a></li>
            <li onClick={()=>{setmenufunction(false)}}><a  href='#resume'>Resume</a></li>
            <li onClick={()=>{setmenufunction(false)}}><a  href='#contact'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Menu