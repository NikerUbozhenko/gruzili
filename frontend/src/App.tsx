import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import PhotoGallery from './components/PhotoGallery'
import Advantages from './components/Advantages'
import Prices from './components/Prices'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-accent font-semibold">Загрузка...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-primary text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <PhotoGallery />
      <Advantages />
      <Prices />
      <Reviews />
      <CTA />
      <MapSection />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App