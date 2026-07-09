import { motion } from 'framer-motion'
import { Phone, Send, MessageCircle } from 'lucide-react'

const buttons = [
  { icon: Phone, href: 'tel:+375295990782', color: 'bg-green-500', label: 'Позвонить' },
  { icon: Send, href: 'https://t.me/gruziligomel', color: 'bg-blue-500', label: 'Telegram' },
  { icon: MessageCircle, href: 'https://wa.me/375291234567', color: 'bg-green-600', label: 'WhatsApp' },
]

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {buttons.map((btn, index) => (
        <motion.a
          key={btn.label}
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1, x: -5 }}
          className={`${btn.color} text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}
          aria-label={btn.label}
        >
          <btn.icon size={26} />
        </motion.a>
      ))}
    </div>
  )
}

export default FloatingButtons
