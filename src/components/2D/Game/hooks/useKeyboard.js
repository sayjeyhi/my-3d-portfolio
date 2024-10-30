import { useEffect } from 'react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  gameIsStartedAtom,
  gamePauseAtom,
  PLAYER_ACTIONS,
  gamePlayerSetCurrentAction,
  gameSetIsStartedAtom
} from '@/atoms/game'

export const useKeyboard = ({
  handleTogglePauseTheGame,
  jumpAudioRef,
  playerArrow1,
  playerArrow2
}) => {
  const isStarted = useAtomValue(gameIsStartedAtom)
  const [isPaused, setIsPaused] = useAtom(gamePauseAtom)
  const setIsStarted = useSetAtom(gameSetIsStartedAtom)
  const setCurrentAction = useSetAtom(gamePlayerSetCurrentAction)

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Tab') {
        e.preventDefault()
      }
      if (e.key === ' ') {
        if (isPaused) {
          handleTogglePauseTheGame()
          e.preventDefault()
        }
        if (!isStarted) {
          setIsStarted(true)
          e.preventDefault()
        }
      }

      if (isStarted) {
        if (e.key === ' ') {
          /**
           * Shoot the arrow
           */
          if (
            getComputedStyle(playerArrow1.current).display === 'none' ||
            getComputedStyle(playerArrow2.current).display === 'none'
          ) {
            jumpAudioRef.current.currentTime = 0
            jumpAudioRef.current.play()
            setCurrentAction(PLAYER_ACTIONS.shoot)
          }
          setIsPaused(false)
          e.preventDefault()
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'a' || e.key === 'd') {
          setCurrentAction(PLAYER_ACTIONS.defend)
          setIsPaused(false)
          e.preventDefault()
        } else if (e.key === 'ArrowUp' || e.key === 'w') {
          setCurrentAction(PLAYER_ACTIONS.jump)
          setIsPaused(false)
          e.preventDefault()
        } else if (e.key === 'ArrowDown' || e.key === 's') {
          setCurrentAction(PLAYER_ACTIONS.sit)
          setIsPaused(false)
          e.preventDefault()
        } else if (e.key === 'Escape') {
          handleTogglePauseTheGame()
          e.preventDefault()
        }
      }
    }

    window.removeEventListener('keydown', handleKeyPress)
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isStarted, setIsStarted, setCurrentAction, isPaused])
}
