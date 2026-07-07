import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const reviews = [
  {
    name: 'Александр Петров',
    text: 'Отличные грузчики! Быстро и аккуратно перевезли квартиру. Рекомендую!',
    rating: 5,
  },
  {
    name: 'Елена Сидорова',
    text: 'Заказывала вывоз строительного мусора. Приехали вовремя, всё убрали. Спасибо!',
    rating: 5,
  },
  {
    name: 'Михаил Козлов',
    text: 'Переезжали офис. Работали профессионально, ничего не повредили. Отлично!',
    rating: 5,
  },
  {
    name: 'Анна Морозова',
    text: 'Поднимали стройматериалы на 9 этаж. Быстро и недорого. Буду обращаться ещё.',
    rating: 5,
  },
  {
    name: 'Дмитрий Волков',
    text: 'Заказывал демонтаж старой мебели. Всё сделали за пару часов. Рекомендую!',
    rating: 5,
  },
]

const Reviews = () => {
  return (
    <section id="отзывы" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-manrope">
            Отзывы <span className="text-accent">клиентов</span>
          </h2>
          <p className="text-gray-400 text-lg">Что говорят о нас наши клиенты</p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/50 backdrop-blur-md border border-white/10 rounded-xl p-8 mx-2"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{review.text}</p>
                <div className="font-semibold font-manrope">{review.name}</div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews