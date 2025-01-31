import React from 'react'
import headerUXUILetterImage_u1 from "./assets/headerTextUXUI/U_17.png";
import headerUXUILetterImage_i from "./assets/headerTextUXUI/I_05.png";
import headerUXUILetterImage_slash from "./assets/headerTextUXUI/Slash_02.png";
import headerUXUILetterImage_u2 from "./assets/headerTextUXUI/U_03.png";
import headerUXUILetterImage_x from "./assets/headerTextUXUI/X_18.png";



export const HeaderTextUXUI = () => {
  return (
    <div>
        <img src={headerUXUILetterImage_u1} alt="letter_u1" width={165} height={175} />
        <img src={headerUXUILetterImage_x} alt="letter_x" width={165} height={175} />
        <img src={headerUXUILetterImage_slash} alt="letter_slash" width={165} height={175} />
        <img src={headerUXUILetterImage_u2} alt="letter_u2" width={165} height={175} />
        <img src={headerUXUILetterImage_i} alt="letter_i" width={165} height={175} />
    </div>
  )
}
