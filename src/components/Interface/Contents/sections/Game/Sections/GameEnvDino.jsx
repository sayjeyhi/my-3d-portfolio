import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { DIANASOUR } from '../constants'
import { gameDinosaurLifeAtom, gameIsStartedAtom } from '../../../../../../atoms/game'

export const GameEnvDino = () => {
  const dinosaurControls = useAnimation()

  const dinosaurLife = useAtomValue(gameDinosaurLifeAtom)
  const isGameStarted = useAtomValue(gameIsStartedAtom)

  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted) return

    dinosaurControls.start(() => ({
      x: ['0vw', '-10vw', '0vw'],
      scaleX: [-1, -1, -1],
      transition: { duration: 3, repeat: Infinity, ease: 'linear' }
    }))
  }, [isGameStarted])

  return (
    <motion.div
      animate={dinosaurControls}
      className="absolute -bottom-8 right-16 -scale-x-100 w-64 h-64">
      <img src={DIANASOUR} alt="dinosaur" />
      <div className="h-4 ml-16 relative w-32 rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <div
          className={`h-full ${dinosaurLife < 50 ? 'bg-red-500' : 'bg-primary'} absolute`}
          style={{ width: `${dinosaurLife}%` }}></div>
      </div>
    </motion.div>
  )
}
