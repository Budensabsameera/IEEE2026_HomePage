import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import logo1 from "../assets/svcelogo2.jpg";
import logo2 from "../assets/ieeelogo.jpg";
interface FooterProps {
  svceLeft?: string;
  sunRight?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  svceLeft = logo1, 
  sunRight = logo2
}) => {
  return (
    <footer className="bg-gradient-to-t from-slate-950 via-slate-900 to-blue-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
 {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 mb-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* SVCE Branding */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <img src={svceLeft} alt="SVCE" className="h-10 w-auto drop-shadow-lg" />
              <img src={sunRight} alt="Tirupati" className="h-10 w-auto drop-shadow-lg" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Sri Venkateswara College of Engineering, Tirupati
              <br />
              <span className="text-cyan-400 font-medium">Education for a Better Society</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold text-lg mb-4 sm:mb-6 tracking-wide">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About IEEE', path: '/about' },
                { name: 'Execom', path: '/execom' },
                { name: 'Events', path: '/events' },
                { name: 'Achievements', path: '/achievements' },
                { name: 'Magzine', path: '/magazine' }
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}  // ← REACT ROUTER LINK
                  className="text-slate-400 hover:text-cyan-400 block text-sm transition-colors duration-200 hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6 lg:pt-2 text-center sm:text-left">
            <div>
              <h4 className="text-white font-semibold text-lg mb-4 tracking-wide">Contact Information</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>SVCE IEEE</p>
                <p>Karakambadi Road, Tirupati</p>
                <p className="flex items-center gap-2">
                  <span>📞</span> +91 8886644985
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span> info@svce
                </p>
              
              </div>
            </div>

            {/* Social Links */}
            <div className="relative z-10">
              <h5 className="text-slate-300 font-medium mb-3">Follow Us</h5>
              <div className="flex gap-3 justify-center sm:justify-start">
                {[
                  { icon: <FaInstagram/>, href: 'https://www.instagram.com/svcolleges?igsh=MWU4cXFiZHJ3b2RldA==' },
                  { icon: <FaLinkedin /> , href: 'https://www.linkedin.com/school/svcetirupati/'},
                  
                ].map(({ icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 min-w-[40px] bg-slate-800/50 hover:bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 sm:w-12 sm:h-12 sm:min-w-[48px] 
                             hover:scale-110 hover:text-white transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
           <div className="space-y-6 lg:pt-2 text-center sm:text-left">
            <h4 className="text-white font-semibold text-lg mb-4 tracking-wide">Contact Information</h4>
              
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex text-white font-semibold items-center gap-2">SB Counsellor</p>
                <p className="flex  items-center gap-2">Dr. N. Sudhakar Reddy</p>
                <p className="flex items-center gap-2"> +91 8886644955</p>
                <p className="flex text-white font-semibold items-center gap-2">SB Advisor</p>
                <p className="flex items-center gap-2">Mr. Allabkash Shaik</p>
                <p className="flex items-center gap-2">+91 9700644100</p>
                <p className="flex text-white font-semibold items-center gap-2">SB Chair person</p>
                <p className="flex items-center gap-2">M.Kavya Reddy</p>
                <p className="flex items-center gap-2">+91 9494605361</p>

              </div>
            </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-800 mt-6 pt-3 text-center">
  <p className="text-slate-500 text-sm">
    © 2026 Webmasters Team. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
