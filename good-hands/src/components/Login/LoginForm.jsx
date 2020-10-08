import React from "react";
import "./_loginForm.scss";

export default function LoginForm() {
  return (
    <div className="login-form-container">
      <form>
        <div className="login-inputs">
          <label htmlFor="">E-Mail</label>
          <input type="text" />
          <label htmlFor="">Hasło</label>
          <input type="text" />
        </div>
        <div className="login-buttons">
          <button>
            <span>Zaloguj</span>
          </button>
          <button>
            <span>Zarejestruj się</span>
          </button>
        </div>
      </form>
    </div>
  );
}
