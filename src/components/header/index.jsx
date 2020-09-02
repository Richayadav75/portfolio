import React, { Component } from "react";
import './index.css';

class Header extends Component {
  //creating class
  render() {
    // creating render function
    return (                     //return one view
      <div>
        <header>
          <div class="container">
            <div class="row">
              <div class="col">
                <nav class="navbar navbar-expand-lg position-fixed pt-4 px-0">
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Portoflio</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
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