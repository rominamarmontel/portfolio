import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Works = () => {
  return (
    <div className={styles.Works}>
      <div className={styles.layer}>
        <h2>Works</h2>
        <div className={styles.worksbox}>
          <div className={styles.work}>
            <Link to='/invoicer_app'>
              <div>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1704133453/portfolio/Screenshot_2024-01-01_at_19.23.51_iyeogv.png' alt='invoice_app' />
                <h4>Invoicer App<br />
                  <span>Dec 2023</span></h4>
              </div>
            </Link>
          </div>
          <div className={styles.work}>
            <Link to='/impermanence-nextjs'>
              <div>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1700492761/nextImpermanence_images/euwsaydo4v10idqovlk9.png' alt='impermanence-nextJs' />
                <h4>Web application<br />
                  <span>Nov 2023</span></h4>
              </div>
            </Link>
          </div>
          <div className={styles.work}>
            <Link to='/muun'>
              <div>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693410505/portfolio/Screenshot_2023-08-30_at_17.48.06_yifnhr.png' alt='muun' />
                <h4>EC site<br />
                  <span>Aout - Present 2023</span>
                </h4>
              </div>
            </Link>
          </div>
          <div className={styles.work}>
            <Link to='/impermanence'>
              <div>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408713/portfolio/247889551-f2b4cfbb-f470-4bcd-9903-ce4ee391684a_edited_cmxrho.jpg' alt='impermanencefilms' />
                <h4>Web application<br />
                  <span>Mai - Juil 2023</span></h4>
              </div>
            </Link>
          </div>
          <div className={styles.work}>
            <Link to='/kanraku'>
              <div>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693496603/portfolio/247885359-e249cde4-af45-4051-8426-edf21bc77785_1_1_u49f86.png' alt='kanraku' />
                <h4>EC site<br />
                  <span>Mars 2023@IRONHACK</span></h4>
              </div>
            </Link>
          </div>
          <div className={styles.work}>
            <Link to='/project2'>
              <div>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693408714/portfolio/247888287-aee68f84-6d60-4d20-a8ef-9d061462254d_1_veyqpx.png' alt='exquisite' />
                <h4>Web application<br />
                  <span>Feb 2023@IRONHACK</span></h4>
              </div>
            </Link>
          </div>
          <div className={styles.work}>
            <Link to='/project1'>
              <div>
                <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1693496307/portfolio/216149858-deaa521f-1e9e-485e-8840-5633e1d4e3fa_1_1_byw3se.png' alt='happymonkey' />
                <h4>Web application<br />
                  <span>Jan 2023@IRONHACK</span></h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works