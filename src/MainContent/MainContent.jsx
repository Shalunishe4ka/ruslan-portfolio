import React from 'react'
import { WhoIAm } from './Components/WhoIAm/WhoIAm'
import { AboutMe } from './Components/WhoIAm/AboutMe/AboutMe'
import { Education } from './Components/Education/Education'
import { Skills } from './Components/Skills/Skills'
import { Contacts } from './Components/Contacts/Contacts'
import { Works } from './Components/Works/Works'
import "./MainContent.css"

export const MainContent = () => {
  return (
    <div className='MainContent'>
      <div>
        <WhoIAm />
        <Education />
        <Skills />
        <Contacts />
        <Works />
      </div>
    </div>
  )
}
