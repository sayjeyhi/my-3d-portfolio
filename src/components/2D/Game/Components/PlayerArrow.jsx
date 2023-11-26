import { useEffect, useRef } from 'react'
import { useAtomValue } from 'jotai'
import { ARROW_FLYING } from '../base64_files'
import { gamePlayerCurrentAction, PLAYER_ACTIONS } from '@/atoms/game'
import { useArrow } from '@/components/2D/Game/hooks/useArrow.js'

export const PlayerArrow = ({ hitAudioRef, playerRef, dinoRef, playerArrow1, playerArrow2 }) => {
  const playerCurrentAction = useAtomValue(gamePlayerCurrentAction)

  const animationConfig = {
    duration: 2.5,
    hitAudioRef,
    dinoRef,
    playerRef
  }
  const { runAnimation: runArrow1, isActive: isArrow1Active } = useArrow(
    playerArrow1,
    animationConfig
  )
  const { runAnimation: runArrow2, isActive: isArrow2Active } = useArrow(
    playerArrow2,
    animationConfig
  )

  useEffect(() => {
    if (playerCurrentAction !== PLAYER_ACTIONS.shoot) {
      return
    }

    if (!isArrow1Active) {
      setTimeout(() => {
        runArrow1({
          x: [
            playerRef?.current.getBoundingClientRect().x + 50,
            dinoRef?.current.getBoundingClientRect().x
          ],
          y: [-17, -10]
        })
      }, 250)
    } else if (!isArrow2Active) {
      setTimeout(() => {
        runArrow2({
          x: [
            playerRef?.current.getBoundingClientRect().x + 50,
            dinoRef?.current.getBoundingClientRect().x
          ],
          y: [-17, -10]
        })
      }, 250)
    }
  }, [playerCurrentAction])

  const content = (
    <div className="relative">
      <img src={ARROW_FLYING} className="absolute top-[42px] " alt="player-arrow" />
      <div className="absolute top-[42px] left-[35px] p-1 bg-[#1e5b00] rotate-45 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -rotate-45" viewBox="0 0 24 24">
          <path
            fill="#c9c9c9"
            d="m6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10q2.2 0 4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.738T12 13q-1.6 0-3.063.613T6.35 15.35ZM2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4q3.4 0 6.513 1.288T24 9l-2.1 2.1q-1.975-1.975-4.538-3.038T12 7Q9.2 7 6.637 8.063T2.1 11.1ZM12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16q1 0 1.913.375t1.612 1.075L12 21Z"
          />
        </svg>
      </div>
    </div>
  )

  return (
    <>
      <div
        ref={playerArrow1}
        className={`absolute bottom-32 left-32 w-24 h-24 will-change-transform ${
          isArrow1Active ? 'visible' : 'hidden'
        }`}
        style={{ transform: 'none' }}>
        {content}
      </div>
      <div
        ref={playerArrow2}
        className={`absolute bottom-32 left-32 w-24 h-24 will-change-transform ${
          isArrow2Active ? 'visible' : 'hidden'
        }`}
        style={{ transform: 'none' }}>
        {content}
      </div>
    </>
  )
}
