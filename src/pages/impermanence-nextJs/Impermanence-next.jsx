import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { FaGithub } from 'react-icons/fa';
import { PiLinkSimpleFill } from 'react-icons/pi'

const ImpermanenceNextJs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className={styles.Impermanence}>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.text}>
            <p className={styles.date}>Nov 2023</p>
            <div className={styles.titleTop}>
              <h2 className={styles.title}>Impermanence Films - Next.js 13 version -</h2>
              <div className={styles.sns}>
                <Link to='https://github.com/rominamarmontel/impermanence-next/tree/main' target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
                <Link to='https://impermanencefilms-next.vercel.app/' target="_blank" rel="noopener noreferrer"><PiLinkSimpleFill /></Link>
              </div>
            </div>
            <div className={styles.rightbox}>
              <div className={styles.imagebox1}>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1700492761/nextImpermanence_images/euwsaydo4v10idqovlk9.png' alt='' />
              </div>
              <div className={styles.textIntro}>
                <p>Pour maîtriser TypeScript et Next.js, j'ai utilisé le site "Impermanence Films" que j'avais précédemment créé avec React et Express. La facilité de création et de gestion de bases de données uniquement côté frontend, ainsi que la création aisée de routes, rendent Next.js prometteur pour l'avenir. Bien que j'aie utilisé MongoDB cette fois-ci, je prévois de découvrir Prisma lors de la prochaine itération.</p>
                <p className={styles.textEnglish}>To master TypeScript and Next.js, I leveraged the "Impermanence Films" site I previously created with React and Express. The ease of creating and managing databases solely on the frontend, along with the straightforward route creation, makes Next.js promising for the future. While I used MongoDB this time, I plan to explore Prisma in the next iteration.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.serviceBox}>
            <div className={styles.imagebox2}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693496833/portfolio/247889755-ca581ffb-9bbc-4605-abf4-3ea73ee22219_1_1_etplbx.png' alt='' />
            </div>
            <div className={styles.boxText}>
              <h3 className={styles.subtitle}>TECHNOLOGIE</h3>
              <p>NodeJS, NextJS, MongoDB, HTML, CSS, Mongoose, Postman, Cloudinary, TailwindCss</p>
              <h3 className={styles.subtitle}>CI/CD</h3>
              <p>Vercel</p>
            </div>
          </div>
          <div className={styles.serviceBox}>
            <div className={styles.imagebox3}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1700493865/nextImpermanence_images/Screenshot_2023-11-20_at_16.22.38_oz2cly.png' alt='' />
            </div>
            <div className={styles.boxText}>
              <p>Résponsive, authentification pour les
                administrateurs, API, opérations CRUD, bascule avec ObjectId pour deux langues.</p>
              <p>Pour basculer entre les pages en français et en anglais, j'ai utilisé createContext pour gérer l'état et j'ai exploité Tailwind CSS pour créer rapidement et facilement un site web réactif. Bien que la maîtrise de TypeScript soit également un objectif, j'ai cherché à le rendre convivial en le regroupant dans un seul composant.</p>
            </div>
          </div>
          <div className={styles.serviceBox}>
            <div className={styles.imagebox4}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1700493874/nextImpermanence_images/Screenshot_2023-11-20_at_16.23.27_uznlyx.png' alt='' />
            </div>
            <div className={styles.boxText}>
              <p>Cette fois-ci, j'ai utilisé pour la première fois le module next-cloudinary de Cloudinary en frontend. Les interactions avec l'utilisateur sont simples, et l'aspect visuel est également intuitif.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImpermanenceNextJs