import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/svce-logo.png";
import logo2 from "../assets/ieeelogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Execom", path: "/execom" },
  { name: "Events", path: "/events" },
  { name: "Achievements", path: "/achievements" },
  { name: "Magazine", path: "/magazine" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 px-4 py-4 text-white shadow-lg backdrop-blur sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3"
          onClick={() => setIsOpen(false)}
        >
          <img src={logo1} alt="SVC Logo" className="h-6 w-auto sm:h-9" />
          <img src={logo2} alt="IEEE Logo" className="h-6 w-auto sm:h-9" />
        </Link>

        <ul className="hidden items-center gap-6 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="group relative block py-2 text-sm transition duration-200 hover:text-cyan-100"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-8 w-6 text-white transition-colors hover:text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-4 max-w-7xl border-t border-blue-800/80 pt-4 md:hidden">
          <ul className="space-y-2 px-2 pb-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block rounded-lg px-3 py-3 text-white transition-all duration-200 hover:bg-blue-900/50 hover:text-cyan-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
