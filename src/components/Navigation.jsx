import "./styles.css"
import { HashLink } from 'react-router-hash-link'

export const Navigation = ({ open, id, onClose }) => {
  const handleLinkClick = () => {
    onClose()
  }
  return (
    <>
      <nav id={id} aria-hidden={!open} className="navigation">
        <div className="menu">
          <ul>
            <HashLink to='/portfolio#' onClick={handleLinkClick}>
              <div className='logo'>
                <h3>HIROMI VARN<span>I</span>ER</h3>
              </div>
            </HashLink>
            <li><HashLink smooth to="/portfolio#works" onClick={handleLinkClick}>Works</HashLink></li>
            <li><HashLink to="/portfolio#about" onClick={handleLinkClick}>About</HashLink></li>
            <li><HashLink to="#contact" onClick={handleLinkClick}>Contact</HashLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
};
