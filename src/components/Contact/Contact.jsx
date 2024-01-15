import { Link } from 'react-router-dom'
import styles from './styles.module.css'
// import { GiRotaryPhone } from 'react-icons/gi'
import { SiMailgun } from 'react-icons/si'

const Contact = () => {
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
            <h3>Merci de me contacter, </h3>
            <div className={styles.description}>
              <div>
                <div className={styles.contactme}>
                  <button onClick={() => window.location = 'mailto:romi.varnier@gmail.com'} className={styles.mailme}>
                    <p>par &nbsp;M<SiMailgun style={{ color: "#c4010a" }} />IL</p>
                  </button>
                </div>
                <div className={styles.link}>
                  <Link href='https://drive.google.com/file/d/1JZJQaiw-qAtF-l4Vzk6wIyiLWl1nwCA_/view?usp=sharing' className={styles.link_cv} target='_blank'>VOIR MON CV</Link>
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