import { FIRE } from '@/components/2D/Game/base64_files'
import { useEnemy } from '@/components/2D/Game/hooks/useEnemy'
import { DINO_WEAPONS } from '@/atoms/game.js'
import { useState } from 'react'

export const EnemyFire = ({ hitAudioRef, dinoRef, playerRef, visibleEnemyRef }) => {
  const [isEnemyDie, setIsEnemyDie] = useState(false)
  const { isEnemyVisible } = useEnemy({
    hitAudioRef,
    dinoRef,
    playerRef,
    visibleEnemyRef,
    name: DINO_WEAPONS.FIRE,
    animateOptions: {
      x: [0, -window.innerWidth]
    },
    onEnemyDie: animationControl => {
      setIsEnemyDie(true)
      animationControl.pause()
    }
  })

  if (!isEnemyVisible) return null

  return (
    <div
      ref={visibleEnemyRef}
      className={`absolute bottom-24 right-32 w-24 h-24 will-change-transform`}>
      <div
        className={`relative ${
          isEnemyDie ? 'animate-[fall_1s_ease-in-out_infinite]' : 'rotate-90'
        }`}>
        <img src={FIRE} alt="dino-fire" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-rotate-90 w-4 h-4 text-red-600 absolute top-[50px] left-[40px]"
          viewBox="0 0 24 24">
          <path
            fill="#ff0"
            d="m21 11l2-2c-3.73-3.73-8.87-5.15-13.7-4.31l2.58 2.58c3.3-.02 6.61 1.22 9.12 3.73zm-2 2a9.895 9.895 0 0 0-3.72-2.33l3.02 3.02l.7-.69zM9 17l3 3l3-3a4.237 4.237 0 0 0-6 0zM3.41 1.64L2 3.05L5.05 6.1C3.59 6.83 2.22 7.79 1 9l2 2c1.23-1.23 2.65-2.16 4.17-2.78l2.24 2.24A9.823 9.823 0 0 0 5 13l2 2a6.999 6.999 0 0 1 4.89-2.06l7.08 7.08l1.41-1.41L3.41 1.64z"
          />
        </svg>
      </div>
    </div>
  )
}
