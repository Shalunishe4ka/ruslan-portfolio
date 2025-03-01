import React from 'react'
import EducationLetter_e from "./assets/E_07.png"
import EducationLetter_d from "./assets/D_21.png"
import EducationLetter_u from "./assets/U_02.png"
import EducationLetter_c from "./assets/C_27.png"
import EducationLetter_a from "./assets/A_29.png"
import EducationLetter_t from "./assets/T_18.png"
import EducationLetter_i from "./assets/I_17.png"
import EducationLetter_o from "./assets/O_03.png"
import EducationLetter_n from "./assets/N_22.png"
import { EducationNumericList } from './EducationNumericList'
import "./Education.css"

export const Education = () => {
    return (
        <div className='education-content-container'>
            <div className='education-letters-container'>
                <img src={EducationLetter_e} id='EducationLetter_e' alt='EducationLetter_e' width={134} height={123} />
                <img src={EducationLetter_d} id='EducationLetter_d' alt='EducationLetter_d' width={158} height={123} />
                <img src={EducationLetter_u} id='EducationLetter_u' alt='EducationLetter_u' width={140} height={123} />
                <img src={EducationLetter_c} id='EducationLetter_c' alt='EducationLetter_c' width={91} height={121} />
                <img src={EducationLetter_a} id='EducationLetter_a' alt='EducationLetter_a' width={141} height={123} />
                <img src={EducationLetter_t} id='EducationLetter_t' alt='EducationLetter_t' width={74} height={124} />
                <img src={EducationLetter_i} id='EducationLetter_i' alt='EducationLetter_i' width={41} height={121} />
                <img src={EducationLetter_o} id='EducationLetter_o' alt='EducationLetter_o' width={145} height={121} />
                <img src={EducationLetter_n} id='EducationLetter_n' alt='EducationLetter_n' width={112} height={127} />
            </div>
            <EducationNumericList />
        </div>
    )
}
