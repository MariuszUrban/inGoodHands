import React, { Component } from "react";
import DecorationBar from '../DecorationBar/DecorationBar';
import Navigation from '../Navigation/Navigation'


export default class Logout extends Component {
  render() {
    const text = " Wylogowanie nastąpiło pomyślnie" 
    return (
      <section id="logout">
      <div>
      <Navigation />
      </div>
       <div>
       <DecorationBar text={text} />
        <button>elo</button>
       </div>
      </section>
    );
  }
}
