import React from "react";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";
import People from "../../assets/People.jpg";

export default function AboutUs() {
  return (
    <div name='about ' className="about-container col-lg-12">
      <div className="about-box col-lg-6">
        <div className="about-content">
          <h1>O nas</h1>
          <img src={Decoration} alt="Decoration" />
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            earum nobis pariatur quasi illum maiores sed, autem beatae quisquam
            placeat!{" "}
          </p>
        </div>
        <div className="sign">
          <img src={Signature} alt="signature" />
        </div>
      </div>

      <div className="about-box col-lg-6">
        <div className='about-photo'>
          <img src={People} alt='people' />
        </div>
      </div>
    </div>
  );
}
