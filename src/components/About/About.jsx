import React, { useState } from 'react'
import styles from './styles.module.css'

const About = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className={styles.About}>
      <div className={styles.layer}>
        <div className={styles.title}>
          <h2>About</h2>
          <div className={styles.english} onClick={toggleLanguage}>{isEnglish ? 'English version' : 'French version'}</div>
        </div>
        <div className={styles.skills}>
          <span>JAVASCRIPT ES5 / ES6</span>
          <span>ReactJS</span>
          <span>NodeJS</span>
          <span>ExpressJS</span>
          <span>MongoDB</span>
          <span>Handlebars</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>C</span>
          <span>PYTHON</span>
          <span>MYSQL</span>
          <span>ILLUSTRATOR</span>
          <span>PHOTOSHOP</span>
          <span>INDESIGN</span>
        </div>
        <div className={styles.aboutbox}>
          <div>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693477165/portfolio/IMG_1094_cro4mb.jpg' alt='' />
          </div>
          <div className={styles.abouttext}>
            {isEnglish ? (
              <>
                <p>Maîtrisant à la fois l'anglais, le français, et le japonais comme langue maternelle. J’ai le sens des responsabilités, de nature curieuse, j'adore rigoler. Je sais travailler en équipe mais aussi de manière autonome. J'aime la programmation avant tout, et bien que je sois encore un junior qui vient de faire ses premiers pas dans ce monde, je souhaite développer davantage mes compétences en travaillant avec des développeurs professionnels.
                  Je suis japonaise et possède un permis de séjour et un permis de travail en France.</p>
                <div className={styles.education}>
                  <h4>ETUDE / FORMATION</h4>
                  <p>IRONHACK PARIS 01/2023 - 03/2023<br />TITRE RNCP NIVEAU 6</p>
                  <ul>
                    <b>WEB DEVELOPPER Intensive Bootcamp</b>
                    <li>HTML5, CSS3, JavaScript ES5 & Git
                    </li>
                    <li>
                      Responsive web dsign avec Bootstrap & Flexbox
                    </li>
                    <li>Manipulation DOM, Canvas</li>
                    <li>NodeJS, ExpressJS, MongoDB avec Mongoose,
                      JavaScript ES6, Handlebars (HTML Templates)</li>
                    <li>ReactJS</li>
                    <li>Creating MERN app</li>
                  </ul>
                  <p>HOLBERTON SCHOOL PARIS
                    01/22 - 11/2023<br />TITRE RNCP NIVEAU 5</p>
                  <ul>
                    <b>DES BASES SOLIDES</b>
                    <li>1590 heures de formation pour comprendre
                      le fonctionnement de tous les langages et
                      algorithmes.</li>
                    <li>Rédaction technique, débogage et gestion de
                      projet.</li>
                    <li>Pagination d'API, mise en cache d'algorithmes,
                      tests, mécanismes d'authentification et tâches
                      en arrière-plan.</li>
                    <li>Conception et développement de plateformes
                      sécurisées, optimisées, stables et évolutives.</li>
                    <li>Git, Bash, Shell, C, SSH/SSL</li>
                    <li>Python, MongoDB, MySQL</li>
                  </ul>
                  <p>Bac +4 (Psychologie environnementale, Tokyo Women's Christian University, Japon)</p>
                </div>
              </>
            ) : (
              <>
                <p className={styles.textEnglish}>Fluent in both English and French, with Japanese as my native language. I'm full of a sense of responsibility and curiosity, and I love laughing. I can work well in a team but also excel as an independent individual. I have a strong passion for programming, and even though I'm just a junior who has recently entered this world, I want to further develop my skills by working with professional developers.<br />I am Japanese and I hold a residence permit and a work permit for France.</p>
                <div className={styles.education}>
                  <h4>EDUCATION / FORMATION</h4>
                  <p>IRONHACK PARIS 01/2023 - 03/2023<br />TITRE RNCP NIVEAU 6</p>
                  <ul>
                    <b>WEB DEVELOPPER Intensive Bootcamp</b>
                    <li>HTML5, CSS3, JavaScript ES5 & Git
                    </li>
                    <li>
                      Responsive web design with Bootstrap & Flexbox
                    </li>
                    <li>DOM Manipulation, Canvas</li>
                    <li>NodeJS, ExpressJS, MongoDB with Mongoose,
                      JavaScript ES6, Handlebars (HTML Templates)</li>
                    <li>ReactJS</li>
                    <li>Creating MERN app</li>
                  </ul>
                  <p>HOLBERTON SCHOOL PARIS
                    01/22 - 11/2023<br />TITRE RNCP NIVEAU 5</p>
                  <ul>
                    <b>SOLID FOUNDAITON</b>
                    <li>1590 hours training for understanding the
                      working of all language and algorithms</li>
                    <li>Technical writing, debugging and project
                      management</li>
                    <li>API pagination, algorithm caching, testing,
                      authentication mechanisms and background tasks</li>
                    <li>design and develop secure, optimized, stable, and scalable platforms</li>
                    <li>Git, Bash, Shell, C, SSH/SSL</li>
                    <li>Python, MongoDB, MySQL</li>
                  </ul>
                  <p>Bac +4 (Environmental Psychology, Tokyo Women's Christian University, Japan)</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About