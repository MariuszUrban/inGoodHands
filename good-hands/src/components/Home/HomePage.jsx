import React from 'react';
import PhotoContainer from './PhotoContainer';
import LoginNav from './LoginNav';
import MenuNav from './MenuNav';
import ButtonsContainer from './ButtonsContainer';
import '../../scss/components/_homePage.scss';


export default function Home() {
    return (
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
    )
}
