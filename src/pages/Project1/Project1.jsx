import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { FaGithub } from 'react-icons/fa';

const Project1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className={styles.Project1}>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.text}>
            <p className={styles.date}>Fev 2023 | Premier projet chez Ironhack</p>
            <div className={styles.titleTop}>
              <h2 className={styles.title}>WIN x WIN HAPPY MONKEY</h2>
              <Link to='https://github.com/rominamarmontel/numberGame' target="_blank" rel="noopener noreferrer" className={styles.sns}><FaGithub /></Link>
            </div>
          </div>
        </div>
        <div className={styles.rightbox}>
          <div className={styles.imagebox}>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693498437/portfolio/216149858-deaa521f-1e9e-485e-8840-5633e1d4e3fa_wjcnpp.png' alt='' />
          </div>
          <div className={styles.textIntro}>
            <h3 className={styles.subtitle}>TECHNOLOGIE</h3>
            <p>JavaScript, HTML, CSS</p>
            <br /><br />
            <h3 className={styles.subtitle}>DESCRIPTION</h3>
            <p>Il s'agit de mon premier projet avec JavaScript, CSS et HTML à l'école Ironhack.
              J'ai choisi TOUCH THE NUMBERS pour comprendre les opérations de classe et de DOM.
              Pour comprendre comment fonctionnent les classes et le DOM, les règles de mon jeu devaient être simples et faciles à jouer. C'est destiné aux enfants de 3 à 5 ans. C'est pourquoi je l'ai choisi pour mon premier projet JavaScript à l'école IRONHACK !! La règle est de toucher rapidement les chiffres de 1 à 9 dans l'ordre, c'est simple !!</p>
            <p className={styles.textEnglish}>This is my first project with Javascript, CSS and HTML in Ironhack School.
              I chose TOUCH THE NUMBERS for understanding the Class and DOM operation.
              To understand how Class and DOM works, the rule of my game had to be easy and simple to play. This is for children 3 to 5 years old. That's why I chose it for my first project of Javascript in IRONHACK school!! The rule is to touch numbers quickly from 1 to 9 in order, that's easy!!</p>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Project1