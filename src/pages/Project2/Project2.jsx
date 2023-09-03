import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { FaGithub } from 'react-icons/fa';
import { SlLink } from 'react-icons/sl'

const Project2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className={styles.Project2}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            <h2>EXQUISITE STORY APP</h2>
            <p>Fev 2023 | Premier projet collaboration chez Ironhack</p>
          </div>
          <div className={styles.sns}>
            <Link to='https://exquisite-stories-x5xa.onrender.com/' target="_blank" rel="noopener noreferrer"><SlLink /></Link>
            <Link to='https://github.com/rominamarmontel/collaborative-project-rm' target="_blank" rel="noopener noreferrer"><FaGithub /></Link>

          </div>
        </div>
        <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408714/portfolio/247888287-aee68f84-6d60-4d20-a8ef-9d061462254d_1_veyqpx.png' alt='' />
        <div className={styles.textIntro}>
          <p>Pendant les trois mois du bootcamp chez Ironhack, nous avons eu trois projets au total. Ce travail marque notre tout premier projet collaboratif. Nous avons utilisé Express et hbs, avec MongoDB comme base de données. S'inspirant du jeu classique "Exquisite Stories", les utilisateurs peuvent publier des histoires auxquelles d'autres participants peuvent continuer le récit. De plus, les utilisateurs peuvent modifier ou supprimer leurs propres contributions tant qu'aucune suite n'a été créée. La participation au jeu nécessite une connexion.</p>
          <p className={styles.textEnglish}>During the three-month bootcamp at Ironhack, we had a total of three project assignments. This work marks our first collaborative project. We used Express and hbs, with MongoDB as the database. Taking inspiration from the classic game "Exquisite Stories," users can post stories and other participants can continue the narrative. Additionally, users can edit or delete their own contributions as long as no continuation has been created. Participation in the game requires logging in.</p>
        </div>
        <div className={styles.serviceBox}>
          <div>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408715/portfolio/247889755-ca581ffb-9bbc-4605-abf4-3ea73ee22219_qtbb35.png' alt='' />
          </div>
          <div className={styles.boxText}>
            <p>NodeJs, ExpressJs, Handlebars, MongoDB, CSS</p>
          </div>
        </div>
        <div className={styles.serviceBox}>
          <div>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408715/portfolio/252614504-a0f5ff26-89b8-48bf-bfb7-dda1db863984_obgnyo.png' alt='' />
          </div>
          <div>
            <p>Exquisite Game with Story Creation.
              Avec des fonctionnalités de connexion et de
              déconnexion, CRUD, création de modèles à
              l'aide de données de démarrage (seed data),
              Handlebars pour les modèles HTML.</p>
          </div>
        </div>
        <div className={styles.serviceBox}>
          <div>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408715/portfolio/252614548-bc7ab2f0-38fd-431a-a9eb-6894d3e5fa83_zb2fle.png' alt='' />
          </div>
          <div>
            <p>Site web de l'association "Impermanence Films".
              Résponsive, authentification pour les
              administrateurs, API, opérations CRUD, bascule avec ObjectId pour deux langues.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project2