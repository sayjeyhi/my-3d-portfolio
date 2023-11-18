import { useEffect } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  gameIsStartedAtom,
  gamePauseAtom,
  PLAYER_ACTIONS,
  gamePlayerSetCurrentAction,
  gameSetIsStartedAtom
} from '@/atoms/game'

export const useKeyboard = ({ handleTogglePauseTheGame, jumpAudioRef }) => {
  const isStarted = useAtomValue(gameIsStartedAtom)
  const isPaused = useAtomValue(gamePauseAtom)
  const setIsStarted = useSetAtom(gameSetIsStartedAtom)
  const setCurrentAction = useSetAtom(gamePlayerSetCurrentAction)

  useEffect(() => {
    const handleKeyPress = e => {
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
           * Shoot the fire
           */
          jumpAudioRef.current.currentTime = 0
          jumpAudioRef.current.play()
          setCurrentAction(PLAYER_ACTIONS.shoot)
          e.preventDefault()
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'a' || e.key === 'd') {
          setCurrentAction(PLAYER_ACTIONS.defend)
          e.preventDefault()
        } else if (e.key === 'ArrowUp' || e.key === 'w') {
          setCurrentAction(PLAYER_ACTIONS.jump)
          e.preventDefault()
        } else if (e.key === 'ArrowDown' || e.key === 's') {
          setCurrentAction(PLAYER_ACTIONS.sit)
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
