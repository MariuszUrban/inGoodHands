import React from "react";
import "./_registrationForm.scss";

export default function RegistrationForm() {
  return (
    <div className="registration-form-container">
      <form>
        <div className="registration-inputs">
          <label htmlFor="">E-Mail</label>
          <input type="text" />
          <label htmlFor="">Hasło</label>
          <input type="text" />
          <label htmlFor="">Powtórz hasło</label>
          <input type="text" />
        </div>
        <div className="registration-buttons">
          <button>
            <span>Zaloguj się</span>
          </button>
          <button>
            <span>Załóż konto</span>
          </button>
        </div>
      </form>
    </div>
  );
}
