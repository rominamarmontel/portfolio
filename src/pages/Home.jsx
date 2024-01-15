import Works from '../components/Works/Works'
import About from '../components/About/About'
import Top from '../components/Top'
import Contact from '../components/Contact/Contact'
import Feature from '../components/Feature/Feature'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
  return (
    <div className='Home'>
      <div className='home_container'>
        <section id='top'>
          <Top />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='works'>
          <Works />
        </section>
        <section id='feature'>
          <Feature />
        </section>
        <Contact />
      </div>
      <ScrollToTop />
    </div>
  )
}
export default Home
