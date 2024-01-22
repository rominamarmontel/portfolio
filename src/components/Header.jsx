import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useLanguage } from './LanguageContext'
import { ToggleButton } from "./ToggleButton"
import { Navigation } from './Navigation'
import "./styles.css"

const Header = () => {
  const [hideNav, setHideNav] = useState(false)
  const { toggleLanguage, isEnglish } = useLanguage()
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)

  const toggleFunction = () => {
    setOpen((prevState) => !prevState)
  }

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const handleToggleClick = () => {
    toggleLanguage()
    const checkbox = document.querySelector('input[name="check"]')
    checkbox.checked = !checkbox.checked
  }

  const handleScroll = () => {
    setHideNav(window.scrollY > window.innerHeight - 600)
  }
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='header_container'>
      {isMobile && (
        <section className={`hamburgerMenu-section ${isMobile ? 'visible' : ''}`}>
          <ToggleButton
            open={open}
            controls="navigation"
            label="open menu"
            onClick={toggleFunction}
          />
          <Navigation id="navigation" open={open} onClose={handleCloseMenu} />
        </section>
      )}
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
  )
}

export default Header