import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { GROUNDS } from '../constants'
import { gameIsStartedAtom } from '../../../../../../atoms/game'

export const GameEnvGround = ({ hitAudioRef }) => {
  const groundControls = useAnimation()
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted) return

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
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACWAAAAAYAQMAAABEalRSAAAABlBMVEX///9TU1NYzE1OAAAAAXRSTlMAQObYZgAAAOtJREFUeF7tljEKwzAMRb/J0CWgI/QKOYAh1+pUcjQfpUfw2MFEHVyDQSQmQUNM9AYNcobnh4egU+YVqhAvZSpgsfolPnSv5d0nz3vHslgUdK81RLzyvHcsi+WBNxQh4Ln8pw4Wi7skAg9mXgHMrEACXJnbHIllsbqGAtwXhnYswzFzwPWxWEPc2CexoobkHM4ZpD6s2loWiyIEEwCChIomMiMEHqgP573C9eHkc5VLWh3XsljnGVoLWVl+31bp38piTVVuihtPOAm9kcRLbrFjEvqwamtZLK5eI8sSan9rXEK0LcNFrY5oWawf59S7YSRD7eMAAAAASUVORK5CYII="
    />
  ))
}
