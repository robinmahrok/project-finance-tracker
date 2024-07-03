
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
function Header(props) {


  return (<>
   <header className="header">
      <h1>{"Finance Tracker"}</h1>
      <nav>
      <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/addTransaction">Add Transaction</NavLink></li>
          <li><NavLink to="/categoryBreakdown">Category Breakdown</NavLink></li>
          <li><NavLink to="/summary">Summary</NavLink></li>
          <li><NavLink to="/transactionList">Transaction List</NavLink></li>
        </ul>
      </nav>
    </header>

  </>)
}

export default Header;
