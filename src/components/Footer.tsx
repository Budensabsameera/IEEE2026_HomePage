import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import logo1 from "../assets/svce-logo.png";
import logo2 from "../assets/ieeelogo.png";

interface FooterProps {
  svceLeft?: string;
  sunRight?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  svceLeft = logo1, 
  sunRight = logo2
}) => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About IEEE', path: '/about' },
    { name: 'Execom', path: '/execom' },
    { name: 'Events', path: '/events' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Magazine', path: '/magazine' },
    { name: 'Contact', path: '/contact' }
  ];

  const advisors = [
    { role: 'SB Counsellor', name: 'Dr. N. Sudhakar Reddy', phone: '+91 8886644955' },
    { role: 'SB Advisor', name: 'Mr. Allabkash Shaik', phone: '+91 9700644100' },
    { role: 'SB Chairperson', name: 'M. Kavya Reddy', phone: '+91 9494605361' }
  ];

  return (
    <footer className="bg-gradient-to-t from-slate-950 via-slate-900 to-blue-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Branding */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={svceLeft} alt="SVCE" className="h-12 w-auto drop-shadow-lg" />
              <img src={sunRight} alt="IEEE" className="h-12 w-auto drop-shadow-lg" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sri Venkateswara College of Engineering, Tirupati
              <br />
              <span className="text-cyan-400 font-semibold">Education for a Better Society</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
            <nav className="space-y-3">
              {navLinks.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 block group"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold text-lg mb-4 tracking-wide">Contact Info</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p className="flex items-center gap-2">
                  <span>📍</span> Karakambadi Road, Tirupati
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span> +91 8886644985
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span> ieee.svce@example.com
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-white font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {[
                  { icon: <FaInstagram/>, href: 'https://www.instagram.com/svcolleges', label: 'Instagram' },
                  { icon: <FaLinkedin/>, href: 'https://www.linkedin.com/school/svcetirupati/', label: 'LinkedIn' }
                ].map(({ icon, href, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 text-cyan-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Advisory Team */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 tracking-wide">Advisory Team</h4>
            <div className="space-y-4 text-sm">
              {advisors.map((advisor, idx) => (
                <div key={idx}>
                  <p className="text-cyan-400 font-semibold">{advisor.role}</p>
                  <p className="text-slate-400">{advisor.name}</p>
                  <p className="text-slate-500 text-xs">{advisor.phone}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 IEEE SVCE. All rights reserved. | Developed with ❤️ by Web Development Team
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
