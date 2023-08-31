import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { FaLinkedinIn } from 'react-icons/fa'
import {
  useScroll,
  useAnimatedValue,
  AnimatedBlock,
  interpolate
} from "react-ui-animate";

const Header = () => {
  const y = useAnimatedValue(0, { immediate: true });
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
        <div className='logo'>
          <h3>H<span>I</span>ROM<span>I</span> VARN<span>I</span>ER</h3>
        </div>
      </HashLink>
      <nav>
        <ul>
          <li><HashLink smooth to="/portfolio#works">Works</HashLink></li>
          <li><HashLink to="/portfolio#about">About</HashLink></li>
          <li><HashLink to="#contact">Contact</HashLink></li>
          <li className='sns'><Link to='https://www.linkedin.com/in/hiromi-varnier/' target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></Link></li>
        </ul>
      </nav>
    </AnimatedBlock>
  )
}

export default Header