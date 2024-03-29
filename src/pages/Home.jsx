import Works from '../components/Works/Works'
import About from '../components/About/About'
import Top from '../components/Top'
import Contact from '../components/Contact/Contact'
import Feature from '../components/Feature/Feature'
import ScrollToTop from '../components/ScrollToTop'
import History from '../components/History/History'

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
        <section id='feature'>
          <Feature />
        </section>
        <section id='history'>
          <History />
        </section>
        <section id='works'>
          <Works />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </div>
      <ScrollToTop />
    </div>
  )
}
export default Home
