import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { SlLink } from 'react-icons/sl'

const Muun = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className={styles.Muun}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            <h2>Muuñ website</h2>
            <p>Aout - Present 2023</p>
          </div>
          <div className={styles.sns}>
            <Link to='https://www.muun.fr/' target="_blank" rel="noopener noreferrer"><SlLink /></Link>
          </div>
        </div>
        <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693410505/portfolio/Screenshot_2023-08-30_at_17.48.06_yifnhr.png' alt='' />
        <div className={styles.textIntro}>
          <h3 className={styles.subtitle}>TECHNOLOGIE</h3>
          <p>WordPress, Elementor</p>
          <h3 className={styles.subtitle}>DESCRIPTION</h3>
          <p>J'ai ajouté une version en japonais à la boutique en ligne existante "Muuñ". C'était ma première expérience avec le plugin Elementor pour le logiciel de gestion de contenu WordPress.</p>
          <p className={styles.textEnglish}>I added a Japanese version to the existing online store "Muuñ". This was my first attempt using the Elementor plugin with the WordPress CMS software.</p>
        </div>
      </div>
    </div>
  )
}

export default Muun