import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoChevronBackOutline, IoSettingsOutline } from 'react-icons/io5';
import '../index.css';

function NavLink() {
  return (
    <div className="nav-container">
      <Link to="/">
        <IoChevronBackOutline className="backArrow" />
      </Link>
      <h3>Foot Championships</h3>
      <div className="nav-icons">
        <FaMicrophone />
        <IoSettingsOutline />
      </div>
    </div>
  );
}

export default NavLink;
