import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import { PiLinkSimpleFill } from 'react-icons/pi'

const ModalExquisite = ({ show, setShow }) => {
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
                <Fade left>
                  <div className='modal_fade'>
                    <h3>EXQUISITE STORY APP</h3>
                    <div className='modal_link'>
                      <Link to='https://github.com/rominamarmontel/collaborative-project-rm' target="_blank" rel="noopener noreferrer"><FaGithub className='icons_github' /></Link>
                      <Link to='https://exquisite-stories-x5xa.onrender.com/' target="_blank" rel="noopener noreferrer"><PiLinkSimpleFill className='icons_github' /></Link>
                    </div>
                  </div>
                </Fade>
                <div className='block fadeIn1500ms'>
                  <p><span>TECHNOLOGIE : </span>NodeJs, ExpressJs, Handlebars, MongoDB, CSS</p>
                  <p><span>CI/CD : </span>Render</p>
                  <p>Pendant les trois mois du bootcamp chez Ironhack, nous avons eu trois projets au total. Ce travail marque notre tout premier projet collaboratif. Nous avons utilisé Express et hbs, avec MongoDB comme base de données. S'inspirant du jeu classique "Exquisite Stories", les utilisateurs peuvent publier des histoires auxquelles d'autres participants peuvent continuer le récit. De plus, les utilisateurs peuvent modifier ou supprimer leurs propres contributions tant qu'aucune suite n'a été créée. La participation au jeu nécessite une connexion.</p>
                </div>
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408714/portfolio/247888287-aee68f84-6d60-4d20-a8ef-9d061462254d_1_veyqpx.png' alt='' />
              </div>
            </div>
            <div className='modal_right flex flex-col'>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693756190/Screenshot_2023-09-03_at_17.12.47_rtctxj.png' alt='exquisite2' />
              </div>
              <div className='modal_text'>
                <p>Exquisite Game with Story Creation.
                  Avec des fonctionnalités de connexion et de
                  déconnexion (Middlewares authentification), CRUD, création de modèles à
                  l'aide de données de démarrage (seed data),
                  Handlebars pour les modèles HTML.</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default ModalExquisite