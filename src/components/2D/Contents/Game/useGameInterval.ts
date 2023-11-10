import { useCallback, useEffect, useRef } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  gameIsStartedAtom,
  gamePauseAtom,
  gameReadOnlyStateAtom,
  gameScoreAtom,
  gameTimeAtom
} from '@/atoms/game'

export const useGameInterval = ({ victoryAudioRef }) => {
  const gameTimerRef = useRef(null)
  const gameState = useAtomValue(gameReadOnlyStateAtom)
  const setScore = useSetAtom(gameScoreAtom)
  const setTime = useSetAtom(gameTimeAtom)
  const setIsStarted = useSetAtom(gameIsStartedAtom)
  const setIsPaused = useSetAtom(gamePauseAtom)

  const handleTogglePauseTheGame = useCallback(() => {
    if (gameState.isPaused) {
      setIsPaused(false)
      setScore(score => score + 1)
    } else {
      setIsPaused(true)
      clearInterval(gameTimerRef.current)
    }
  }, [gameState.isPaused, setIsPaused, setScore, gameTimerRef.current])

  useEffect(() => {
    if (gameState.isStarted || gameTimerRef.current) {
      clearInterval(gameTimerRef.current)
    }

    /**
     * Start the game tick
     */
    gameTimerRef.current = setInterval(() => {
      if (gameState.isPaused || !gameState.isStarted) return

      let prevScore = 0
      let newScore = 0
      setTime(time => time + 0.1)
      setScore(score => {
        prevScore = score
        newScore = score + 0.2
        return newScore
      })
      const successAudioRef = document.getElementById('successAudioRef')
      if (
        Math.ceil(newScore / 100) * 100 > Math.ceil(prevScore / 100) * 100 &&
        successAudioRef &&
        prevScore
      ) {
        successAudioRef.play()
      }

      /**
       * Check if the game is arrived to the prize
       */
      if (prevScore > 50 && prevScore % 100 < 1 && prevScore < 502) {
        handleTogglePauseTheGame()
      }

      /**
       * Check if the game is ended
       */
      if (prevScore >= 700) {
        clearInterval(gameTimerRef.current)
      }
    }, 1000)
  }, [gameState.isStarted, gameState.isPaused, setScore, setTime])

  useEffect(() => {
    if (gameState.score >= 700 && gameState.isStarted) {
      victoryAudioRef.current.play()
      setIsStarted(false)
      setScore(0)
      setTime(0)
      clearInterval(gameTimerRef.current)
    }
  }, [gameState.score, gameState.isStarted])

  return { gameTimerRef, handleTogglePauseTheGame }
}
