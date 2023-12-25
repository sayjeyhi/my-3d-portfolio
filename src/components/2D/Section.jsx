import { motion } from 'framer-motion'

export const Section = ({ className, children, ...rest }) => {
  return (
    <motion.section
      className={
        `h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center ` +
        className
      }
      initial={{
        opacity: 0,
        y: 50
      }}
      exit={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.2
        }
      }}
      {...rest}>
      {children}
    </motion.section>
  )
}
