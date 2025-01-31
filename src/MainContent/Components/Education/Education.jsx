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
        <div>
            <div>
                <img src={EducationLetter_e} alt='EducationLetter_e' width={165} height={175} />
                <img src={EducationLetter_d} alt='EducationLetter_d' width={165} height={175} />
                <img src={EducationLetter_u} alt='EducationLetter_u' width={165} height={175} />
                <img src={EducationLetter_c} alt='EducationLetter_c' width={165} height={175} />
                <img src={EducationLetter_a} alt='EducationLetter_a' width={165} height={175} />
                <img src={EducationLetter_t} alt='EducationLetter_t' width={165} height={175} />
                <img src={EducationLetter_i} alt='EducationLetter_i' width={165} height={175} />
                <img src={EducationLetter_o} alt='EducationLetter_o' width={165} height={175} />
                <img src={EducationLetter_n} alt='EducationLetter_n' width={165} height={175} />
            </div>
            <EducationNumericList />
        </div>
    )
}
