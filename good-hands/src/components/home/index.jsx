import React from "react";
import LoginNav from "./LoginNav";
import MenuNav from "./MenuNav";
import PhotoContainer from "./PhotoContainer";
import ButtonsContainer from "./ButtonsContainer";
import ThreeColumns from './ThreeColumns'
import "../../scss/components/_home.scss";

export default function Home() {
  return (
    <main>
      <section id="home-page">
        <div className="home-container col-lg-12">
          <div className="box col-lg-6">
            <PhotoContainer />
          </div>
          <div className="box col-lg-6">
            <div className="nav-row">
              <LoginNav />
              <MenuNav />
            </div>
            <div className="buttons-row">
              <ButtonsContainer />
            </div>
          </div>
        </div>
      </section>
      <section id='info-columns'>
        <ThreeColumns />
      </section>
    </main>
  );
}
