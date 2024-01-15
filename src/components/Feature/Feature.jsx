import styles from './styles.module.css'
import { useEffect, useRef } from 'react';

const Feature = () => {
  const featureRef = useRef(null);
  const hasScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const featureElement = featureRef.current;
      const rect = featureElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight / 2) {
        featureElement.classList.add(styles.fadeIn);
        hasScrolled.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={featureRef} className={styles.Feature}>
      <div className={styles.layer}>
        <div className={styles.competence}>
          <div className={styles.title}>
            <h2>COMPÉTENCE</h2>
          </div>
          <div className={styles.frontend}>
            <h3>FRONT-END<br />
              <span>FRONT-END</span></h3>
            <div className={styles.item_frontend}>
              <div className={styles.box_frontend}>
                <div className={`${styles.fadeIn} ${styles.delay1}`}><p className={styles.fadeIn}>JavaScript</p></div>
              </div>
              <div className={styles.box_frontend}>
                <div className={`${styles.fadeIn} ${styles.delay2}`}><p className={styles.fadeIn}>ReactJs</p></div>
                <div className={`${styles.fadeIn} ${styles.delay3}`}><p className={styles.fadeIn}>TypeScript</p></div>
                <div className={`${styles.fadeIn} ${styles.delay4}`}><p className={styles.fadeIn}>NextJs</p></div>
              </div>
            </div>
          </div>
          <div className={styles.backend}>
            <h3>BACK-END<br />
              <span>BACK-END</span></h3>
            <div className={styles.item_backend}>
              <div className={styles.box_backend}>
                <div className={`${styles.fadeIn} ${styles.delay1}`}><p>NodeJs</p></div>
                <div className={`${styles.fadeIn} ${styles.delay2}`}><p>ExpressJs</p></div>
                <div className={`${styles.fadeIn} ${styles.delay3}`}><p>Python</p></div>
              </div>
              <div className={styles.box_backend}>
                <div className={`${styles.fadeIn} ${styles.delay4}`}><p>MongoDB</p></div>
                <div className={`${styles.fadeIn} ${styles.delay5}`}><p>MySQL</p></div>
                <div className={`${styles.fadeIn} ${styles.delay6}`}><p>Prisma</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature