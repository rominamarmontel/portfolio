import { useEffect, useState } from 'react'
import { BiChevronUpCircle } from "react-icons/bi"

const PAGE_Y_OFFSET = 500

const ScrollToTop = () => {
  const [show, setShow] = useState(false)

  const changeShow = () => {
    if (window.scrollY > PAGE_Y_OFFSET) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const onScrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', changeShow)
    return () => window.removeEventListener('scroll', changeShow)
  }, [])

  if (show)
    return (
      <div style={{ position: 'fixed', bottom: 20, right: 15, zIndex: 3 }}>
        <BiChevronUpCircle onClick={onScrollTop} style={{ backgroundColor: 'transparent', color: 'gray', fontSize: 66 }} />
      </div>
    )
  else return null
}

export default ScrollToTop