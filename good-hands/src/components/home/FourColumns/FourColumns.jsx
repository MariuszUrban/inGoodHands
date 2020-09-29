import React from "react";

import './FourColumns.scss';
import Icon1 from "./assets/Icon-1.svg";
import Icon2 from "./assets/Icon-2.svg";
import Icon3 from "./assets/Icon-3.svg";
import Icon4 from "./assets/Icon-4.svg";

export default function FourColumns() {
  return (
    <div name='info' className="four-columns-container col-lg-12">
      <div className="four-column-box">
        <div className="column-thin col-lg-2">
          <div className="column-thin-box">
            <img src={Icon1} alt="" />
            <h1>Wybierz rzeczy</h1>
            <span className='underline'></span>
            <p>ubrania, zabawki, sprzęt i inne</p>
          </div>
        </div>
        <div className="column-thin col-lg-2">
          <div className="column-thin-box">
            <img src={Icon2} alt="" />
            <h1>Spakuj je</h1>
            <span className='underline'></span>
            <p>skorzystaj z worków na śmieci</p>
          </div>
        </div>
        <div className="column-thin col-lg-2">
          <div className="column-thin-box">
            <img src={Icon3} alt="" />
            <h1>Zdecyduj komu chcesz pomóc</h1>
            <span className='underline'></span>
            <p>wybierz zaufane miejsce</p>
          </div>
        </div>
        <div className="column-thin col-lg-2">
          <div className="column-thin-box">
            <img src={Icon4} alt="" />
            <h1>Zamów kuriera</h1>
            <span className='underline'></span>
            <p>kurier przyjdzie w dogodnym terminie</p>
          </div>
        </div>
      </div>
    </div>
  );
}
