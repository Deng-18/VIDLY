import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'



class NavBar extends Component {
  render() {
    return (
    <div className="menu" >
      <ul className="main-menu" >
        <li>
          <Link className="mr-auto" to="/">
            VIDLY
          </Link>
        </li>
        <li>
          <NavLink to="/movies">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up">
            Sign Up
          </NavLink></li>
        <li>
          <NavLink to="/rentals">
            Rentals
          </NavLink>
        </li>
      </ul>
    </div>
    )
  }
}

export default NavBar;
