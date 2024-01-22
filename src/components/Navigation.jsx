import "./styles.css"
import { HashLink } from 'react-router-hash-link'
import { useLanguage } from './LanguageContext'
import { Link } from 'react-router-dom'
import { GrGithub } from "react-icons/gr"
import { FaLinkedinIn } from "react-icons/fa"

export const Navigation = ({ open, id, onClose }) => {
  const { toggleLanguage, isEnglish } = useLanguage()
  const handleLinkClick = () => {
    onClose()
  }
  return (
    <>
      <nav id={id} aria-hidden={!open} className="navigation">
        <div className="menu">
          <HashLink to='/' onClick={handleLinkClick}>
            <div className='logo_image'>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1705312051/logo_hiromi_b1mycv.png' alt='logo' />
            </div>
          </HashLink>
          <ul>
            <li><HashLink to="/#about" onClick={handleLinkClick}>{isEnglish ? 'ABOUT' : 'À PROPOS'}</HashLink></li>
            <li><HashLink smooth to='/#feature' onClick={handleLinkClick}>
              {isEnglish ? 'SKILLS' : 'COMPÉTENCES'}
            </HashLink></li>
            <li><HashLink smooth to='/#history' onClick={handleLinkClick}>
              {isEnglish ? 'EDUCATION' : 'PARCOURS'}
            </HashLink></li>
            <li><HashLink smooth to="/#works" onClick={handleLinkClick}>{isEnglish ? 'PROJECTS' : 'PROJETS'}</HashLink></li>
            <li><HashLink to="/#contact" onClick={handleLinkClick}>CONTACT</HashLink></li>
            <li><p>{isEnglish ? 'EN' : 'FR'}</p>
              <button onClick={toggleLanguage} className={`toggle ${isEnglish ? 'checked' : ''}`}>
                <input type="checkbox" />
              </button>
            </li>
            <div className='icons_conatiner'>
              <Link to='https://www.linkedin.com/in/hiromi-varnier/' target='_blank' className='linkedin_icons'><FaLinkedinIn /></Link>
              <Link to='https://github.com/rominamarmontel/' target='_blank' className='github_icons'><GrGithub /></Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
