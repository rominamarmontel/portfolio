import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { GrGithub } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { AiFillMail } from "react-icons/ai";
import { useState } from 'react';
import { VscMail } from "react-icons/vsc";
import { VscMailRead } from "react-icons/vsc";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.Contact}>
      <div className={styles.layer}>
        <div className={styles.contact_container}>
          <div className={styles.contact_image}>
            <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693477165/portfolio/IMG_1094_cro4mb.jpg' alt='' />
          </div>
          <div className={styles.contactItem}>
            <div className={styles.title}>
              <h2>CONTACT</h2>
            </div>
            <div className={styles.merci}>
              <div><h3>Merci de me contacter, </h3></div>
              <div className={styles.link_icons}>
                <Link to='https://www.linkedin.com/in/hiromi-varnier/' target='_blank' className={styles.linkedin_icons}><TiSocialLinkedinCircular /></Link>
                <Link to='https://github.com/rominamarmontel/' target='_blank' className={styles.github_icons} ><GrGithub /></Link>
              </div>
            </div>
            <div className={styles.description}>
              <div>
                <div className={styles.contactme}>
                  <button
                    onClick={() => window.location = 'mailto:romi.varnier@gmail.com'}
                    className={styles.mailme}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered ? <VscMailRead className={styles.mail_icons} /> : <VscMail className={styles.mail_icons} />}
                  </button>
                </div>
                <div className={styles.link}>
                  <Link to='https://drive.google.com/file/d/1JZJQaiw-qAtF-l4Vzk6wIyiLWl1nwCA_/view?usp=sharing' className={styles.link_cv} target='_blank'>VOIR MON CV</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact