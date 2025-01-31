import React from 'react'
import WorksLetter_w from "./assets/W_21.png"
import WorksLetter_o from "./assets/O_24.png"
import WorksLetter_r from "./assets/R_25.png"
import WorksLetter_k from "./assets/K_12.png"
import WorksLetter_s from "./assets/S_15.png"
import { MyWorks } from './MyWorks'


export const Works = () => {
    return (
        <div>
            <div>
                <img src={WorksLetter_w} alt='WorksLetter_w' width={165} height={175} />
                <img src={WorksLetter_o} alt='WorksLetter_o' width={165} height={175} />
                <img src={WorksLetter_r} alt='WorksLetter_r' width={165} height={175} />
                <img src={WorksLetter_k} alt='WorksLetter_k' width={165} height={175} />
                <img src={WorksLetter_s} alt='WorksLetter_s' width={165} height={175} />
            </div>
            <MyWorks />
        </div>
    )
}
