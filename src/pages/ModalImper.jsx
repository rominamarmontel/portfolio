import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import { PiLinkSimpleFill } from 'react-icons/pi'
import ModalCloseButton from '../components/ModalCloseButton';

const ModalImper = ({ show, setShow }) => {
  if (show) {
    return (
      <div id='overlay'>
        <div id='modal_content'>
          <ModalCloseButton setShow={setShow} show={show} />
          <div className='modal_container'>
            <div className='modal_left flex flex-col'>
              <div className='modal_text'>

                <div className='modal_fade'>
                  <h3>Impermanence Films</h3>
                  <div className='modal_link'>
                    <Link to='https://github.com/rominamarmontel/impermanence-front' target="_blank" rel="noopener noreferrer"><FaGithub className='icons_github' /></Link>
                    <Link to='https://www.impermanencefilms.org/' target="_blank" rel="noopener noreferrer"><PiLinkSimpleFill className='icons_github' /></Link>
                  </div>
                </div>

                <div className='block fadeIn1500ms'>
                  <p><span>TECHNOLOGIE : </span>NodeJS, ExpressJS, ReactJS, MongoDB, HTML, CSS, Mongoose, Postman, Cloudinary</p>
                  <p><span>CI/CD : </span>Vercel/Render</p>
                  <p>Après avoir obtenu mon diplôme d'Ironhack, j'ai créé un site web pour l'association 'impermanence films'. Le site utilise React en frontend, Express en backend et MongoDB comme base de données. Il présente des introductions aux films produits et est affiché en versions française et anglaise avec un design réactif. De plus, il permet aux administrateurs de publier de nouveaux films.</p>
                </div>
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408713/portfolio/247889551-f2b4cfbb-f470-4bcd-9903-ce4ee391684a_edited_cmxrho.jpg' alt='' />
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704805861/portfolio/www.impermanencefilms.org_films_Nest-Hub-Max_x8okae.jpg' alt='' />
              </div>
            </div>
            <div className='modal_right flex flex-col'>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704805875/portfolio/www.impermanencefilms.org_films_Nest-Hub-Max_-_1_p3xeup.jpg' alt='' />
              </div>

              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408715/portfolio/252614548-bc7ab2f0-38fd-431a-a9eb-6894d3e5fa83_zb2fle.png' alt='' />
              </div>
              <div className='modal_text'>
                <p>Résponsive, authentification pour les
                  administrateurs, API, opérations CRUD, bascule avec ObjectId pour deux langues. Mettre en œuvre la fonctionnalité d'inscription et de connexion pour le panneau d'administration. J'ai essayé d'utiliser le package npm @mui/x-data-grid et j'ai essayé d'utiliser SASS au lieu de CSS pour améliorer la lisibilité de l'affichage de la liste des films.En utilisant React, React Hooks et axios, effectuez des opérations CRUD pour créer de nouveaux films et mettre à jour les films existants.</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default ModalImper