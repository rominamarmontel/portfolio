import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { Fade } from "react-awesome-reveal"
import { useLanguage } from '../LanguageContext'

const History = () => {
  const aboutRef = useRef()
  const { isEnglish } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const scrollY = window.scrollY || window.pageYOffset
        const aboutTop = aboutRef.current.offsetTop
        const threshold = window.innerHeight * 0.8
        if (scrollY > aboutTop - threshold) {
          aboutRef.current.classList.add(styles.visible)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.History}>
      <div className={styles.layer}>
        <div className={styles.layerText}>
          <div className={styles.historyImage}>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1705687818/0_i1TGGkr0bqR4IHql-1_tbokmq.webp' alt='' />
          </div>
          <div className={styles.introText}>
            <div className={styles.title}>
              <Fade>
                <h3>{isEnglish ? 'EDUCATION' : 'PARCOURS'}</h3>
              </Fade>
            </div>
            <div className={`${styles.school} ${styles.fadeIn}`} ref={aboutRef}>
              <div className={styles.description}>
                <p ><span className={styles.bold}>{isEnglish ? 'Web Developer Full-Stack' : 'Développeur Web Full-Stack'}</span>
                  <br />
                  <span className={styles.italic}>@IRONHACK PARIS,
                    Jan/2023-Mar/2023</span>
                </p>
                <p className={styles.gray}>{isEnglish ? 'Complete development of a website (React.JS, Vite, Node.JS, Express.JS, MongoDB)' : "Développement entier d’un site (React.JS, Vite, Node.JS, Express.JS, MongoDB)"}</p>
                <p className={styles.gray}>{isEnglish ? 'Development of site enhancements (HTML, CSS, JavaScript)' : 'Développement d’évolutions des sites (HTML, CSS, JavaScript)'}</p>
              </div>

              <div className={styles.description}>
                <p ><span className={styles.bold}>Solid Foundation</span><br />
                  <span className={styles.italic}>@HOLBERTON SCHOOL PARIS,
                    Jan/2022-Nov/2022</span>
                </p>
                <p className={styles.gray}>{isEnglish ? 'Complete development of a website (React.JS / Redux / Node.JS / Express.JS / MongoDB)' : 'Développement entier d’un site (React.JS / Redux / Node.JS / Express.JS / MongoDB)'}</p>
                <p className={styles.gray}>{isEnglish ? 'Development of site enhancements (Python / MySQL)' : 'Développement d’évolutions des sites (Python / MySQL)'}</p>
                <p className={styles.gray}>{isEnglish ? 'Development of site enhancements (C)' : 'Développement d’évolutions des sites (C)'}</p>
                <p className={styles.gray}>BASH, Git, Linux, Ubuntu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History