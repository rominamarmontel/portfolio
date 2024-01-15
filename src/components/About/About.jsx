import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import Fade from 'react-reveal/Fade';

const About = () => {
  const aboutRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const aboutTop = aboutRef.current.offsetTop;
      const threshold = window.innerHeight * 0.8;

      if (scrollY > aboutTop - threshold) {
        aboutRef.current.classList.add(styles.visible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.About}>
      <div className={styles.layer}>
        <div className={styles.layertxt}>
          <div className={styles.introText}>
            <div className={styles.title_mobile}>
              <Fade left>
                <h2>À PROPOS</h2>
              </Fade>
            </div>
            <div className={styles.aboutImage}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704810827/DSCN0420_q19nnf.jpg' alt='' />
            </div>
            <div className={`${styles.description} ${styles.fadeIn}`} ref={aboutRef}>
              <p>J'ai changé de cap depuis le monde de la télévision et de la logistique pour devenir une développeuse web Full-Stack polyvalente. Je parle couramment le japonais, le français, et l'anglais, apportant une touche trilingue à mon travail. Avec une expérience dans la coordination de projets culturels japonais-français, je suis passionnée par la création de liens. Bien que je sois junior, j'adore plonger dans de nouvelles technologies et relever des défis pour améliorer mes compétences au quotidien. Ma passion réside dans la création d'applications web avec un code propre, un design attrayant, et des fonctionnalités. Je ne suis pas seulement une développeuse, je suis également avide d'acquérir de nouvelles compétences et expériences dans le cadre de mon travail. J'ai hâte de rejoindre une équipe dynamique où je pourrai être une excellente développeuse tout en apprenant et en évoluant à travers des projets passionnants.</p>
              {/* <Link to='https://drive.google.com/file/d/1JZJQaiw-qAtF-l4Vzk6wIyiLWl1nwCA_/view?usp=sharing' className={styles.link_cv} target='_blank'>VOIR MON CV</Link> */}
            </div>
            <div className={styles.title}>
              <h2>À PROPOS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;