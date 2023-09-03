import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { FaGithub } from 'react-icons/fa';
import { SlLink } from 'react-icons/sl'

const Impermanence = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className={styles.Impermanence}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            <h2>Impermanence Films</h2>
            <p>Mai - Juil 2023</p>
          </div>
          <div className={styles.sns}>
            <Link to='https://www.impermanencefilms.org/' target="_blank" rel="noopener noreferrer"><SlLink /></Link>
            <Link to='https://github.com/rominamarmontel/impermanence-front' target="_blank" rel="noopener noreferrer"><FaGithub /></Link>

          </div>
        </div>
        <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408713/portfolio/247889551-f2b4cfbb-f470-4bcd-9903-ce4ee391684a_edited_cmxrho.jpg' alt='' />
        <div className={styles.textIntro}>
          <p>Après avoir obtenu mon diplôme d'Ironhack, j'ai créé un site web pour l'association 'impermanence films'. Le site utilise React en frontend, Express en backend et MongoDB comme base de données. Il présente des introductions aux films produits et est affiché en versions française et anglaise avec un design réactif. De plus, il permet aux administrateurs de publier de nouveaux films.</p>
          <p className={styles.textEnglish}>After graduating from Ironhack, I created a website for the association 'impermanence films.' The website uses React on the frontend, Express on the backend, and MongoDB as the database. It features introductions to the produced films and is displayed in both French and English versions with responsive design. Additionally, it allows administrators to post new films.</p>
        </div>
        <div className={styles.serviceBox}>
          <div>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693496833/portfolio/247889755-ca581ffb-9bbc-4605-abf4-3ea73ee22219_1_1_etplbx.png' alt='' />
          </div>
          <div className={styles.boxText}>
            <h3 className={styles.subtitle}>TECHNOLOGIE</h3>
            <p>NodeJS, ExpressJS, ReactJS, MongoDB, HTML, CSS, Mongoose, Postman, Cloudinary</p>
          </div>
        </div>
        <div className={styles.serviceBox}>
          <div>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408715/portfolio/252614504-a0f5ff26-89b8-48bf-bfb7-dda1db863984_obgnyo.png' alt='' />
          </div>
          <div>
            <h3 className={styles.subtitle}>DESCRIPTION</h3>
            <p>Résponsive, authentification pour les
              administrateurs, API, opérations CRUD, bascule avec ObjectId pour deux langues.</p>
            <p>Mettre en œuvre la fonctionnalité d'inscription et de connexion pour le panneau d'administration. J'ai essayé d'utiliser le package npm @mui/x-data-grid et j'ai essayé d'utiliser SASS au lieu de CSS pour améliorer la lisibilité de l'affichage de la liste des films.</p>
          </div>
        </div>
        <div className={styles.serviceBox}>
          <div>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408715/portfolio/252614548-bc7ab2f0-38fd-431a-a9eb-6894d3e5fa83_zb2fle.png' alt='' />
          </div>
          <div>
            <p>En utilisant React, React Hooks et axios, effectuez des opérations CRUD pour créer de nouveaux films et mettre à jour les films existants.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Impermanence