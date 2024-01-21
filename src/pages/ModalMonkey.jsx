import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import ModalCloseButton from '../components/ModalCloseButton'
import { useLanguage } from '../components/LanguageContext'

const ModalMonkey = ({ show, setShow }) => {
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
                  <h3>WIN x WIN HAPPY MONKEY</h3>
                  <Link to='https://github.com/rominamarmontel/numberGame' target="_blank" rel="noopener noreferrer"><FaGithub className='icons_github' /></Link>
                </div>
                <div className='block fadeIn1500ms'>
                  <p><span>TECHNOLOGIE : </span>JavaScript, HTML, CSS</p>
                  <p><span>CI/CD : </span></p>
                  <p>{isEnglish ? `This is my first project with JavaScript, CSS, and HTML at Ironhack. I chose TOUCH THE NUMBERS to understand class and DOM operations. To grasp how classes and the DOM work, the rules of my game had to be simple and easy to play. It is intended for children aged 3 to 5. That's why I chose it for my first JavaScript project at IRONHACK!! The rule is to quickly touch the numbers 1 to 9 in order, it's simple!!` : `Il s'agit de mon premier projet avec JavaScript, CSS et HTML à l'école Ironhack.J'ai choisi TOUCH THE NUMBERS pour comprendre les opérations de classe et de DOM.Pour comprendre comment fonctionnent les classes et le DOM, les règles de mon jeu devaient être simples et faciles à jouer. C'est destiné aux enfants de 3 à 5 ans. C'est pourquoi je l'ai choisi pour mon premier projet JavaScript à l'école IRONHACK !! La règle est de toucher rapidement les chiffres de 1 à 9 dans l'ordre, c'est simple !!`}</p>
                </div>
              </div>


            </div>
            <div className='modal_right flex flex-col'>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693498437/portfolio/216149858-deaa521f-1e9e-485e-8840-5633e1d4e3fa_wjcnpp.png' alt='' />
              </div>


            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default ModalMonkey