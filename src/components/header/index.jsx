import React, { useState, useEffect } from "react";
import "./index.css";
// const initialState = {
//   isOpen: false,
// };
function Header() {
  //creating class
  // const [state, setstate] = useState(initialState);
  useEffect(() => {
    window.addEventListener("scroll", (event) => onscrollhandle(event));

    return () => {
      window.removeEventListener("scroll", () => onscrollhandle);
    };
  }, []);
  const onscrollhandle = (event) => {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
    if (currentScroll > 0) {
      document
        .getElementsByClassName("header")[0]
        .classList.add("header-scroll");
      console.log("scroll Down");
    } else {
      document
        .getElementsByClassName("header")[0]
        .classList.remove("header-scroll");
      console.log("scroll UP");
    }
  };
  // creating render function
  return (
    //return one view
    <div>
      <header className="header w-100">
        <nav className="navbar navbar-expand-lg pt-4 px-0 header-v1">
          <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portoflio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header; //we can retun this line no 3 also  export default class Header extends React.Component() {}
