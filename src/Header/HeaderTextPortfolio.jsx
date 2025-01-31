import React from "react";
import headerPortfolioLetterImage_p from "./assets/headerTextPortfolio/P_03.png";
import headerPortfolioLetterImage_o from "./assets/headerTextPortfolio/O_09.png";
import headerPortfolioLetterImage_r from "./assets/headerTextPortfolio/R_18.png";
import headerPortfolioLetterImage_t from "./assets/headerTextPortfolio/T_16.png";
import headerPortfolioLetterImage_f from "./assets/headerTextPortfolio/F_02.png";
import headerPortfolioLetterImage_o2 from "./assets/headerTextPortfolio/O_05.png";
import headerPortfolioLetterImage_l from "./assets/headerTextPortfolio/L_22.png";
import headerPortfolioLetterImage_i from "./assets/headerTextPortfolio/I_13.png";
import headerPortfolioLetterImage_o3 from "./assets/headerTextPortfolio/O_08.png";

export const HeaderText = () => {
  return (
      <div className="header-imgs-div">
        <img src={headerPortfolioLetterImage_p} alt="letter_p" width={165} height={175} />
        <img src={headerPortfolioLetterImage_o} alt="letter_o1" width={165} height={175} />
        <img src={headerPortfolioLetterImage_r} alt="letter_r" width={165} height={175} />
        <img src={headerPortfolioLetterImage_t} alt="letter_t" width={165} height={175} />
        <img src={headerPortfolioLetterImage_f} alt="letter_f" width={165} height={175} />
        <img src={headerPortfolioLetterImage_o2} alt="letter_o2" width={165} height={175} />
        <img src={headerPortfolioLetterImage_l} alt="letter_l" width={165} height={175} />
        <img src={headerPortfolioLetterImage_i} alt="letter_i" width={165} height={175} />
        <img src={headerPortfolioLetterImage_o3} alt="letter_o3" width={165} height={175} />
      </div>

  );
};
