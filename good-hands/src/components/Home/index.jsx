import React from "react";
import HomePage from './HomePage'
import ThreeColumns from './ThreeColumns/ThreeColumns';
import BarDeco from './BarDeco';
import FourColumns from './FourColumns/FourColumns';
import BarButton from './BarButton';
import AboutUs from './AboutUs';
import WhoWeHelp from './WhoWeHelpLibrary/WhoWeHelp';
import ContactForm from './ContactForm/ContactForm'
import "../../scss/components/_home.scss";

export default function Home() {
  return (
    <main>
      <section id="home-page">
        <HomePage />
      </section>
      <section id='info-columns' >
        <ThreeColumns />
        <BarDeco />
        <FourColumns />
        <BarButton />
      </section>
      <section id='about'>
        <AboutUs />
      </section>
      <section id='who-we-help'>
        <WhoWeHelp />
      </section>
      <section  id='contact-form'>
        <ContactForm />
      </section>
    </main>
  );
}
