import React from 'react'
import SkillsLetter_s1 from "./assets/S_06.png"
import SkillsLetter_k from "./assets/K_15.png"
import SkillsLetter_i from "./assets/I_07.png"
import SkillsLetter_l1 from "./assets/L_18.png"
import SkillsLetter_l2 from "./assets/L_02.png"
import SkillsLetter_s2 from "./assets/S_36.png"
import { SkillsCards } from './SkillsCards'


export const Skills = () => {
    return (
        <div className='skills-content-container'>
            <div className='skills-letters-container'>
                <img src={SkillsLetter_s1} alt='SkillsLetter_s1' width={153} height={135} />
                <img src={SkillsLetter_k} alt='SkillsLetter_k' width={123} height={138} />
                <img src={SkillsLetter_i} alt='SkillsLetter_i' width={99} height={135} />
                <img src={SkillsLetter_l1} alt='SkillsLetter_l1' width={91} height={136} />
                <img src={SkillsLetter_l2} alt='SkillsLetter_l2' width={89} height={138} />
                <img src={SkillsLetter_s2} alt='SkillsLetter_s2' width={121} height={138} />
            </div>
            <SkillsCards />
        </div>
    )
}
