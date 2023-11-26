import { useEffect, useRef } from 'react'
import { useAtomValue } from 'jotai'
import { CLOUDS } from '../constants'
import { gameIsStartedAtom } from '@/atoms/game'
import { CLOUD } from '@/components/2D/Game/base64_files'
import { useGameAnimation } from '@/components/2D/Game/hooks/useGameAnimation.js'

export const GameEnvClouds = () => {
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const cloudRefs = []
  cloudRefs[0] = useRef(null)
  cloudRefs[1] = useRef(null)
  cloudRefs[2] = useRef(null)

  const animationOptions = { duration: 13, repeat: Infinity }
  const { runAnimation: runAnimation1 } = useGameAnimation(
    cloudRefs[0],
    { x: '-100vw' },
    animationOptions
  )
  const { runAnimation: runAnimation2 } = useGameAnimation(
    cloudRefs[1],
    { x: '-100vw' },
    animationOptions
  )
  const { runAnimation: runAnimation3 } = useGameAnimation(
    cloudRefs[2],
    { x: '-100vw' },
    animationOptions
  )

  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted) return

    runAnimation1()
    runAnimation2()
    runAnimation3()
  }, [isGameStarted])

  return CLOUDS.map((cloud, index) => (
    <div key={index} style={{ position: 'absolute', top: cloud.y, left: cloud.x }}>
      <img ref={cloudRefs[index]} alt="cloud" src={CLOUD} />
    </div>
  ))
}
