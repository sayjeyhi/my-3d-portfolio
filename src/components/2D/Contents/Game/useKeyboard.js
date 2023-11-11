import { useEffect, useRef } from 'react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { gameIsShootingAtom, gameIsStartedAtom, gamePauseAtom } from '@/atoms/game'

export const useKeyboard = ({ handleTogglePauseTheGame, jumpAudioRef }) => {
  const [isStarted, setIsStarted] = useAtom(gameIsStartedAtom)
  const isPaused = useAtomValue(gamePauseAtom)
  const setIsShooting = useSetAtom(gameIsShootingAtom)
  const shootingTimerRef = useRef(null)

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === ' ') {
        e.preventDefault()
        if (isPaused) {
          handleTogglePauseTheGame()
        } else if (!isStarted) {
          setIsStarted(true)
        } else {
          /**
           * Shoot the fire
           */
          jumpAudioRef.current.currentTime = 0
          jumpAudioRef.current.play()
          setIsShooting(true)
          if (shootingTimerRef.current) clearTimeout(shootingTimerRef.current)
          shootingTimerRef.current = setTimeout(() => {
            setIsShooting(false)
          }, 300)
        }
      } else if (e.key === 'Escape') {
        handleTogglePauseTheGame()
      }
    }

    window.removeEventListener('keydown', handleKeyPress)
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isStarted, setIsStarted, setIsShooting, isPaused])
}
