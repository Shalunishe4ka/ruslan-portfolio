import React from 'react'
import WorksLetter_w from "./assets/W_21.png"
import WorksLetter_o from "./assets/O_24.png"
import WorksLetter_r from "./assets/R_25.png"
import WorksLetter_k from "./assets/K_12.png"
import WorksLetter_s from "./assets/S_15.png"
import { MyWorks } from './MyWorks'
import "./Works.css"

export const Works = () => {
    return (
        <div className='works-content-container'>
            <div className='works-letters-container'>
                <img src={WorksLetter_w} alt='WorksLetter_w' id='WorksLetter_w' width={160} height={158} />
                <img src={WorksLetter_o} alt='WorksLetter_o' id='WorksLetter_o' width={125} height={158} />
                <img src={WorksLetter_r} alt='WorksLetter_r' id='WorksLetter_r' width={169} height={163} />
                <img src={WorksLetter_k} alt='WorksLetter_k' id='WorksLetter_k' width={117} height={159} />
                <img src={WorksLetter_s} alt='WorksLetter_s' id='WorksLetter_s' width={101} height={163} />
            </div>
            <MyWorks />
        </div>
    )
}
