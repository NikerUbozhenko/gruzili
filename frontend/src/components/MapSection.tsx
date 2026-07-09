import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

const MapSection = () => {
  return (
    <section id="контакты" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-manrope">
            Мы работаем в <span className="text-accent">Гомеле</span>
          </h2>
          <p className="text-gray-400 text-lg">По всему городу и Гомельской области</p>
        </motion.div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-primary/50 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
            <MapPin className="w-10 h-10 text-accent mx-auto mb-3" />
            <h3 className="font-bold mb-2">Адрес</h3>
            <p className="text-gray-400">Гомель, ул. Григория Денисенко, 76</p>
          </div>
          
          <div className="bg-primary/50 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
            <Clock className="w-10 h-10 text-accent mx-auto mb-3" />
            <h3 className="font-bold mb-2">Режим работы</h3>
            <p className="text-gray-400">Ежедневно<br />08:00 - 22:00</p>
          </div>
          
          <div className="bg-primary/50 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
            <Phone className="w-10 h-10 text-accent mx-auto mb-3" />
            <h3 className="font-bold mb-2">Телефон</h3>
            <p className="text-gray-400">+375295990782</p>
          </div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl"
        >
          <iframe
          src="https://yandex.by/map-widget/v1/?ll=31.012345%2C52.434567&z=16&text=Гомель,Григория+Денисенко+76"
          width="100%"
          height="500"
          allowFullScreen={true}
          className="border-0 rounded-2xl shadow-2xl"
          title="Карта проезда"
        />
        </motion.div>

        
      </div>
    </section>
  )
}

export default MapSection