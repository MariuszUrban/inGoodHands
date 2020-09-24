import {
  Link,
  animateScroll as scroll
} from "react-scroll";
import React, { Component } from "react";

export default class MenuNav extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        console.log('props', this.props)
    }
    
    

    scrollTo = () => {
        scroll.scrollTo()
    }

  render() {
    return (
      <div className="nav-container">
        <nav>
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
            duration={500}>
                <span>O co chodzi?</span>
              </Link>
              </button>
            </li>
            <li>
              <button>
                <span>O nas</span>
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
      </div>
    );
  }
}
