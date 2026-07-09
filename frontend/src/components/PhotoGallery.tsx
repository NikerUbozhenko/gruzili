import { motion } from 'framer-motion'
import { Download, Expand } from 'lucide-react'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/moving-1.jpg', // Фото с вывозом мебели
    alt: 'Вывоз строительного мусора и хлама',
    title: 'Вывоз строительного мусора',
    desc: 'Быстро и аккуратно вывезем мусор и хлам'
  },
  {
    id: 2,
    src: '/images/gallery/truck-1.jpg', // Голубой грузовик
    alt: 'Вывоз мусора и старой мебели',
    title: 'Вывоз мусора и мебели',
    desc: 'По лучшим ценам в Гомеле'
  },
  {
    id: 3,
    src: '/images/gallery/moving-2.jpg', // Грузчики с диваном
    alt: 'Профессиональные грузчики',
    title: 'Профессиональные грузчики',
    desc: 'Аккуратный подъём и перенос мебели'
  },
  {
    id: 4,
    src: '/images/gallery/moving-3.jpg', // Трое грузчиков
    alt: 'Квартирный переезд',
    title: 'Квартирные переезды',
    desc: 'Быстро и без повреждений'
  },
  {
    id: 5,
    src: '/images/gallery/truck-2.jpg', // Самосвал с мусором
    alt: 'Расчистка участка',
    title: 'Расчистка участка',
    desc: 'Вывоз мусора, услуги грузчиков'
  }
]

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1a1a1a] to-primary" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-manrope">
            Наши <span className="text-yellow-500">работы</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Реальные фото с наших объектов в Гомеле
          </p>
        </motion.div>

        {/* Сетка фотографий */}
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
                <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md"
                >
                {/* Фото */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Оверлей при наведении */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Кнопка увеличения */}
                    <button
                    onClick={() => setSelectedImage(index)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30"
                    >
                    <Expand className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Информация */}
                <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-400 text-sm">{image.desc}</p>
                </div>
                </motion.div>
            ))}
        </div>

        {/* CTA внизу */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 text-lg mb-4">
            Хотите так же? <span className="text-yellow-500 font-bold">Звоните!</span>
          </p>
          <a
            href="tel:+375295990782"
            className="inline-flex items-center gap-2 bg-yellow-500 text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/30"
          >
            <Download className="w-5 h-5" />
            Заказать услугу
          </a>
        </motion.div>
      </div>

      {/* Модальное окно с увеличенным фото */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-yellow-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  )
}

export default PhotoGallery