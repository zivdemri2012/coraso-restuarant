import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import Menu from './components/Menu.jsx'
import Gallery from './components/Gallery.jsx'
import Experience from './components/Experience.jsx'
import Reservations from './components/Reservations.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Story />
        <Menu />
        <Gallery />
        <Experience />
        <Reservations />
      </main>
      <Footer />
    </>
  )
}
