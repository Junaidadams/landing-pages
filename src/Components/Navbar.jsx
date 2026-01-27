import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ styling }) => {
  return (
    <nav className="absolute top-2 z-20">
      <ul
        className={`flex flex-row space-x-2 sm:space-x-6 text-sm sm:text-xl md:text-2xl font-sans tracking-wide ${styling}`}
      >
        <li className="">
          <a href="#telma">Telma</a>
        </li>
        <li className="">
          <a href="#alpino">Alpino</a>
        </li>
        {/* <li className="">
          <a href="/">Contact</a>
        </li>
        <li className="">
          <a href="/">Services</a>
        </li> */}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  styling: PropTypes.string,
};

export default Navbar;
