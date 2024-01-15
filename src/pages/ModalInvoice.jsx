import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';

const ModalInvoice = ({ show, setShow }) => {
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
                  <h3>Invoicer App</h3>
                  <Link to='https://github.com/rominamarmontel/invoicer_app' target="_blank" rel="noopener noreferrer">
                    <FaGithub className='icons_github' />
                  </Link>
                </div>

                <p><span>TECHNOLOGIE : </span>NextJS, TypeScript, MongoDB, HTML, CSS, Mongoose, Postman, Tailwind.css</p>
                <div className='block fadeIn1500ms'>
                  <p><span>CI/CD : </span>Vercel</p>
                  <p>La création de cette application a été initiée lorsque mon amie m'a demandé de créer une quantité considérable de « Factures » avec Excel. En écoutant les demandes de mon amie, j'ai pensé qu'une telle application pourrait rendre les choses plus faciles. Bien sûr, j'ai utilisé Next.js et TypeScript pour le framework. Au début, la difficulté principale reste en réalité dans le "Routing". En plaçant la page de connexion sur la page d'accueil, je ne savais pas où créer le tableau de bord. Les avantages de Next.js résident dans la facilité de lisibilité entre le front-end et le back-end, ainsi que dans la réactivité de la prise en charge. Cependant, dans le cas présent, le nombre important de modèles et les questions liées à la façon de les connecter avec la "relation", ainsi que les erreurs TypeScript associées, ont constitué des défis majeurs.</p>
                </div>
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704133351/portfolio/Screenshot_2024-01-01_at_19.16.03_ksspn2.png' alt='' />
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704133377/portfolio/Screenshot_2024-01-01_at_17.16.11_kqzjtf.png' alt='' />
              </div>
            </div>
            <div className='modal_right flex flex-col'>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704139436/portfolio/Screenshot_2024-01-01_at_20.26.02_k6wy8x.png' alt='' />
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704133392/portfolio/Screenshot_2024-01-01_at_18.05.15_zfz5jp.png' alt='' />
              </div>
              <div className='modal_text'>
                <p>Résponsive, authentification pour les administrateurs, API, opérations CRUD.Création des modules pour générer automatiquement le numéro de facture, calculer le sous-total, la commission et le total, afin de permettre une personnalisation individuelle.. En utilisant le module "react-to-print", il est possible de créer un fichier PDF et de l'imprimer.</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default ModalInvoice