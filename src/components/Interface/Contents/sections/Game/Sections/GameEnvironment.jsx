import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { gameIsShootingAtom } from '../../../../../../atoms/game'
import { GameEnvironmentClouds } from './GameEnvironmentClouds.jsx'
import { GameEnvironmentGround } from './GameEnvironmentGround.jsx'
import { GameEnvironmentDino } from './GameEnvironmentDino.jsx'
import { GameEnvironmentDinoFire } from './GameEnvironmentDinoFire.jsx'
import { GameEnvironmentPlayerFire } from './GameEnvironmentPlayerFire.jsx'

export const GameEnvironment = ({ hitAudioRef }) => {
  const myFireControls = useAnimation()

  const isGameStarted = useAtomValue(gameIsShootingAtom)

  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted) return

    myFireControls.start(() => ({
      x: ['-20vw', '-12vw'],
      rotate: [-90, -90, -90],
      transition: { duration: 3, repeat: 0, ease: 'linear' }
    }))
  }, [isGameStarted])

  return (
    <>
      <GameEnvironmentClouds />
      <GameEnvironmentDino />
      <GameEnvironmentDinoFire hitAudioRef={hitAudioRef} />
      <GameEnvironmentPlayerFire hitAudioRef={hitAudioRef} />
      <GameEnvironmentGround />
    </>
  )
}
