import React, { useState, useEffect } from 'react'
import { SlClose } from "react-icons/sl";

const PAGE_Y_OFFSET = 500

const ModalCloseButton = ({ show, setShow }) => {
  const changeShowButton = () => {
    if (window.scrollY > PAGE_Y_OFFSET) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeShowButton)
    return () => window.removeEventListener('scroll', changeShowButton)
  }, [])

  if (show)
    return (
      <button onClick={() => setShow(false)} style={{ position: 'fixed', top: 30, right: 25, zIndex: 3 }}>
        <SlClose className='modalClosebutton' />
      </button>
    )
}

export default ModalCloseButton