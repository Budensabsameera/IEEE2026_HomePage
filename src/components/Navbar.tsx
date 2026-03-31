import { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/svcelogo2.jpg";
import logo2 from "../assets/ieeelogo.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 shadow-lg text-white px-4 py-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="bg-transparent flex flex-row items-center gap-2 sm:gap-3">
          <img src={logo1} alt="SVC Logo" className="bg-transparent h-6 w-auto sm:h-9" />
          <img src={logo2} alt="IEEE Logo" className="bg-transparent h-6 w-auto sm:h-9" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12">
          <li><Link to="/" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2">Home</Link></li>
          <li><Link to="/about" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2">About</Link></li>
          <li><Link to="/execom" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2">Execom</Link></li>
          <li><Link to="/events" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2">Events</Link></li>
          <li><Link to="/achievements" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2">Achievements</Link></li>
          <li><Link to="/magazine" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2">Magazine</Link></li>
          <li><Link to="/contact" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - FIXED PATHS */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 px-2 pb-4">
          <li><Link to="/home" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/execom" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2" onClick={() => setIsOpen(false)}>Execom</Link></li>
          <li><Link to="/events" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2" onClick={() => setIsOpen(false)}>Events</Link></li>
          <li><Link to="/achievements" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2" onClick={() => setIsOpen(false)}>Achievements</Link></li>
          <li><Link to="/magazine" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2" onClick={() => setIsOpen(false)}>Magazine</Link></li>
          <li><Link to="/contact" className="hover:text-cyan-100 hover:scale-90 cursor-pointer block py-2" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
