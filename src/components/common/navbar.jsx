import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'



class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light justify-content-center" >
        <Link className="navbar-brand mr-auto">Vidly</Link>
        <ul className="navbar-nav" >
          <NavLink className="nav-item nav-link" to="/" >
            Movies
          </NavLink>
          <NavLink  className="nav-item nav-link"  to="/customers"  >
          Customers
          </NavLink>
          <NavLink className="nav-item nav-link"  to="/rentals" >
            Rentals
          </NavLink>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
