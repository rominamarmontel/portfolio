import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className={styles.Portfolio}>
      <div className={styles.container}>
        <section id='introduction'>
          <div className={styles.intro}>
            <div className={styles.layer}>
              <div className={styles.layertxt}>
                <h2>Introduction</h2>
                <p>Née à Fukuoka, Japon
                  et vivant à Paris depuis une décennie,
                  j'ai été envoûté par les cultures fascinantes de ces deux mondes.
                  À partir de 2022, j'ai entrepris une formation en codage et obtenu ma certification en tant que développeur web (Full Stack) ce printemps.
                  Ma passion pour React et Express me pousse à améliorer constamment mes compétences grâce à des projets de codage quotidiens.
                  J'aspire à être un professionnel polyvalent, compétent tant en frontend qu'en backend, capable de fournir des solutions web innovantes et percutantes.
                  Doté d'une dévotion profonde pour perfectionner mon savoir-faire, je m'efforce de créer des projets captivants qui conjuguent design exceptionnel et performance.</p>
                <p className={styles.textEnglish}>Born in Fukuoka, Japan
                  and living in Paris for the past decade,
                  I have embraced the enchanting cultures of both worlds.
                  From 2022, I embarked on a coding journey
                  and earned my Certification as a Web Developer (Full Stack) this spring.
                  My passion for React and Express drives me
                  to continuously enhance my skills through daily coding endeavors.
                  I aspire to be a versatile talent,
                  proficient in both frontend and backend,
                  capable of delivering innovative and impactful web solutions.
                  With a deep dedication to honing my craft,
                  I strive to create captivating projects
                  that showcase exceptional design and performance.</p>
              </div>
            </div>
          </div>
        </section>
        <section id='works' className={styles.works}>
          <div className={styles.sectionContainer}>
            <h2>Works</h2>
            <div className={styles.worksbox}>
              <Link to='/muun'>
                <div className={styles.work}>
                  <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693410505/portfolio/Screenshot_2023-08-30_at_17.48.06_yifnhr.png' alt='impermanencefilms' />
                  <h4>EC site<br />
                    <span>Aout - Sep 2023</span></h4>
                </div>
              </Link>
              <Link to='/impermanence'>
                <div className={styles.work}>
                  <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408713/portfolio/247889551-f2b4cfbb-f470-4bcd-9903-ce4ee391684a_edited_cmxrho.jpg' alt='impermanencefilms' />
                  <h4>Web application<br />
                    <span>Mai - Juil 2023</span></h4>
                </div>
              </Link>
              <Link to='/kanraku'>
                <div className={styles.work}>
                  <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693496603/portfolio/247885359-e249cde4-af45-4051-8426-edf21bc77785_1_1_u49f86.png' alt='impermanencefilms' />
                  <h4>EC site<br />
                    <span>Mars 2023</span></h4>
                </div>
              </Link>
              <Link to='/project2'>
                <div className={styles.work}>
                  <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408714/portfolio/247888287-aee68f84-6d60-4d20-a8ef-9d061462254d_1_veyqpx.png' alt='impermanencefilms' />
                  <h4>Web application<br />
                    <span>Feb 2023</span></h4>
                </div>
              </Link>
              <Link to='/project1'>
                <div className={styles.work}>
                  <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693496307/portfolio/216149858-deaa521f-1e9e-485e-8840-5633e1d4e3fa_1_1_byw3se.png' alt='happymonkey' />
                  <h4>Web application<br />
                    <span>Jan 2023</span></h4>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className={styles.about}>
          <div className={styles.sectionContainer}>
            <h2>About</h2>
            <div className={styles.skills}>
              <span>JAVASCRIPT ES5 & ES6</span>
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
                <p>Maîtrisant à la fois l'anglais et le français, avec le japonais comme langue maternelle. Ponctuel et responsable, j'attache une grande importance à fournir des résultats exceptionnels pour chaque mission qui m'est confiée. En tant qu'individu autonome, je suis passionné par la programmation et j'aspire à devenir un programmeur artisanal, avec un sens aigu du code propre et des designs esthétiquement plaisants.</p>
                <p className={styles.textEnglish}>Fluent in both English and French, with Japanese as my native language. Punctual and responsible, I take pride in delivering exceptional results for any assigned task. As an autonomous individual, I have a strong passion for programming and strive to be a craftsman-like programmer with a keen eye for clean code and aesthetically pleasing designs.</p>
              </div>
            </div>
          </div>
        </section>
        <section id='contact' className={styles.contact}>
          <div className={styles.sectionContainer}>
            <h2>Contact</h2>
            <div className={styles.contactText}>
              <p>Je parle Français Japonais et Anglais</p>
              <p>Email : romi.varnier (a) gmail.com</p><p>
                Mobile : 06 26 61 98 05</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Portfolio