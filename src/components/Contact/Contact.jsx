import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { BsTelephoneFill } from "react-icons/bs"
import { IoMdMail } from "react-icons/io"
import { IoDocumentText } from "react-icons/io5"
import { GrGithub } from "react-icons/gr"
import { FaLinkedinIn } from "react-icons/fa"
import { Fade } from "react-awesome-reveal"
import { useLanguage } from '../LanguageContext'

const Contact = () => {
  const { isEnglish } = useLanguage()

  return (
    <div className={styles.Contact}>
      <div className={styles.layer}>
        <div className={styles.contact_container}>
          <div className={styles.contact_image}>
            <img src="https://res.cloudinary.com/dyu65fpse/image/upload/v1696453139/portfolio/IMG_6175_1_hm7v0k.jpg" alt="" />
          </div>
          <div className={styles.contactItem}>
            <div className={styles.title}>
              <Fade>
                <h3>CONTACT</h3>
              </Fade>
            </div>
            <div className={`${styles.wrap} ${styles.between}`}>
              <div className={styles.descriptionA}>
                <div>
                  <div className={styles.icons_container}>
                    <Link className={styles.circle_icons} to='tel:+33626619805'>
                      <BsTelephoneFill className={styles.tel_icons} />
                      <p>+33 (0)6 26 61 98 05</p>
                    </Link>
                  </div>
                  <div className={styles.icons_container}>
                    <Link className={styles.circle_icons} to="mailto:romi.varnier@gmail.com">
                      <IoMdMail className={styles.mail_icons} />
                      <p>romi.varnier@gmail.com</p>
                    </Link>
                  </div>
                  <div className={styles.icons_container}>
                    <Link to={isEnglish ? 'https://drive.google.com/file/d/1jhjNupfQv-fxvSfVKVxGbjiOa1cZMgdo/view?usp=sharing' : 'https://drive.google.com/file/d/1jhjNupfQv-fxvSfVKVxGbjiOa1cZMgdo/view?usp=sharing'} target='_blank' className={styles.circle_icons}>
                      <IoDocumentText className={styles.doc_icons} />
                      <p>{isEnglish ? 'See my CV' : 'Voir mon CV'}</p>
                    </Link>
                  </div>
                  <div className='icons_conatiner'>
                    <Link to='https://www.linkedin.com/in/hiromi-varnier/' target='_blank' className='linkedin_icons'><FaLinkedinIn /></Link>
                    <Link to='https://github.com/rominamarmontel/' target='_blank' className='github_icons'><GrGithub /></Link>
                  </div>
                </div>
              </div>
              <div className={styles.descriptionB}>
                <div className={styles.map_container}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673384.6340080858!2d2.3884959524277956!3d48.75499049517527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e1c403a68c17%3A0x10b82c3688b2570!2s%C3%8Ele-de-France!5e0!3m2!1sen!2sfr!4v1705919892992!5m2!1sen!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                  <small>{isEnglish ? 'On site & Hybrid: I am available in Paris and its surroundings.' : 'Sur site & Hybride : Je suis disponible à Paris et ses alentours.'}</small><br />
                  <small>{isEnglish ? 'Remote work: I am available anywhere in the world.' : "Télétravail : Je suis disponible à n'importe où dans le monde."}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact