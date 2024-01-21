import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { PiLinkSimpleFill } from 'react-icons/pi'
import ModalCloseButton from '../components/ModalCloseButton'
import { useLanguage } from '../components/LanguageContext'

const ModalKanraku = ({ show, setShow }) => {
  const { isEnglish } = useLanguage()

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
                  <p>{isEnglish ? `For the final project at Ironhack, I chose to work on an e-commerce task. I used React for the frontend, Express for the backend, and MongoDB for the database. After graduating, I completely redesigned the original English version and created a new version in Japanese. Although I didn't have much time initially, I seized this opportunity to rethink and enhance the design, including the admin panel, shopping cart, and payment process.` : `Pour le projet final chez Ironhack, j'ai choisi de travailler sur une tâche d'e-commerce. J'ai utilisé React pour le frontend, Express pour le backend, et MongoDB pour la base de données. Après l'obtention de mon diplôme, j'ai complètement redessiné la version originale en anglais et créé une nouvelle version en japonais. Bien que je n'aie pas eu beaucoup de temps au départ, j'ai saisi cette occasion pour repenser et améliorer la conception, y compris le panneau d'administration, le panier d'achat et le processus de paiement.`}</p>
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
                <p>{isEnglish ? `` : `When the user adds items to the cart by specifying the quantity, they are prompted to log in for authentication. After logging in, the user's cart information is displayed. The most challenging part of this project was differentiating between administrators, regular users, and authenticated users for authentication purposes. Authenticated users can perform various actions such as deleting or updating their profiles, delivery addresses, and cart content through API calls. The e-commerce site (Japanese version). API, CRUD operations, components and middleware, implementation of authentication for administrators and users.`}</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default ModalKanraku