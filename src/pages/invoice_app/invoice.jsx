import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { FaGithub } from 'react-icons/fa';

const Invoice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className={styles.Invoice}>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.text}>
            <p className={styles.date}>Déc 2023</p>
            <div className={styles.titleTop}>
              <h2 className={styles.title}>Invoicer App</h2>
              <div className={styles.sns}>
                <Link to='https://github.com/rominamarmontel/invoicer_app' target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
              </div>
            </div>
            <div className={styles.rightbox}>
              <div className={styles.imagebox1}>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704133453/portfolio/Screenshot_2024-01-01_at_19.23.51_iyeogv.png' alt='' />
              </div>
              <div className={styles.textIntro}>
                <p>La création de cette application a été initiée lorsque mon amie m'a demandé de créer une quantité considérable de « Factures » avec Excel. En écoutant les demandes de mon amie, j'ai pensé qu'une telle application pourrait rendre les choses plus faciles. Bien sûr, j'ai utilisé Next.js et TypeScript pour le framework. Au début, la difficulté principale résidait en réalité dans le routage. En plaçant la page de connexion sur la page d'accueil, je ne savais pas où créer le tableau de bord. Les avantages de Next.js résident dans la facilité de lisibilité entre le front-end et le back-end, ainsi que dans la réactivité de la prise en charge. Cependant, dans le cas présent, le nombre important de modèles et les questions liées à la façon de les connecter avec "populate", ainsi que les erreurs TypeScript associées, ont constitué des défis majeurs.</p>
                <p className={styles.textEnglish}>The creation of this application was initiated when my friend asked me to create a considerable number of 'Factures' (invoices) using Excel. Listening to my friend's requests, I thought that such an application could make things easier. Of course, I used Next.js and TypeScript for the framework. Initially, the main challenge was actually in routing. Placing the login page on the homepage, I didn't know where to create the dashboard, so I searched for resources. I used tailwind.css for CSS, and this time, I adopted a module called "react-to-print" for the first time.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.serviceBox}>
            <div className={styles.imagebox2}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704133392/portfolio/Screenshot_2024-01-01_at_18.05.15_zfz5jp.png' alt='' />
            </div>
            <div className={styles.boxText}>
              <h3 className={styles.subtitle}>TECHNOLOGIE</h3>
              <p>NextJS, TypeScript, MongoDB, HTML, CSS, Mongoose, Postman, Tailwind.css</p>
              <h3 className={styles.subtitle}>CI/CD</h3>
              <p>Vercel/Render</p>
            </div>
          </div>
          <div className={styles.serviceBox}>
            <div className={styles.imagebox3}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704133377/portfolio/Screenshot_2024-01-01_at_17.16.11_kqzjtf.png' alt='' />
            </div>
            <div className={styles.boxText}>
              <p>Résponsive, authentification pour les
                administrateurs, API, opérations CRUD.</p>
              <p>Création des modules pour générer automatiquement le numéro de facture, calculer le sous-total, la commission et le total, afin de permettre une personnalisation individuelle.. </p>
            </div>
          </div>
          <div className={styles.serviceBox}>
            <div className={styles.imagebox4}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704133351/portfolio/Screenshot_2024-01-01_at_19.16.03_ksspn2.png' alt='' />
            </div>
            <div className={styles.boxText}>
              <p>En utilisant le module "react-to-print", il est possible de créer un fichier PDF et de l'imprimer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice