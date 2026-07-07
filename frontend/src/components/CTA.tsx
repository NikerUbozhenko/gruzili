import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-secondary/50 backdrop-blur-lg border border-white/10 rounded-2xl p-10 md:p-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-manrope">
            Нужны грузчики <span className="text-accent">прямо сейчас?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Позвоните — договоримся! Работаем ежедневно и без выходных.
          </p>
          <motion.a 
            href="tel:+375295990782"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-accent text-primary px-10 py-5 rounded-xl font-bold text-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-accent/20"
          >
            <Phone size={28} />
            Позвонить сейчас
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA