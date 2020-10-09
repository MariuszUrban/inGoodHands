import React, { Component } from "react";
import DecorationBar from '../DecorationBar/DecorationBar';
import LoginNav from '../Home/LoginNav';
import MenuNav from '../Home/MenuNav';


export default class Logout extends Component {
  render() {
    const text = " Wylogowanie nastąpiło pomyślnie" 
    return (
      <section id="logout">
      <div>
      <LoginNav />
        <MenuNav />
      </div>
       <div>
       <DecorationBar text={text} />
        <button>elo</button>
       </div>
      </section>
    );
  }
}
