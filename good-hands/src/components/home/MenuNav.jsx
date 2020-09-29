import { Link, animateScroll as scroll } from "react-scroll";
import React, { Component } from "react";
import '../../scss/components/_menuNav.scss';

export default class MenuNav extends Component {
  render() {
    return (
        <nav className="nav-container">
          <ul className="nav-list btn-menu">
            <li>
              <button>
                <span>Start</span>
              </button>
            </li>
            <li>
              <button>
                <Link
                  activeClass="active"
                  to="info"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  <span>O co chodzi?</span>
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                <span>O nas</span>
                </Link>
              </button>
            </li>
            <li>
              <button>
                <span>Fundacje i organizacje</span>
              </button>
            </li>
            <li>
              <button>
                <span>Kontakt</span>
              </button>
            </li>
          </ul>
        </nav>
    );
  }
}
