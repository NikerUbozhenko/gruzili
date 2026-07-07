import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-manrope"
          >
            <span className="text-accent">GRUZILI</span> GOMEL
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {['Главная', 'Услуги', 'Цены', 'Отзывы', 'Контакты'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <motion.a 
            href="tel:+375295990782"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            <Phone size={20} />
            Позвонить
          </motion.a>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-secondary border-t border-white/10"
        >
          <nav className="flex flex-col p-4 gap-4">
            {['Главная', 'Услуги', 'Цены', 'Отзывы', 'Контакты'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="py-2 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="tel:+375295990782" className="flex items-center justify-center gap-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold">
              <Phone size={20} />
              Позвонить
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

export default Header
