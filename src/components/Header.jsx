import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLanguage } from './LanguageContext';

const Header = () => {
  const [hideNav, setHideNav] = useState(false);
  const { toggleLanguage, isEnglish } = useLanguage();

  const handleToggleClick = () => {
    toggleLanguage();
    const checkbox = document.querySelector('input[name="check"]');
    checkbox.checked = !checkbox.checked;
  };

  useEffect(() => {
    const handleScroll = () => {
      setHideNav(window.scrollY > window.innerHeight - 600)
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className='header_container'>
      <ul className={`header_ul ${hideNav ? 'is-animation' : ''}`}>
        <li><p>{isEnglish ? 'EN' : 'FR'}</p>
          <button onClick={toggleLanguage} className={`toggle ${isEnglish ? 'checked' : ''}`}>
            <input type="checkbox" />
          </button>
        </li>
        <HashLink smooth to='/#about'>
          <li>{isEnglish ? 'ABOUT' : 'À PROPOS'}</li>
        </HashLink>
        <HashLink smooth to='/#feature'>
          <li>{isEnglish ? 'SKILLS' : 'COMPÉTENCES'}</li>
        </HashLink>
        <HashLink smooth to='/#works'>
          <li>{isEnglish ? 'PROJECTS' : 'PROJETS'}</li>
        </HashLink>
        <HashLink smooth to='/#top'>
          <li><p>{isEnglish ? 'FULL-STACK WEB DEVELOPER' : 'WEB DÉVELOPPEUSE FULL-STACK'}</p></li>
        </HashLink>
      </ul>
    </div>
  );
};

export default Header;