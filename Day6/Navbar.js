import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Navbar.css'; // Import your CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Grocery Shop</Link> {/* Link to your homepage */}
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link> {/* Link to the homepage */}
        </li>
        <li>
          <Link to="/">Login</Link> {/* Link to the homepage */}
        </li>
        <li>
          <Link to="/products">Products</Link> {/* Link to the products page */}
        </li>
        <li>
          <Link to="/cart">Cart</Link> {/* Link to the cart page */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Link to the contact page */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
