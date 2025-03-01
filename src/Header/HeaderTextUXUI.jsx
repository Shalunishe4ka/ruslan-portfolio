import React from 'react'
import headerUXUILetterImage_u1 from "./assets/headerTextUXUI/U_17.png";
import headerUXUILetterImage_i from "./assets/headerTextUXUI/I_05.png";
import headerUXUILetterImage_slash from "./assets/headerTextUXUI/Slash_02.png";
import headerUXUILetterImage_u2 from "./assets/headerTextUXUI/U_03.png";
import headerUXUILetterImage_x from "./assets/headerTextUXUI/X_18.png";



export const HeaderTextUXUI = () => {
  return (
    <div className='header-text-uxui-container'>
        <img src={headerUXUILetterImage_u1} id="letter_u1" alt="letter_u1" width={109} height={105} />
        <img src={headerUXUILetterImage_x} id="letter_x" alt="letter_x" width={154} height={105} />
        <img src={headerUXUILetterImage_slash} id="letter_slash" alt="letter_slash" width={108} height={89} />
        <img src={headerUXUILetterImage_u2} id="letter_u2" alt="letter_u2" width={139} height={113} />
        <img src={headerUXUILetterImage_i} id="letter_i" alt="letter_i" width={33} height={111} />
    </div>
  )
}
