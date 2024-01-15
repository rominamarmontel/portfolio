import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import { PiLinkSimpleFill } from 'react-icons/pi'

const ModalImperNext = ({ show, setShow }) => {
  if (show) {
    return (
      <div id='overlay'>
        <div id='modal_content'>
          <button onClick={() => setShow(false)} className='modal_closeButton'>
            X
          </button>
          <div className='modal_container'>
            <div className='modal_left flex flex-col'>
              <div className='modal_text'>

                <div className='modal_fade'>
                  <h3>Impermanence Films <span>- Next.js 13 version -</span></h3>
                  <div className='modal_link'>
                    <Link to='https://github.com/rominamarmontel/impermanence-next/tree/main' target="_blank" rel="noopener noreferrer"><FaGithub className='icons_github' /></Link>
                    <Link to='https://impermanencefilms-next.vercel.app/' target="_blank" rel="noopener noreferrer"><PiLinkSimpleFill className='icons_github' /></Link>
                  </div>
                </div>

                <div className='block fadeIn1500ms'>
                  <p><span>TECHNOLOGIE : </span>NodeJS, NextJS, MongoDB, HTML, CSS, Mongoose, Postman, Cloudinary, TailwindCss</p>
                  <p><span>CI/CD : </span>Vercel</p>
                  <p>Pour maîtriser TypeScript et Next.js, j'ai utilisé le site "Impermanence Films" que j'avais précédemment créé avec React et Express. La facilité de création et de gestion de bases de données uniquement côté frontend, ainsi que la création aisée de routes, rendent Next.js prometteur pour l'avenir. Bien que j'aie utilisé MongoDB cette fois-ci, je prévois de découvrir Prisma lors de la prochaine itération.</p>
                </div>
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1700492761/nextImpermanence_images/euwsaydo4v10idqovlk9.png' alt='' />
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1700493865/nextImpermanence_images/Screenshot_2023-11-20_at_16.22.38_oz2cly.png' alt='' />
              </div>
            </div>
            <div className='modal_right flex flex-col'>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704802285/portfolio/Screenshot_2024-01-09_at_13.11.06_brxgj3.png' alt='' />
              </div>

              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1700493874/nextImpermanence_images/Screenshot_2023-11-20_at_16.23.27_uznlyx.png' alt='' />
              </div>
              <div className='modal_text'>
                <p>Résponsive, authentification pour les
                  administrateurs, API, opérations CRUD, bascule avec ObjectId pour deux langues.Pour basculer entre les pages en français et en anglais, j'ai utilisé createContext pour gérer l'état et j'ai exploité Tailwind CSS pour créer rapidement et facilement un site web réactif. Bien que la maîtrise de TypeScript soit également un objectif, j'ai cherché à le rendre convivial en le regroupant dans un seul composant.Cette fois-ci, j'ai utilisé pour la première fois le module next-cloudinary de Cloudinary en frontend. Les interactions avec l'utilisateur sont simples, et l'aspect visuel est également intuitif.</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default ModalImperNext