import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import ModalCloseButton from '../components/ModalCloseButton';
import { useLanguage } from '../components/LanguageContext';

const ModalInvoice = ({ show, setShow }) => {
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
                  <h3>Invoicer App</h3>
                  <Link to='https://github.com/rominamarmontel/invoicer_app' target="_blank" rel="noopener noreferrer">
                    <FaGithub className='icons_github' />
                  </Link>
                </div>

                <p><span>TECHNOLOGIE : </span>NextJS, TypeScript, MongoDB, HTML, CSS, Mongoose, Postman, Tailwind.css</p>
                <div className='block fadeIn1500ms'>
                  <p><span>CI/CD : </span>Vercel</p>
                  <p>{isEnglish ? `The creation of this application was initiated when my friend asked me to create a substantial amount of "Invoices" using Excel. Listening to my friend's requests, I thought such an application could make things easier. Of course, I used Next.js and TypeScript for the framework. Initially, the main difficulty actually lies in the routing. By placing the login page on the homepage, I didn't know where to create the dashboard. The advantages of Next.js lie in the ease of readability between the front-end and the back-end, as well as the responsiveness it supports. However, in this case, the significant number of templates and the issues related to how to connect them with the "relationship," along with the associated TypeScript errors, posed major challenges.` : `La création de cette application a été initiée lorsque mon amie m'a demandé de créer une quantité considérable de ”Factures” avec Excel. En écoutant les demandes de mon amie, j'ai pensé qu'une telle application pourrait rendre les choses plus faciles. Bien sûr, j'ai utilisé Next.js et TypeScript pour le framework. Au début, la difficulté principale reste en réalité dans le ”Routing”. En plaçant la page de connexion sur la page d'accueil, je ne savais pas où créer le tableau de bord. Les avantages de Next.js résident dans la facilité de lisibilité entre le front-end et le back-end, ainsi que dans la réactivité de la prise en charge. Cependant, dans le cas présent, le nombre important de modèles et les questions liées à la façon de les connecter avec la <<relation>>, ainsi que les erreurs TypeScript associées, ont constitué des défis majeurs.`}</p>
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
                <p>{isEnglish ? `Responsive design, authentication for administrators, API, CRUD operations. Creation of modules to automatically generate the invoice number, calculate the subtotal, commission, and total, allowing for individual customization. Using the "react-to-print" module, it is possible to create a PDF file and print it.` : `Résponsive, authentification pour les administrateurs, API, opérations CRUD.Création des modules pour générer automatiquement le numéro de facture, calculer le sous-total, la commission et le total, afin de permettre une personnalisation individuelle.. En utilisant le module "react-to-print", il est possible de créer un fichier PDF et de l'imprimer.`}</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default ModalInvoice