import DecorationBar from '../DecorationBar/DecorationBar';
import Button from '../Button/Button'

import React, { Component } from 'react'

export default class ButtonsContainer extends Component {
  render() {

    return (
      <div>
        <DecorationBar text="Zacznij pomagać" text2="Oddaj niechciane rzeczy w zaufane ręce" />
        <Button text="Oddaj rzeczy" />
        <Button text="Zorganizuj zbiórkę" />
      </div>
    )
  }
}



  
   
 
