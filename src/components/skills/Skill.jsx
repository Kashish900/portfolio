import React from 'react'
import './skill.css';
import {AiFillStar, AiOutlineStar, AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di'
import {TbBrandJavascript, TbBrandMysql} from 'react-icons/tb'
import {FaBootstrap, FaJava, FaReact} from 'react-icons/fa6';
import { SiHibernate, SiSpring, SiSpringboot, SiJquery } from 'react-icons/si';
import {BiLogoPostgresql} from 'react-icons/bi'


function Skill() {
  return (
    <div  className='skill' id='skill' >
      <h1>Skills</h1>
      <div className="skillcontainer">
        <div className="leftskill">
          <ul>
            <li> <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>   <AiOutlineStar/></span >   <span className='logo'><AiFillHtml5/> </span> HTML </li>
            <li> <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiOutlineStar/>   <AiOutlineStar/></span>   <span className='logo'> <DiCss3/> </span> CSS</li>
            <li> <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiOutlineStar/>   <AiOutlineStar/></span>   <span className='logo'><TbBrandJavascript/></span>   JAVASCRIPT</li>
            <li> <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiOutlineStar/>   <AiOutlineStar/></span>   <span className='logo'><SiJquery/></span> JQUERY  </li>
            <li> <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>   <AiOutlineStar/></span>   <span className='logo'> <FaBootstrap/> </span> BOOTSTRAP </li>
            <li> <span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>   <AiOutlineStar/></span> <span className='logo'> <FaReact/> </span>REACT JS </li>
          </ul>
        </div>
        <div className="rightskill">
        <ul>
            <li><span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>   <AiOutlineStar/></span>  <span className='logo'> <FaJava /> </span>Core  Java </li>
            <li><span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>   <AiOutlineStar/></span> <span className='logo'><SiHibernate /> </span>  Hibernate  </li>
            <li><span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>   <AiOutlineStar/></span>  <span className='logo'><SiSpring/> </span> Spring </li>
            <li><span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>   <AiOutlineStar/></span> <span className='logo'><SiSpringboot/>  </span>  Spring Boot  </li>
            <li><span> <AiFillStar/> <AiFillStar/> <AiOutlineStar/> <AiOutlineStar/>   <AiOutlineStar/></span>   <span className='logo'> <BiLogoPostgresql /> </span> PostgreSQL</li>
            <li><span> <AiFillStar/> <AiFillStar/> <AiOutlineStar/> <AiOutlineStar/>   <AiOutlineStar/></span>   <span className='logo'><TbBrandMysql /> </span> MySql </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skill