import React from "react";
import './_aboutUs.scss';
import Signature from "./assets/Signature.svg";
import DecorationBar from '../../DecorationBar/DecorationBar'

export default function AboutUs() {
  return (
    <section id='about-us' >
    <div name='about ' className="about-container col-lg-12">
      <div className="about-box left col-lg-6">
        <div className="about-content">
          <DecorationBar text="O nas" class='about-us-deco' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            earum nobis pariatur quasi illum maiores sed, autem beatae quisquam
            placeat!
          </p>
        </div>
        <div className="sign">
          <img src={Signature} alt="signature" />
        </div>
      </div>

      <div className="about-box col-lg-6">
        <div className='about-photo'>
        </div>
      </div>
    </div>
    </section>
  );
}
