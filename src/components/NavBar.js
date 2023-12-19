import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "react-feather";

const Navbar = (props) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex">
            {/* Menu icon */}
            <button
              onClick={props.toggleMenu}
              className="outline-none focus:outline-none"
            >
              <Menu className="mx-6 h-6 w-6" />
            </button>
          </div>
          <Link to="/" className="text-xl font-bold">
            My App
          </Link>
        </div>

        <div>
          <Link to="/" className="mx-3">
            Home
          </Link>
          <Link to="/about" className="mx-3">
            About
          </Link>
          <Link to="/contact" className="mx-3">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
