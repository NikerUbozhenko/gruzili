import { motion } from 'framer-motion'

const prices = [
  { title: 'Подъем стройматериалов', price: 'от 30 руб', unit: 'за этаж' },
  { title: 'Подъем плитки', price: 'от 35 руб', unit: 'за этаж' },
  { title: 'Услуги грузчиков', price: 'от 20 руб', unit: 'в час' },
  { title: 'Минимальный заказ', price: '2 часа', unit: 'работы' },
]

const Prices = () => {
  return (
    <section id="цены" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-manrope">
            <span className="text-accent">Стоимость</span> услуг
          </h2>
          <p className="text-gray-400 text-lg">Прозрачные цены без скрытых платежей</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prices.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary/50 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center hover:border-accent/50 transition-all"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-300">{item.title}</h3>
              <div className="text-4xl font-bold text-accent mb-2 font-manrope">{item.price}</div>
              <div className="text-gray-400">{item.unit}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Prices