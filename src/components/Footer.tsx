import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo1 from "../assets/svce-logo.png";
import logo2 from "../assets/ieeelogo.png";

type FooterProps = {
  svceLeft?: string;
  ieeeRight?: string;
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About IEEE", path: "/about" },
  { name: "Execom", path: "/execom" },
  { name: "Events", path: "/events" },
  { name: "Achievements", path: "/achievements" },
  { name: "Magazine", path: "/magazine" },
  { name: "Contact", path: "/contact" },
];

const advisors = [
  { role: "SB Counsellor", name: "Dr. N. Sudhakar Reddy", phone: "+91 8886644955" },
  { role: "SB Advisor", name: "Mr. Allabkash Shaik", phone: "+91 9700644100" },
  { role: "SB Chairperson", name: "M. Kavya Reddy", phone: "+91 9494605361" },
];

function Footer({ svceLeft = logo1, ieeeRight = logo2 }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 bg-gradient-to-t from-slate-950 via-slate-900 to-blue-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 text-center sm:text-left">
            <Link to="/" className="flex items-center justify-center gap-3 sm:justify-start">
              <img src={svceLeft} alt="SVCE" className="h-10 w-auto drop-shadow-lg" />
              <img src={ieeeRight} alt="IEEE" className="h-10 w-auto drop-shadow-lg" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Sri Venkateswara College of Engineering, Tirupati
              <br />
              <span className="font-semibold text-cyan-400">
                Education for a Better Society
              </span>
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="mb-5 text-lg font-bold tracking-wide text-white">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group block text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-6 text-center sm:text-left">
            <div>
              <h4 className="mb-4 text-lg font-bold tracking-wide text-white">
                Contact Info
              </h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>Karakambadi Road, Tirupati</p>
                <p>+91 8886644985</p>
                <p>ieee.svce@example.com</p>
              </div>
            </div>

            <div>
              <h5 className="mb-3 font-semibold text-white">Follow Us</h5>
              <div className="flex justify-center gap-3 sm:justify-start">
                {[
                  {
                    icon: <FaInstagram />,
                    href: "https://www.instagram.com/svcolleges",
                    label: "Instagram",
                  },
                  {
                    icon: <FaLinkedin />,
                    href: "https://www.linkedin.com/school/svcetirupati/",
                    label: "LinkedIn",
                  },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/60 text-cyan-400 transition-all duration-200 hover:scale-110 hover:bg-cyan-500/20 hover:text-white"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="mb-4 text-lg font-bold tracking-wide text-white">
              Advisory Team
            </h4>
            <div className="space-y-4 text-sm">
              {advisors.map((advisor) => (
                <div key={advisor.role}>
                  <p className="font-semibold text-cyan-400">{advisor.role}</p>
                  <p className="text-slate-400">{advisor.name}</p>
                  <p className="text-xs text-slate-500">{advisor.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-slate-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500">
            © 2026 IEEE SVCE. All rights reserved. Developed by the web team.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <a href="#" className="transition-colors hover:text-cyan-400">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-cyan-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
