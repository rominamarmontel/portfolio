import React, { useEffect, useState } from 'react'
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
        <HashLink to='/'>
          <div className='logo'>
            <h3>H<span>I</span>ROM<span>I</span> VARN<span>I</span>ER</h3>
          </div>
        </HashLink>

        {windowWidth <= 992 ? (
          <div className="hamburger">
            <ToggleButton
              open={open}
              controls="navigation"
              label="メニューを開きます"
              onClick={toggleFunction}
            />
            <Navigation id="navigation" open={open} onClose={handleCloseMenu} />
          </div>
        ) : (
          <nav>
            <ul>
              <li><HashLink to='/portfolio#'>Top</HashLink></li>
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