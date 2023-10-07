import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { PiLinkSimpleFill } from 'react-icons/pi'

const Muun = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className={styles.Muun}>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.text}>
            <p className={styles.date}>Aout - Present 2023</p>
            <div className={styles.titleTop}>
              <h2 className={styles.title}>Muuñ official website</h2>
              <Link to='https://www.muun.fr/' target="_blank" rel="noopener noreferrer" className={styles.sns}><PiLinkSimpleFill /></Link>
            </div>
          </div>
        </div>
        <div className={styles.rightbox}>
          <div className={styles.imagebox}>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1696672048/portfolio/Screenshot_2023-10-07_at_11.45.17_1_soo4jj.png' alt='' />
          </div>
          <div className={styles.textIntro}>
            <h3 className={styles.subtitle}>TECHNOLOGIE</h3>
            <p>WordPress, Elementor</p>
            <br /><br />
            <h3 className={styles.subtitle}>DESCRIPTION</h3>
            <p>J'ai ajouté une version en japonais à la boutique en ligne existante "Muuñ". C'était ma première expérience avec le plugin Elementor pour le logiciel de gestion de contenu WordPress.</p>
            <p className={styles.textEnglish}>I added a Japanese version to the existing online store "Muuñ". This was my first attempt using the Elementor plugin with the WordPress CMS software.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Muun