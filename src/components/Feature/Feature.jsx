import styles from './styles.module.css'
import { Fade } from "react-awesome-reveal"
import { useLanguage } from '../LanguageContext'

const Feature = () => {
  const { isEnglish } = useLanguage()

  return (
    <div className={styles.Feature}>
      <div className={styles.layer}>
        <div className={styles.competence}>
          <div className={styles.competence_image}>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693477165/portfolio/IMG_1094_cro4mb.jpg' alt='' />
          </div>
          <div className={styles.feature_container}>
            <div className={styles.title}>
              <Fade>
                <h3>{isEnglish ? 'SKILLS' : "COMPÉTENCE"}</h3>
              </Fade>
            </div>
            <div className={styles.items}>
              <div className={styles.frontend}>
                <h3>FRONT-END</h3>
                <div className={styles.item_frontend}>
                  <div className={styles.box_frontend}>
                    <div className={`${styles.fadeIn} ${styles.delay1}`}><p className={styles.fadeIn}>JavaScript / TypeScript</p></div>
                  </div>
                  <div className={styles.box_frontend}>
                    <div className={`${styles.fadeIn} ${styles.delay2}`}><p className={styles.fadeIn}>ReactJs</p></div>
                  </div>
                  <div className={styles.box_frontend}>
                    <div className={`${styles.fadeIn} ${styles.delay4}`}><p className={styles.fadeIn}>NextJs</p></div>
                  </div>
                  <div className={styles.box_frontend}>
                    <div className={`${styles.fadeIn} ${styles.delay4}`}><p className={styles.fadeIn}>WordPress</p></div>
                  </div>
                  <div className={styles.box_frontend}>
                    <div className={`${styles.fadeIn} ${styles.delay4}`}><p className={styles.fadeIn}>Illustrator / Photoshop / InDesign</p></div>
                  </div>
                </div>
              </div>
              <div className={styles.backend}>
                <h3>BACK-END</h3>
                <div className={styles.item_backend}>
                  <div className={styles.box_backend}>
                    <div className={`${styles.fadeIn} ${styles.delay1}`}><p>NodeJs / Python</p></div>
                  </div>
                  <div className={styles.box_backend}>
                    <div className={`${styles.fadeIn} ${styles.delay2}`}><p>ExpressJs</p></div>
                  </div>
                  <div className={styles.box_backend}>
                    <div className={`${styles.fadeIn} ${styles.delay3}`}><p>MongoDB / MySQL / Prisma</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature