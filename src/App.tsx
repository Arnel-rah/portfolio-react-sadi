import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');

  const handleLinkClick = (href: string) => {
    console.log(`Scroll vers ${href}`);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      threshold: 0.5, 
      rootMargin: '-20% 0px -80% 0px', 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id); 
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#131314] pt-16">
      <Navbar
        profileImage="/arne-profile.jpg"
        profileName="ArneL"
        links={[
          { label: '#home', href: '#home' },
          { label: '#works', href: '#works' },
          { label: '#about-me', href: '#about-me' },
          { label: '#contacts', href: '#contacts' },
        ]}
        onLinkClick={handleLinkClick}
        currentSection={currentSection}
      />
    </div>
  );
};

export default App;