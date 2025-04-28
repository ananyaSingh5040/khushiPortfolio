import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Name */}
        <div className="text-2xl font-bold tracking-wider" >KHUSHI PATEL</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 font-medium">
          <li><a href="/" className="hover:text-blue-800 transition">About Me</a></li>
          <li><a href="/resume" className="hover:text-blue-800 transition">Resume</a></li>
          <li><a href="/projects" className="hover:text-blue-800 transition">Projects</a></li>
          <li><a href="/certifications" className="hover:text-blue-800 transition">Certifications</a></li>

          {/* Dropdown Menu */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1 hover:text-blue-800 transition"
            >
              <span>More</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {dropdownOpen && (
              <ul className="absolute top-10 right-0 bg-black text-white rounded-md shadow-lg w-40 py-2">
                <li className="px-4 py-2 hover:bg-blue-900">
                  <a href="/skills">Skills</a>
                </li>
                <li className="px-4 py-2 hover:bg-blue-900">
                  <a href="/achievements">Achievements</a>
                </li>
                <li className="px-4 py-2 hover:bg-blue-900">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
