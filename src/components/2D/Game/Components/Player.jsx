import { useAtomValue } from 'jotai'
import { gamePlayerCurrentAction, PLAYER_ACTIONS } from '@/atoms/game'
import {
  PLAYER_HIT_BIRD,
  PLAYER_HIT_FIRE,
  PLAYER_HIT_GHOST,
  PLAYER_IDLE,
  PLAYER_SHOOTING,
  PLAYER_SIT,
  PLAYER_JUMP,
  PLAYER_DEFEND,
  ARROW_SHOOTING
} from '../base64_files'

export const Player = ({ playerRef }) => {
  const currentAction = useAtomValue(gamePlayerCurrentAction)

  let imgSrc = PLAYER_IDLE
  switch (currentAction) {
    case PLAYER_ACTIONS.hitBird:
      imgSrc = PLAYER_HIT_BIRD
      break
    case PLAYER_ACTIONS.hitFire:
      imgSrc = PLAYER_HIT_FIRE
      break
    case PLAYER_ACTIONS.hitGhost:
      imgSrc = PLAYER_HIT_GHOST
      break
    case PLAYER_ACTIONS.shoot:
      imgSrc = PLAYER_SHOOTING
      break
    case PLAYER_ACTIONS.sit:
      imgSrc = PLAYER_SIT
      break
    case PLAYER_ACTIONS.defend:
      imgSrc = PLAYER_DEFEND
      break
    case PLAYER_ACTIONS.jump:
      imgSrc = PLAYER_JUMP
      break
    default:
      imgSrc = PLAYER_IDLE
      break
  }

  return (
    <div
      ref={playerRef}
      className={`absolute ${
        currentAction === PLAYER_ACTIONS.jump ? 'bottom-6' : '-bottom-10'
      } left-16 w-80 h-80`}>
      <img src={imgSrc} alt="player" />
      {currentAction === PLAYER_ACTIONS.shoot && (
        <img
          className="w-[185px] h-auto absolute left-[160px] top-[-13px]"
          src={ARROW_SHOOTING}
          alt="player"
        />
      )}
    </div>
  )
}
