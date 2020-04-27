import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

// withRouter supercharges the component to have react-router-dom properties
// NavLink for active or not
const Navbar = (props) => {
  setTimeout(() => {
    props.history.push('/about')
  }, 2000);
  return (
    <nav className="nav-wrappeer red darken-3">
      <div className="container">
        <a className="brand-logo">Poke Times</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Contact">contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);
