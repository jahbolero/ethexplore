import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/Blockchain" className="nav-link">
              Block & Transactions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Address" className="nav-link">
              Address
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    // <nav className="navbar navbar-dark bg-dark">
    //   <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    //     <li className="nav-item">

    //       |
    //     </li>
    //     <li className="nav-item">

    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Header;
