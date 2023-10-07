import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { FaGithub } from 'react-icons/fa';
import { PiLinkSimpleFill } from 'react-icons/pi'

const Project2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className={styles.Project2}>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.text}>
            <p className={styles.date}>Fev 2023 | Premier projet collaboration chez Ironhack</p>
            <div className={styles.titleTop}>
              <h2 className={styles.title}>EXQUISITE STORY APP</h2>
              <div className={styles.sns}>
                <Link to='https://github.com/rominamarmontel/collaborative-project-rm' target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
                <Link to='https://exquisite-stories-x5xa.onrender.com/' target="_blank" rel="noopener noreferrer"><PiLinkSimpleFill /></Link>
              </div>
            </div>
            <div className={styles.rightbox}>
              <div className={styles.imagebox1}>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408714/portfolio/247888287-aee68f84-6d60-4d20-a8ef-9d061462254d_1_veyqpx.png' alt='' />
              </div>
              <div className={styles.textIntro}>
                <p>Pendant les trois mois du bootcamp chez Ironhack, nous avons eu trois projets au total. Ce travail marque notre tout premier projet collaboratif. Nous avons utilisé Express et hbs, avec MongoDB comme base de données. S'inspirant du jeu classique "Exquisite Stories", les utilisateurs peuvent publier des histoires auxquelles d'autres participants peuvent continuer le récit. De plus, les utilisateurs peuvent modifier ou supprimer leurs propres contributions tant qu'aucune suite n'a été créée. La participation au jeu nécessite une connexion.</p>
                <p className={styles.textEnglish}>During the three-month bootcamp at Ironhack, we had a total of three project assignments. This work marks our first collaborative project. We used Express and hbs, with MongoDB as the database. Taking inspiration from the classic game "Exquisite Stories," users can post stories and other participants can continue the narrative. Additionally, users can edit or delete their own contributions as long as no continuation has been created. Participation in the game requires logging in.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom_container}>
          <div className={styles.serviceBox}>
            <div className={styles.imagebox2}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693496986/portfolio/247888287-aee68f84-6d60-4d20-a8ef-9d061462254d_1_1_1_aawdpj.png' alt='exquisite3' />
            </div>
            <div className={styles.boxText}>
              <h3 className={styles.subtitle}>TECHNOLOGIE</h3>
              <p>NodeJs, ExpressJs, Handlebars, MongoDB, CSS</p>
              <h3 className={styles.subtitle}>CI/CD</h3>
              <p>Render</p>
            </div>
          </div>
          <div className={styles.serviceBox}>
            <div className={styles.imagebox3}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693756190/Screenshot_2023-09-03_at_17.12.47_rtctxj.png' alt='exquisite2' />
            </div>
            <div className={styles.boxText}>
              <p>Exquisite Game with Story Creation.
                Avec des fonctionnalités de connexion et de
                déconnexion (Middlewares authentification), CRUD, création de modèles à
                l'aide de données de démarrage (seed data),
                Handlebars pour les modèles HTML.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project2