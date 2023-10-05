import React from 'react'
import styles from './styles.module.css'
import { GiRotaryPhone } from 'react-icons/gi'
import { SiMailgun } from 'react-icons/si'

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.layer}>
        <h2>Contact</h2>
        <div className={styles.contactText}>
          <p>Merci de me contacter,</p>
          <p><SiMailgun style={{ color: "#c4010a" }} /> &nbsp;romi.varnier (a) gmail.com</p>
          <p><GiRotaryPhone style={{ color: "#c4010a", fontSize: "23px" }} />  &nbsp;06 26 61 98 05</p>
        </div>
      </div>
    </div>
  )
}

export default Contact