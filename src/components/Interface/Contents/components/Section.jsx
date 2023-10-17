import { motion } from 'framer-motion'

export const Section = ({ children }) => {
  return (
    <motion.section
      className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6
        }
      }}>
      {children}
    </motion.section>
  )
}
