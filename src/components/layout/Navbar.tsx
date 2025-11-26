import React from "react";

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
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur bg-black/20 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <img src={profileImage} className="w-9 h-9 rounded-full" />
          <span className="font-mono text-white">{profileName}</span>
        </div>

        <ul className="flex gap-6 font-mono">
          {links.map((link) => (
            <li
              key={link.href}
              className={`cursor-pointer transition ${
                currentSection === link.href.substring(1)
                  ? "text-green-400"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => onLinkClick(link.href)}
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
