import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { GROUNDS } from '../constants'
import { gameIsStartedAtom } from '@/atoms/game'
import { GROUND } from '@/components/2D/Game/base64_files'

export const GameEnvGround = ({ hitAudioRef }) => {
  const groundControls = useAnimation()
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted) {
      groundControls.stop()
      return
    }

    groundControls.start(() => ({
      x: '-100vw',
      transition: { duration: 9, repeat: Infinity, ease: 'linear' }
    }))
  }, [isGameStarted])

  return GROUNDS.map((ground, index) => (
    <motion.img
      key={index}
      alt="ground"
      id={ground.id}
      animate={groundControls}
      custom={index}
      style={{
        position: 'absolute',
        bottom: '-60px',
        left: ground.x,
        width: '100%'
      }}
      src={GROUND}
    />
  ))
}
