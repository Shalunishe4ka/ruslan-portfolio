import React from 'react'

import MainContentLetterWhoIAm_w from "./assets/W_08.png"
import MainContentLetterWhoIAm_h from "./assets/H_14.png"
import MainContentLetterWhoIAm_o from "./assets/O_06.png"
import MainContentLetterWhoIAm_i from "./assets/I_16.png"
import MainContentLetterWhoIAm_a from "./assets/A_12.png"
import MainContentLetterWhoIAm_m from "./assets/M_16.png"
import { AboutMe } from './AboutMe/AboutMe'


export const WhoIAm = () => {
  return (
    <div className='whoIAm-container'>
      <div className='phrases-container whoIAm-item'>
      <div id='phrase-who'>
        <img src={MainContentLetterWhoIAm_w} id='letter_w' alt='letter_w' width={168} height={124} />
        <img src={MainContentLetterWhoIAm_h} id='letter_h' alt='letter_h' width={102} height={124} />
        <img src={MainContentLetterWhoIAm_o} id='letter_o' alt='letter_o' width={89} height={124} />
      </div>
      <img src={MainContentLetterWhoIAm_i} id='letter_i' alt='letter_i' width={102} height={190} />
      <div id='phrase-am'>
        <img src={MainContentLetterWhoIAm_a} id='letter_a' alt='letter_a' width={119} height={124} />
        <img src={MainContentLetterWhoIAm_m} id='letter_m' alt='letter_m' width={134} height={125} />
      </div>
      </div>
      <AboutMe />
    </div>
  )
}
