import React from "react";
import { NavLink as Link } from "react-router-dom";

export default function BarButton() {
  return (
    <Link exact to='/logowanie'>
      <div className="bar-deco col-lg-12">
        <button>
          <span>ODDAJ RZECZY</span>
        </button>
      </div>
    </Link>
  );
}
