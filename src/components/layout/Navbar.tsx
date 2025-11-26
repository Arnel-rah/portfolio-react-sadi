import React, { useState, useEffect } from "react";

interface NavbarProps {
  profileImage: string;
  profileName: string;
  links: { label: string; href: string }[];
  onLinkClick: (href: string) => void;
  currentSection: string;
}

const Navbar: React.FC<NavbarProps> = ({
  profileImage,
  profileName,
  links,
  onLinkClick,
  currentSection,
}) => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full  shadow-2xl z-50 transition-all duration-500 ease-out ${isVisible ? "translate-y-0" : "-translate-y-full opacity-0"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-12 h-12 rounded-full ring-2 ring-green-400/30 shadow-xl transition-all duration-300 hover:scale-110 hover:ring-green-400/50" 
          />
          <div className="hidden sm:block">
            <span className="font-mono text-xl text-white font-bold tracking-wide bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text">
              {profileName}
            </span>
          </div>
          <span className="sm:hidden font-mono text-lg text-white font-semibold">
            {profileName}
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-base">
          {links.map((link) => (
            <li
              key={link.href}
              className={`cursor-pointer transition-all duration-300 px-4 py-2 rounded-xl relative group ${
                currentSection === link.href.substring(1)
                  ? "text-green-400"
                  : "text-gray-300"
              }`}
              onClick={() => onLinkClick(link.href)}
            >
              {link.label}
              <div className={`absolute inset-0 rounded-xl bg-linear-to-r  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${currentSection === link.href.substring(1) ? 'opacity-100' : ''}`} />
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center text-white transition-all duration-300 hover:scale-110 hover:bg-gray-800/50 rounded-lg p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out rounded-full ${
              open ? "rotate-45 translate-y-1.5" : "-translate-y-1"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out my-0.5 rounded-full ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out rounded-full ${
              open ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 font-mono bg-gray-900/80 backdrop-blur-xl border-t border-gray-800/50 px-4 py-4">
          {links.map((link) => (
            <li
              key={link.href}
              className={`cursor-pointer transition-all duration-300 px-4 py-4 rounded-xl text-left ${
                currentSection === link.href.substring(1)
                  ? "text-green-400"
                  : "text-gray-300"
              }`}
              onClick={() => {
                setOpen(false);
                onLinkClick(link.href);
              }}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;