import { motion } from 'framer-motion'

export default function FadeInWhenInView({ children, duration, className, delay }) {
  return(
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial="none"
        whileInView="block"
        viewport={{ once: false }}
        transition={{ duration: duration ? duration : 0.7, ease: [0.83, 0, 0.17, 1], delay: delay ? delay : 0 }}
        className="w-full opacity-0"
        variants={{
          block: { opacity: 1 },
          none: { opacity: 0 }
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}