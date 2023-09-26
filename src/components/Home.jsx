import React, { useState } from 'react'
import './home.css'
import Navbar from './navbar/Navbar'
import Intro from './intro/Intro'
import Contact from './contact/Contact'
import Skill from './skills/Skill'
import Project from './projects/Project'
import Resume from './resume/Resume'
import PhotoModal from './modals/PhotoModal'
import Menu from './menu/Menu'

function Home() {
const [menuoption, setmenufunction] = useState(false);

  return (
    <div className='home'>
      <Navbar  menuoption={menuoption} setmenufunction={setmenufunction} />
      <div className="sections">
        <Intro/>
        <Skill/>
        <Project/>
        <Resume/>
        <Contact/>
        <PhotoModal/>
        <Menu  menuoption={menuoption} setmenufunction={setmenufunction} />
      </div>
    </div>
  )
}

export default Home