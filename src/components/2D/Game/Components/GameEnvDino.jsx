import { useEffect, useRef } from 'react'
import { useAtomValue } from 'jotai'
import { DIANASOUR, DINO_HIT } from '../base64_files'
import { gameDinosaurLifeAtom, gameIsDinoHitAtom, gameIsStartedAtom } from '@/atoms/game'
import { useExplosion } from '../hooks/useExplosion'
import { useGameAnimation } from '@/components/2D/Game/hooks/useGameAnimation.js'

export const GameEnvDino = ({ dinoRef }) => {
  const dinoHitRef = useRef(null)

  const explodeDino = useExplosion({ duration: 700, id: 'dino' })
  const dinosaurLife = useAtomValue(gameDinosaurLifeAtom)
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const isDinoHit = useAtomValue(gameIsDinoHitAtom)

  const { runAnimation } = useGameAnimation(
    dinoRef,
    {
      x: ['0vw', '-5vw', '0vw'],
      scaleX: [-1, -1, -1]
    },
    {
      duration: 3,
      repeat: Infinity
    }
  )

  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted) return

    runAnimation()
  }, [isGameStarted])

  useEffect(() => {
    if (isDinoHit) {
      explodeDino(dinoHitRef.current)
    }
  }, [isDinoHit])

  return (
    <div
      ref={dinoRef}
      className="absolute -bottom-8 right-8 -scale-x-100 w-64 h-64 will-change-transform">
      <img src={isDinoHit ? DINO_HIT : DIANASOUR} alt="dinosaur" />
      <div ref={dinoHitRef}></div>

      <div className="h-4 ml-16 relative w-32 rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <div
          className={`h-full ${dinosaurLife < 50 ? 'bg-red-500' : 'bg-primary'} absolute`}
          style={{ width: `${dinosaurLife}%` }}></div>
      </div>
    </div>
  )
}
