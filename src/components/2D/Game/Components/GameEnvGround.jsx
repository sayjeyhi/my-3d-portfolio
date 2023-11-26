import { useEffect, useRef } from 'react'
import { useAtomValue } from 'jotai'
import { GROUNDS } from '../constants'
import { gameIsStartedAtom } from '@/atoms/game'
import { GROUND } from '@/components/2D/Game/base64_files'
import { useGameAnimation } from '@/components/2D/Game/hooks/useGameAnimation.js'

const animationOptions = { duration: 9, repeat: Infinity }
export const GameEnvGround = () => {
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const groundRefs = []
  groundRefs[0] = useRef(null)
  groundRefs[1] = useRef(null)

  const { runAnimation: runAnimation1 } = useGameAnimation(
    groundRefs[0],
    { x: '-100vw' },
    animationOptions
  )
  const { runAnimation: runAnimation2 } = useGameAnimation(
    groundRefs[1],
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
  }, [isGameStarted])

  return GROUNDS.map((ground, index) => (
    <img
      key={index}
      alt="ground"
      id={ground.id}
      ref={groundRefs[index]}
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
