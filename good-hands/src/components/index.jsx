import React from "react";

import StartPage from './Home/StartPage/StartPage'
import ThreeColumns from './Home/ThreeColumns/ThreeColumns';
import BarDeco from './Home/BarDeco';
import FourColumns from './Home/FourColumns/FourColumns';
import BarButton from './Home/BarButton';
import AboutUs from './Home/AboutUs';
import WhoWeHelp from './Home/WhoWeHelpLibrary/WhoWeHelp';
import ContactForm from './Home/ContactForm/ContactForm';
import "../scss/components/_home.scss";

export default function Home() {
  return (
    <main >
      <StartPage />
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
