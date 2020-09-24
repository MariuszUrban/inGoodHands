import React from "react";
import Decoration from '../../assets/Decoration.svg'

export default function ButtonsContainer() {
  return (
    <div>
      <div>
        <h1>Zacznij pomagać!</h1>
        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
        <img src={Decoration} alt='decoration' />
      </div>
      <div>
        <button>
          <span>Oddaj rzeczy</span>
        </button>
        <button>
          <span>Zorganizuj zbiórkę</span>
        </button>
      </div>
    </div>
  );
}
