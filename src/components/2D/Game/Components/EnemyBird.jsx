import { BIRD, BIRD_HIT } from '@/components/2D/Game/base64_files'
import { useEnemy } from '@/components/2D/Game/hooks/useEnemy'
import { DINO_WEAPONS } from '@/atoms/game.js'
import { useState } from 'react'

export const EnemyBird = ({ hitAudioRef, dinoRef, playerRef, visibleEnemyRef }) => {
  const [isEnemyDie, setIsEnemyDie] = useState(false)
  const { isEnemyVisible } = useEnemy({
    hitAudioRef,
    dinoRef,
    playerRef,
    visibleEnemyRef,
    name: DINO_WEAPONS.BIRD,
    animateOptions: {
      x: [0, -window.innerWidth],
      scaleX: [-1]
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
      className={`absolute bottom-48 right-32 w-24 h-24 will-change-transform`}>
      <div className={`relative ${isEnemyDie ? 'animate-[fall_1s_ease-in-out_infinite]' : ''}`}>
        <img src={isEnemyDie ? BIRD_HIT : BIRD} alt="bird" />
      </div>
    </div>
  )
}
