import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
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
              <div className={styles.description}>
                <div>
                  <div className={styles.contactme}>
                    <div className={styles.icons_container}>
                      <span className={styles.circle_icons}><BsTelephoneFill /></span>
                      <p>+33 (0)6 26 61 98 05</p>
                    </div>
                  </div>
                  <div className={styles.icons_container}>
                    <Link className={styles.circle_icons} to="mailto:romi.varnier@gmail.com">
                      <IoMdMail />
                    </Link>
                    <p>romi.varnier@gmail.com</p>
                  </div>
                  <div className={styles.icons_container}>
                    <Link to='https://drive.google.com/file/d/1JZJQaiw-qAtF-l4Vzk6wIyiLWl1nwCA_/view?usp=sharing' target='_blank' className={styles.circle_icons}><IoDocumentText /></Link>
                    <p>Voir mon CV</p>
                  </div>
                </div>
              </div>
              <div className='icons_conatiner'>
                <Link to='https://www.linkedin.com/in/hiromi-varnier/' target='_blank' className='linkedin_icons'><FaLinkedinIn /></Link>
                <Link to='https://github.com/rominamarmontel/' target='_blank' className='github_icons'><GrGithub /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact