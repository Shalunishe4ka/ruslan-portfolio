import React from 'react'

import headerDesignerLetterImage_d from "./assets/headerTextDesigner/D_11.png";
import headerDesignerLetterImage_e1 from "./assets/headerTextDesigner/E_11.png";
import headerDesignerLetterImage_e2 from "./assets/headerTextDesigner/E_19.png";
import headerDesignerLetterImage_g from "./assets/headerTextDesigner/G_01.png";
import headerDesignerLetterImage_i from "./assets/headerTextDesigner/I_19.png";
import headerDesignerLetterImage_n from "./assets/headerTextDesigner/N_05.png";
import headerDesignerLetterImage_r from "./assets/headerTextDesigner/R_07.png";
import headerDesignerLetterImage_s from "./assets/headerTextDesigner/S_27.png";


export const HeaderTextDesigner = () => {
  return (
    <div className='header-text-designer-container'>
        <img src={headerDesignerLetterImage_d} id="letter_d" alt="letter_d" width={131} height={104} />
        <img src={headerDesignerLetterImage_e1} id="letter_e1" alt="letter_e1" width={124} height={104} />
        <img src={headerDesignerLetterImage_s} id="letter_s" alt="letter_s" width={80} height={116} />
        <img src={headerDesignerLetterImage_i} id="letter_i" alt="letter_i" width={89} height={116} />
        <img src={headerDesignerLetterImage_g} id="letter_g" alt="letter_g" width={54} height={111} />
        <img src={headerDesignerLetterImage_n} id="letter_n" alt="letter_n" width={109} height={119} />
        <img src={headerDesignerLetterImage_e2} id="letter_e2" alt="letter_e2" width={102} height={116} />
        <img src={headerDesignerLetterImage_r} id="letter_r" alt="letter_r" width={109} height={118} />
        
    </div>
  )
}
