import React from "react";

import StartPage from './Home/StartPage/StartPage'
import About from './Home/About/About'
import AboutUs from './Home/AboutUs';
import WhoWeHelp from './Home/WhoWeHelpLibrary/WhoWeHelp';
import ContactForm from './Home/ContactForm/ContactForm';
import "../scss/components/_home.scss";

export default function Home() {
  return (
    <main >
      <StartPage />
      <About />
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
