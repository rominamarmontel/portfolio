import React, { useState } from 'react'
import styles from './styles.module.css'

const Introduction = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className={styles.Introduction}>
      <div className={styles.layer}>
        <div className={styles.layertxt}>
          <div className={styles.title}>
            <h2>Introduction</h2>
            <div className={styles.english} onClick={toggleLanguage}>{isEnglish ? 'English version' : 'French version'}</div>
          </div>
          {isEnglish ? (
            <p>Née à Fukuoka, Japon et vivant à Paris depuis une décennie, j'ai été envoûtée par les cultures fascinantes de ces deux mondes. À partir de 2022, j'ai entrepris une formation en codage et obtenu ma certification en tant que développeur web Full Stack ce printemps 2023. Ma passion pour React et Express me pousse à améliorer constamment mes compétences grâce à des projets de codage quotidiens. J'aspire à être une professionnelle polyvalente, compétente tant en frontend qu'en backend, capable de fournir des solutions web innovantes et percutantes. Dotée d'une dévotion profonde pour perfectionner mon savoir-faire, je m'efforce de créer des projets captivants qui conjuguent design et performance.</p>
          ) : (
            <>
              <p className={styles.textEnglish}>Born in Fukuoka, Japan
                and living in Paris for the past decade,
                I have embraced the enchanting cultures of both worlds.
                From 2022, I embarked on a coding journey
                and earned my Certification as a Web Developer (Full Stack) this spring.
                My passion for React and Express drives me
                to continuously enhance my skills through daily coding endeavors.
                I aspire to be a versatile talent,
                proficient in both frontend and backend,
                capable of delivering innovative and impactful web solutions.<br />
                With a deep dedication to honing my craft,
                I strive to create captivating projects
                that showcase exceptional design and performance.</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
export default Introduction