import React from "react";
import "./_mailForm.scss";

export default function MailForm() {
  return (
    <div className="mail-form-container">
      <div className='inputs-wrapper'>
        <div className="mail-form-input">
          <label>Wpisz swoje imię</label>
          <input />
        </div>
        <div  className="mail-form-input">
          <label>Wpisz swój e-mail</label>
          <input />
        </div>
      </div>
      <div  className="mail-form-text">
        <label>Wpisz wiadomość</label>
        <textarea></textarea>
      </div>
      <div><button><span>Wyślij</span></button></div>
    </div>
  );
}
