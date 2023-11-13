import { useEffect, useRef } from 'react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  gamePlayerCurrentAction,
  gameIsStartedAtom,
  gamePauseAtom,
  PLAYER_ACTIONS
} from '@/atoms/game'

export const useKeyboard = ({ handleTogglePauseTheGame, jumpAudioRef }) => {
  const [isStarted, setIsStarted] = useAtom(gameIsStartedAtom)
  const isPaused = useAtomValue(gamePauseAtom)
  const setCurrentAction = useSetAtom(gamePlayerCurrentAction)
  const actionTimer = useRef(null)

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
          if (actionTimer.current) clearTimeout(actionTimer.current)
          actionTimer.current = setTimeout(() => {
            setCurrentAction(PLAYER_ACTIONS.idle)
          }, 300)

          e.preventDefault()
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          setCurrentAction(PLAYER_ACTIONS.defend)
          if (actionTimer.current) clearTimeout(actionTimer.current)
          actionTimer.current = setTimeout(() => {
            setCurrentAction(PLAYER_ACTIONS.idle)
          }, 300)
          e.preventDefault()
        } else if (e.key === 'ArrowUp') {
          setCurrentAction(PLAYER_ACTIONS.jump)
          if (actionTimer.current) clearTimeout(actionTimer.current)
          actionTimer.current = setTimeout(() => {
            setCurrentAction(PLAYER_ACTIONS.idle)
          }, 300)
          e.preventDefault()
        } else if (e.key === 'ArrowDown') {
          setCurrentAction(PLAYER_ACTIONS.sit)
          if (actionTimer.current) clearTimeout(actionTimer.current)
          actionTimer.current = setTimeout(() => {
            setCurrentAction(PLAYER_ACTIONS.idle)
          }, 300)
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
