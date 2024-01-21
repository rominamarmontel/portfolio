import styles from './styles.module.css'
import React, { useState } from "react"
import ModalInvoice from '../../pages/ModalInvoice'
import ModalImperNext from '../../pages/ModalImperNext'
import ModalMuun from '../../pages/ModalMuun'
import ModalImper from '../../pages/ModalImper'
import ModalKanraku from '../../pages/ModalKanraku'
import ModalExquisite from '../../pages/ModalExquisite'
import ModalMonkey from '../../pages/ModalMonkey'
import { Fade } from "react-awesome-reveal"
import { useLanguage } from '../LanguageContext'

const Works = () => {
  const [showInvoice, setShowInvoice] = useState(false)
  const [showImperNext, setShowImperNext] = useState(false)
  const [showMuun, setShowMuun] = useState(false)
  const [showImper, setShowImper] = useState(false)
  const [showKanraku, setShowKanraku] = useState(false)
  const [showExquisite, setShowExquisite] = useState(false)
  const [showMonkey, setShowMonkey] = useState(false)
  const { isEnglish } = useLanguage()

  return (
    <div className={styles.Works}>
      <div className={styles.layer}>
        <div className={styles.worksbox}>
          <div className={styles.work_container_color}>
            <div className={styles.title}>
              <Fade>
                <h3>{isEnglish ? 'PROJECTS' : 'PROJETS'}</h3>
              </Fade>
            </div>
          </div>
          <button className={styles.work_container} onClick={() => setShowInvoice(true)}>
            <div className={styles.work_image}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704827842/Screenshot-2024-01-09-at-20.15.43_nck8jw.jpg' alt='invoice' />
              <div className={styles.mask}>
                <div className={styles.caption}>Invoicer App<br />{isEnglish ? 'Dec 2023' : 'Déc 2023'}<br />{isEnglish ? 'Web Application' : 'Application Web'}<br />TypeScript / Next.JS / MongoDB</div>
              </div>
            </div>
          </button>
          {showInvoice && (
            <ModalInvoice show={showInvoice} setShow={setShowInvoice} />
          )}

          <button className={styles.work_container} onClick={() => setShowImperNext(true)}>
            <div className={styles.work_image}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704823493/Screenshot_2024-01-09_at_19.04.26_cwdvwx.png' alt='imper_next' />
              <div className={styles.mask}>
                <div className={styles.caption}>Impermanence Films -NextJS ver.-<br />Nov 2023<br />{isEnglish ? 'Web application' : 'Application Web'}<br />TypeScript / Next.JS / MongoDB</div>
              </div>
            </div>
          </button>
          {showImperNext && (
            <ModalImperNext show={showImperNext} setShow={setShowImperNext} />
          )}

          <button className={styles.work_container} onClick={() => setShowMuun(true)}>
            <div className={styles.work_image}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704822762/Screenshot-2024-01-09-at-18.48.06_gvtwzk.jpg' alt='muun' />
              <div className={styles.mask}>
                <div className={styles.caption}>Muun e-commerce web site<br />Sep 2023<br />e-commerce<br />WordPress / Elementor</div>
              </div>
            </div>
          </button>
          {showMuun && (
            <ModalMuun show={showMuun} setShow={setShowMuun} />
          )}

          <button className={styles.work_container} onClick={() => setShowImper(true)}>
            <div className={styles.work_image}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704822887/Screenshot-2024-01-09-at-18.48.06_acjxri.jpg' alt='impermanencefilms' />
              <div className={styles.mask}>
                <div className={styles.caption}>Impermanence Films<br />{isEnglish ? 'Mai - July 2023' : 'Mai - Juil 2023'}<br />{isEnglish ? 'Web application' : 'Application web'}<br />React.JS(Vite) / Node.JS(Express.JS) / MongoDB</div>
              </div>
            </div>
          </button>
          {showImper && (
            <ModalImper show={showImper} setShow={setShowImper} />
          )}

          <button className={styles.work_container} onClick={() => setShowKanraku(true)}>
            <div className={styles.work_image}>
              {/* <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693496603/portfolio/247885359-e249cde4-af45-4051-8426-edf21bc77785_1_1_u49f86.png' alt='kanraku' /> */}
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704823834/Screenshot-2024-01-09-at-19.07.49_mgln4l.jpg' alt='kanraku' />
              <div className={styles.mask}>
                <div className={styles.caption}>KANRAKU HOSAI<br />Mars 2023<br />{isEnglish ? 'Final Project@IRONHACK' : 'Projet final@IRONHACK'}<br />React.JS / Node.JS(Express.JS) / MongoDB</div>
              </div>
            </div>
          </button>
          {showKanraku && (
            <ModalKanraku show={showKanraku} setShow={setShowKanraku} />
          )}

          <button className={styles.work_container} onClick={() => setShowExquisite(true)}>
            <div className={styles.work_image}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704824104/Screenshot-2024-01-09-at-18.48.06_gaqwet.jpg' alt='exquisite' />
              <div className={styles.mask}>
                <div className={styles.caption}>Exquisite Story<br />Feb. 2023<br />{isEnglish ? 'Group project@IRONHACK' : 'Équipe projet@IRONHACK'}<br />Node.JS(Express.JS) / Handlebars / MongoDB</div>
              </div>
            </div>
          </button>
          {showExquisite && (
            <ModalExquisite show={showExquisite} setShow={setShowExquisite} />
          )}

          <button className={styles.work_container} onClick={() => setShowMonkey(true)}>
            <div className={styles.work_image}>
              <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704824479/Screenshot-2024-01-09-at-18.42.31_wlxvcn.jpg' alt='happymonkey' />
              <div className={styles.mask}>
                <div className={styles.caption}>WIN x WIN HAPPY MONKEY<br />Jan 2023<br />{isEnglish ? 'Solo project@IRONHACK' : 'Projet solo@IRONHACK'}<br />HTML / CSS / JavaScript</div>
              </div>
            </div>
          </button>
          {showMonkey && (
            <ModalMonkey show={showMonkey} setShow={setShowMonkey} />
          )}

          <div className={styles.work_container_color2}></div>
        </div>
      </div >
    </div >
  )
}

export default Works