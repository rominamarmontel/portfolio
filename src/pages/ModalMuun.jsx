import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import { PiLinkSimpleFill } from 'react-icons/pi'

const ModalMuun = ({ show, setShow }) => {
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
                    <h3>Muuñ official website</h3>
                    <Link to='https://www.muun.fr/' target="_blank" rel="noopener noreferrer" >
                      <PiLinkSimpleFill className='icons_github' />
                    </Link>
                  </div>
                </Fade>
                <div className='block fadeIn1500ms'>
                  <p><span>TECHNOLOGIE : </span>WordPress, Elementor</p>
                  <p><span>CI/CD : </span>Vercel</p>
                  <p>J'ai ajouté une version en japonais à la boutique en ligne existante "Muuñ". C'était ma première expérience avec le plugin Elementor pour le logiciel de gestion de contenu WordPress.</p>
                </div>
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1696672048/portfolio/Screenshot_2023-10-07_at_11.45.17_1_soo4jj.png' alt='' />
              </div>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704805095/portfolio/www.muun.fr_ja_shop_new-in-ja_maxi-altair-ecru-hdl-white-straps__Nest-Hub-Max_dmypwu.jpg' alt='' />
              </div>
            </div>
            <div className='modal_right flex flex-col'>
              <div className='modal_imagebox'>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704804852/portfolio/www.muun.fr_ja_about__Nest-Hub-Max_-_2_xweu8x.jpg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default ModalMuun