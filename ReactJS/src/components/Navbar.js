import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  render(){
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Employee Search</a>
            <ul className="side-nav" id="main-menu">
            <li><Link to="/">Search</Link></li>  
            <li><Link to="/add">Add</Link></li>  
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
