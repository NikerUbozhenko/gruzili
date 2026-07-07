import { motion } from 'framer-motion'
import { useCountUp } from 'react-countup'

const Stats = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-manrope">
            Почему выбирают <span className="text-accent">нас</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: 5000, suffix: '+', label: 'Выполненных заказов', duration: 2 },
            { value: 10, suffix: '+', label: 'Лет опыта', duration: 1.5 },
            { value: 24, suffix: '/7', label: 'Ежедневно и без выходных', duration: 1 },
            { value: 100, suffix: '%', label: 'Довольных клиентов', duration: 2 },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-secondary/30 backdrop-blur-md rounded-xl border border-white/10"
            >
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2 font-manrope">
                <CountUpValue end={stat.value} suffix={stat.suffix} duration={stat.duration} />
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CountUpValue = ({ end, suffix, duration }: { end: number; suffix: string; duration: number }) => {
  useCountUp({ ref: 'counter' + end, end, duration, suffix })
  return <span id={'counter' + end}>{end}{suffix}</span>
}

export default Stats