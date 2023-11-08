import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { CLOUDS } from '../constants'
import { gameIsStartedAtom } from '../../../../../../atoms/game'

export const GameEnvironmentClouds = () => {
  const cloudControls = useAnimation()
  const isGameStarted = useAtomValue(gameIsStartedAtom)

  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted) return

    cloudControls.start(() => ({
      x: '-100vw',
      transition: { duration: 13, repeat: Infinity, ease: 'linear' }
    }))

    cloudControls.start(() => ({
      x: '-100vw',
      transition: { duration: 9, repeat: Infinity, ease: 'linear' }
    }))
  }, [isGameStarted])

  return CLOUDS.map((cloud, index) => (
    <div key={index} style={{ position: 'absolute', top: cloud.y, left: cloud.x }}>
      <motion.img
        alt="cloud"
        id={cloud.id}
        animate={cloudControls}
        custom={index}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAcAgMAAACR2TCnAAAABlBMVEUAAADa2to4qB92AAAAAXRSTlMAQObYZgAAAFFJREFUeF6VzTEKAFEIxNA03m+a3P8q2wqi/E35BIdeGXq3q5hnrwBs7mC5vIZzu/nnqI319vRtqHB731blwSHjx+22+Rdn94rzQq0ugKPVlz5onyJcGdu0NgAAAABJRU5ErkJggg=="
      />
    </div>
  ))
}
