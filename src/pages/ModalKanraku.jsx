import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import { PiLinkSimpleFill } from 'react-icons/pi'
import ModalCloseButton from '../components/ModalCloseButton';

const ModalKanraku = ({ show, setShow }) => {
  if (show) {
    return (
      <div id='overlay'>
        <div id='modal_content'>
          <ModalCloseButton setShow={setShow} show={show} />
          <div className='modal_container'>
            <div className='modal_left flex flex-col'>
              <div className='modal_text'>

                <div className='modal_fade'>
                  <h3>Kanraku Hosai</h3>
                  <div className='modal_link'>
                    <Link to='https://github.com/rominamarmontel/nagasekikaku-frontend' target="_blank" rel="noopener noreferrer"><FaGithub className='icons_github' /></Link>
                    <Link to='https://hosai.netlify.app/' target="_blank" rel="noopener noreferrer"><PiLinkSimpleFill className='icons_github' /></Link>
                  </div>
                </div>

                <div className='block fadeIn1500ms'>
                  <p><span>TECHNOLOGIE : </span>NodeJS, ExpressJS, ReactJS, MongoDB, HTML,
                    CSS,Mongoose, Postman, Cloudinary</p>
                  <p><span>CI/CD : </span>Netlify/Render</p>
                  <p>Pour le projet final chez Ironhack, j'ai choisi de travailler sur une tâche d'e-commerce. J'ai utilisé React pour le frontend, Express pour le backend, et MongoDB pour la base de données. Après l'obtention de mon diplôme, j'ai complètement redessiné la version originale en anglais et créé une nouvelle version en japonais. Bien que je n'aie pas eu beaucoup de temps au départ, j'ai saisi cette occasion pour repenser et améliorer la conception, y compris le panneau d'administration, le panier d'achat et le processus de paiement.</p>
                </div>
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693496529/portfolio/247886319-dbe3b046-f892-4873-b309-0fa675df6983_1_1_etymtv.png' alt='' />
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408712/portfolio/247883206-e3c8a817-ebf8-4468-8c2c-26e33e5acd61_id6oq9.png' alt='' />
              </div>
            </div>
            <div className='modal_right flex flex-col'>

              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704807206/hosai.netlify.app__Nest-Hub-Max_-_3_qsubeo.jpg' alt='' />
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408712/portfolio/247883425-05d951c2-9429-4122-b80a-c7ca26dda2b8_w0izin.png' alt='' />
              </div>

              <div className='modal_text'>
                <p>Lorsque l'utilisateur ajoute des articles au panier en spécifiant la quantité, il est invité à se connecter pour l'authentification. Après s'être connecté, les informations du panier de l'utilisateur sont affichées. La partie la plus difficile de ce projet a été de différencier entre les administrateurs, les utilisateurs réguliers et les utilisateurs connectés à des fins d'authentification. Les utilisateurs connectés peuvent effectuer diverses actions telles que la suppression ou la mise à jour de leurs profils, adresses de livraison et le contenu de leur panier grâce à des appels API.Le site e-commerce (version japonaise). API,
                  opérations CRUD, composants et middleware,
                  mise en œuvre de l'authentification pour les
                  administrateurs et les utilisateurs.</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default ModalKanraku