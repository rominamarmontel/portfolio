import React, { useEffect } from 'react'
import Introduction from '../../components/introduction/introduction'
import Works from '../../components/Works/Works'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import styles from './styles.module.css'

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className={styles.Portfolio}>
      <div className={styles.container}>
        <section id='top' className={styles.top}>
          <div>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/e_auto_contrast/v1696453139/portfolio/IMG_6175_1_hm7v0k.jpg' alt='' />
          </div>
        </section>
        <section id='introduction' className={styles.intro}>
          <Introduction />
        </section>
        <section id='works' className={styles.works}>
          <Works />
        </section>
        <section id="about" className={styles.about}>
          <About />
        </section>
        <section id='contact' className={styles.contact}>
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default Portfolio