import React, { Component } from "react";
import './index.css';

class Header extends Component {
  //creating class
  render() {
    // creating render function
    return (                     //return one view
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col">
                <nav className="navbar navbar-expand-lg position-fixed pt-4 px-0">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Portoflio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header;              //we can retun this line no 3 also  export default class Header extends React.Component() {}