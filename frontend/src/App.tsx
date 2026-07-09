import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Prices from './components/Prices'
import Advantages from './components/Advantages'
import Stats from './components/Stats'
import Reviews from './components/Reviews'
import MapSection from './components/MapSection'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-white overflow-x-hidden">
        <Header />
        <Hero />
        <Services />
        <Prices />
        <Advantages />
        <Stats />
        <Reviews />
        <MapSection />
        <CTA />
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  )
}

export default App
