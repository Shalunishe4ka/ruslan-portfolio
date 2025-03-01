import React from 'react'
import ContactsLetter_c1 from "./assets/C_11.png"
import ContactsLetter_o from "./assets/O_14.png"
import ContactsLetter_n from "./assets/N_14.png"
import ContactsLetter_t1 from "./assets/T_14.png"
import ContactsLetter_a from "./assets/A_19.png"
import ContactsLetter_c2 from "./assets/C_19.png"
import ContactsLetter_t2 from "./assets/T_07.png"
import ContactsLetter_s from "./assets/S_15.png"
import { SocialIcons } from './SocialIcons'
import "./Contacts.css"


export const Contacts = () => {
    return (
        <div className='contacts-content-container'>
            <div className='contacts-letters-container'>
                <img src={ContactsLetter_c1} alt="ContactsLetter_c1" width={108} height={140} />
                <img src={ContactsLetter_o} alt="ContactsLetter_o" width={178} height={130} />
                <img src={ContactsLetter_n} alt="ContactsLetter_n" width={114} height={130} />
                <img src={ContactsLetter_t1} alt="ContactsLetter_t1" width={96} height={132} />
                <img src={ContactsLetter_a} alt="ContactsLetter_a" width={97} height={139} />
                <img src={ContactsLetter_c2} alt="ContactsLetter_c2" width={119} height={140} />
                <img src={ContactsLetter_t2} alt="ContactsLetter_t2" width={167} height={140} />
                <img src={ContactsLetter_s} alt="ContactsLetter_s" width={100} height={140} />
            </div>
            <SocialIcons />
        </div>
    )
}
