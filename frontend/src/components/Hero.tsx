import { motion } from 'framer-motion'
import { Phone, Send, Truck, Users, Clock, Award } from 'lucide-react'

const Hero = () => {
  return (
    <section id="главная" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Сложный фон с градиентами */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary z-0" />
      
      {/* Анимированные градиентные пятна */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 40, 0],
          y: [0, -40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl z-0"
      />

      {/* Сетка/паттерн */}
      <div className="absolute inset-0 opacity-10 z-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(250, 204, 21, 0.3) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Линии */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Бейдж */}
          

          {/* Главный заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-manrope leading-tight">
              Грузчики и{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-300 to-accent">
                грузоперевозки
              </span>
              <br />
              в <span className="text-accent">Гомеле</span>
            </h1>
          </motion.div>

          {/* Подзаголовок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-lg md:text-2xl text-gray-300 mb-4 flex flex-wrap justify-center items-center gap-2 md:gap-3">
              <span className="inline-flex items-center gap-2">
                <Truck className="w-5 h-5 text-accent" />
                Грузчики
              </span>
              <span className="text-accent">•</span>
              <span>Переезды</span>
              <span className="text-accent">•</span>
              <span>Грузоперевозки</span>
              <span className="text-accent">•</span>
              <span>Вывоз мусора</span>
              <span className="text-accent">•</span>
              <span>Демонтаж</span>
            </p>
           
            <p className="text-xl md:text-2xl text-gray-300">
              Звоните — договоримся!
            </p>
          </motion.div>

          {/* Кнопки */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a 
              href="tel:+375295990782"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-yellow-400 text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all"
            >
              <Phone size={24} />
              Позвонить
            </motion.a>
            
          </motion.div>

          {/* Преимущества с иконками */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-semibold">Опытные грузчики</div>
              <div className="text-gray-400 text-sm">От 20 руб/час</div>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-semibold">Быстрая подача</div>
              <div className="text-gray-400 text-sm">30-60 минут</div>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-semibold">Гарантия качества</div>
              <div className="text-gray-400 text-sm">10+ лет опыта</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Нижняя граница */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero