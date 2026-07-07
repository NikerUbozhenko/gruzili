import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

const FloatingBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed top-24 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 z-40 bg-accent text-primary px-6 py-3 rounded-full font-bold shadow-lg shadow-accent/20 flex items-center gap-2 cursor-pointer hover:bg-yellow-400 transition-colors"
    >
      <Flame size={20} className="animate-pulse" />
      <span>ЕЖЕДНЕВНО И БЕЗ ВЫХОДНЫХ</span>
    </motion.div>
  )
}

export default FloatingBanner