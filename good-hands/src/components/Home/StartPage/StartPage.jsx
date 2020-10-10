import React, { Component } from "react";
import "./_startPage.scss";
import Navigation from "../../Navigation/Navigation";
import DecorationBar from "../../DecorationBar/DecorationBar";
import Button from "../../Button/Button";

export default class StartPage extends Component {
  render() {
    return (
      <section id="start-page-container col-lg-12">
        <div className="navigation col-lg-12">
          <Navigation />
        </div>
        <div className="content col-lg-12">
          <div className="box"></div>
          <div className="box right">
            <DecorationBar
              text="Zacznij pomagać"
              text2="Oddaj niechciane rzeczy w zaufane ręce"
              class="start-title"
            />
            <div className='start-buttons'>
              <Button text="Oddaj rzeczy" />
              <Button text="Zorganizuj zbiórkę" />
            </div>
          </div>
        </div>
        <div className="start-background col-lg-12"></div>
      </section>
    );
  }
}
