import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { CLOUDS } from '../constants'
import { gameIsStartedAtom } from '@/atoms/game'
import { CLOUD } from '@/components/2D/Game/base64_files'

export const GameEnvClouds = () => {
  const cloudControls = useAnimation()
  const isGameStarted = useAtomValue(gameIsStartedAtom)

  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted) {
      cloudControls.stop()
      return
    }

    cloudControls.start(() => ({
      x: '-100vw',
      transition: { duration: 13, repeat: Infinity, ease: 'linear' }
    }))
  }, [isGameStarted])

  return CLOUDS.map((cloud, index) => (
    <div key={index} style={{ position: 'absolute', top: cloud.y, left: cloud.x }}>
      <motion.img alt="cloud" id={cloud.id} animate={cloudControls} custom={index} src={CLOUD} />
    </div>
  ))
}
