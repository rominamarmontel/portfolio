import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideNav(window.scrollY > window.innerHeight - 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='header_container'>
      <ul className={`header_ul ${hideNav ? 'is-animation' : ''}`}>
        <HashLink smooth to='/#about' >
          <li>À PROPOS</li></HashLink>
        <HashLink smooth to='/#feature' >
          <li>COMPÉTENCE</li>
        </HashLink>
        <HashLink smooth to='/#works' >
          <li>PROJETS</li>
        </HashLink>
        <HashLink smooth to='/#top'>
          <li><p>WEB DÉVELOPPEUSE FULL-STACK</p></li>
        </HashLink>
      </ul>
    </div>
  )
}

export default Header