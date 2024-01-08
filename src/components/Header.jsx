import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import {
  useScroll,
  useAnimatedValue,
  AnimatedBlock,
  interpolate
} from "react-ui-animate";
import { ToggleButton } from "./ToggleButton";
import { Navigation } from "./Navigation";

const Header = () => {
  const [open, setOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const y = useAnimatedValue(0, { immediate: true });

  const toggleFunction = () => {
    setOpen((prevState) => !prevState)
  }

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      if (newWindowWidth <= 992) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })

  useEffect(() => {
    const handleClickOutsideMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('click', handleClickOutsideMenu);
    } else {
      document.removeEventListener('click', handleClickOutsideMenu);
    }
    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, [open]);

  useScroll(({ scrollY }) => {
    y.value = scrollY;
  });
  const boxShadow = interpolate(
    y.value,
    [0, 400],
    ["0px 0px 0px rgba(0,0,0,0.2)", "0px 4px 20px rgba(0,0,0,0.2)"],
    {
      extrapolate: "clamp"
    }
  );
  return (
    <>
      <AnimatedBlock
        style={{
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          position: "fixed",
          width: "100%",
          boxShadow
        }}
      >
        <HashLink to='/portfolio#'>
          <div className='logo' >
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704647335/portfolio/logo_portfolio_hbscys.png' alt='logo' width={300} />
          </div>
        </HashLink>

        {windowWidth <= 992 ? (
          <div className='hamburger' ref={menuRef}>
            <ToggleButton
              open={open}
              controls="navigation"
              label="open menu"
              onClick={toggleFunction}
            />
            <Navigation id="navigation" open={open} onClose={handleCloseMenu} />
          </div>
        ) : (
          <nav>
            <ul>
              <li><HashLink smooth to="/portfolio#works">Works</HashLink></li>
              <li><HashLink to="/portfolio#about">About</HashLink></li>
              <li><HashLink to="#contact">Contact</HashLink></li>
              <>
                <li className='sns'><Link to='https://github.com/rominamarmontel/#my-porfolio-project' target="_blank" rel="noopener noreferrer"><FaGithub style={{ color: "#c4010a", fontSize: "20px" }} /></Link></li>
                <li className='sns'><Link to='https://www.linkedin.com/in/hiromi-varnier/' target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ color: "#c4010a", fontSize: "20px" }} /></Link></li>
              </>
            </ul>
          </nav>
        )}
      </AnimatedBlock >
    </>
  )
}

export default Header