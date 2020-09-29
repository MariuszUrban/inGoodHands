import React, { useState, useEffect } from "react";
import {foundations, ngo, local } from '../../services/statsService'
import Decoration from "../../assets/Decoration.svg";


 


import React, { Component } from 'react'

export default class WhoWeHelp extends Component {
  render() {
    return (
      <div name='who-we-help' className='who-we-help-container col-lg-12'>
      <div>
        <h1>Komu pomagamy?</h1>
        <img src={Decoration} alt="decoration" />
      </div>
      <div>
        <button>
          <span>Fundacjom</span>
        </button>
        <button>
          <span>Organizacjom pozarządowym</span>
        </button>
        <button>
          <span>Lokalnym zbiórkom</span>
        </button>
      </div>
      <div>
        <p>
          opisy rodzajów działalności 
        </p>
      </div>
      <div className='helpers-list'>
              conditional rendering
      </div>
    </div>
    )
  }
}

