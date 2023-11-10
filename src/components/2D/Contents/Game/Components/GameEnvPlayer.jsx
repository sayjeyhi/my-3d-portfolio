import { useAtomValue } from 'jotai'
import { gameIsPlayerHitAtom, gameIsShootingAtom } from '@/atoms/game'
import { PLAYER_HIT, PLAYER_IDLE, PLAYER_SHOOTING } from '../constants'
export const GameEnvPlayer = () => {
  const isShooting = useAtomValue(gameIsShootingAtom)
  const isPlayerHit = useAtomValue(gameIsPlayerHitAtom)

  let imgSrc = PLAYER_IDLE
  if (isPlayerHit) {
    imgSrc = PLAYER_HIT
  } else if (isShooting) {
    imgSrc = PLAYER_SHOOTING
  }

  return (
    <div className="absolute -bottom-10 left-16 w-80 h-80">
      <img src={imgSrc} alt="player" />
    </div>
  )
}
