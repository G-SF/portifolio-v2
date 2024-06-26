import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const experienceSection = document.getElementById('experience');
      const portfolioSection = document.getElementById('portfolio');
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.scrollY;

      if (scrollPosition < aboutSection.offsetTop) {
        setActiveNav('#home');
      } else if (scrollPosition < experienceSection.offsetTop) {
        setActiveNav('#about');
      } else if (scrollPosition < portfolioSection.offsetTop) {
        setActiveNav('#experience');
      } else if (scrollPosition < contactSection.offsetTop) {
        setActiveNav('#portfolio');
      } else {
        setActiveNav('#contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a
        href='#home'
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href='#portfolio'
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Topbar;
