import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { FaGithub } from 'react-icons/fa';
import { SlLink } from 'react-icons/sl'

const Kanraku = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className={styles.Kanraku}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            <h2>Kanraku Hosai</h2>
            <p>Mars 2023 | Projet final chez Ironhack</p>
          </div>
          <div className={styles.sns}>
            <Link to='https://hosai.netlify.app/' target="_blank" rel="noopener noreferrer"><SlLink /></Link>
            <Link to='https://github.com/rominamarmontel/nagasekikaku-frontend' target="_blank" rel="noopener noreferrer"><FaGithub /></Link>

          </div>
        </div>
        <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693496529/portfolio/247886319-dbe3b046-f892-4873-b309-0fa675df6983_1_1_etymtv.png' alt='' />
        <div className={styles.textIntro}>
          <p>Pour le projet final d'Ironhack, j'ai choisi de travailler sur une tâche d'e-commerce. J'ai utilisé React pour le frontend, Express pour le backend, et MongoDB pour la base de données. Après l'obtention de mon diplôme, j'ai complètement redessiné la version originale en anglais et créé une nouvelle version en japonais. Bien que je n'aie pas eu beaucoup de temps au départ, j'ai saisi cette occasion pour repenser et améliorer la conception, y compris le panneau d'administration, le panier d'achat et le processus de paiement.</p>
          <p className={styles.textEnglish}>For Ironhack's final project, I chose to work on an e-commerce assignment. I used React for the frontend, Express for the backend, and MongoDB for the database. After graduation, I completely redesigned the original English version and also created a new Japanese version. Although I didn't have much time initially, I took this opportunity to revamp and improve the design, including the administration panel, shopping cart, and checkout process.</p>
        </div>
        <div className={styles.serviceBox}>
          <div>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693496511/portfolio/247885388-897af22c-ad6c-4310-8f54-bcab1669f379_1_1_ol4uo7.png' alt='' />
          </div>
          <div className={styles.boxText}>
            <p>NodeJS, ExpressJS, ReactJS, MongoDB, HTML,
              CSS,Mongoose, Postman, Cloudinary</p>
          </div>
        </div>
        <div className={styles.serviceBox}>
          <div>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408712/portfolio/247883425-05d951c2-9429-4122-b80a-c7ca26dda2b8_w0izin.png' alt='' />
          </div>
          <div>
            <p>Lorsque l'utilisateur ajoute des articles au panier en spécifiant la quantité, il est invité à se connecter pour l'authentification. Après s'être connecté, les informations du panier de l'utilisateur sont affichées. La partie la plus difficile de ce projet a été de différencier entre les administrateurs, les utilisateurs réguliers et les utilisateurs connectés à des fins d'authentification. Les utilisateurs connectés peuvent effectuer diverses actions telles que la suppression ou la mise à jour de leurs profils, adresses de livraison et le contenu de leur panier grâce à des appels API.</p>
          </div>
        </div>
        <div className={styles.serviceBox}>
          <div>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408712/portfolio/247883206-e3c8a817-ebf8-4468-8c2c-26e33e5acd61_id6oq9.png' alt='' />
          </div>
          <div>
            <p>Le site e-commerce (version japonaise). API,
              opérations CRUD, composants et middleware,
              mise en œuvre de l'authentification pour les
              administrateurs et les utilisateurs.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kanraku