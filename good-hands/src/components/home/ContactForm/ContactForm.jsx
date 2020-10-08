import React, { Component } from "react";

import "./_contactForm.scss";
import Background from "./assets/Background-Contact-Form.jpg";
import MailForm from './MailForm';
import BarDeco from './BarDeco';
import Footer from './Footer'

export default class ContactForm extends Component {
  render() {
    return (
        <>
        <div className="background col-lg-12">
          <img src={Background} alt="backgorund" />
        </div>
        <div className="contact-form-container col-lg-12">
        <div className="contact-form-left col-lg-6"></div>
        <div className="contact-form-right col-lg-6">
            <BarDeco />
            <MailForm />
        </div>
      </div>
      <div className="footer col-lg-12">
            <Footer />
      </div>
      </>
    );
  }
}
