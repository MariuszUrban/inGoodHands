import React from "react";
import './_threeColumns.scss';


export default function ThreeColumns() {
  return (
    <div className="three-columns-container col-lg-12">
      <div className="column col-lg-4">
        <div className="content-box">
          <h1> liczba </h1>
          <h2>ODDANYCH WORKÓW</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur velit dolores, officiis illum necessitatibus provident.{" "}
          </p>
        </div>
      </div>
      <div className="column col-lg-4">
        <div className="content-box">
          <h1> liczba </h1>
          <h2>WSPARTYCH ORGANIZACJI</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur velit dolores, officiis illum necessitatibus provident.{" "}
          </p>
        </div>
      </div>
      <div className="column col-lg-4">
        <div className="content-box">
          <h1> liczba </h1>
          <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur velit dolores, officiis illum necessitatibus provident.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
