import { useCallback, useEffect, useRef } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  gameIsStartedAtom,
  gamePauseAtom,
  gameScoreAtom,
  gameSetScoreAtom,
  gameTimeAtom,
  scrollIntoView
} from '@/atoms/game'
import { isPrizeVisibleAtom } from '@/atoms/prizes.js'
import { showGuideAtom } from '@/atoms/gameGuide.js'
import { useScroll } from '@react-three/drei'

export const useGameInterval = ({ victoryAudioRef }) => {
  const gameTimerRef = useRef(null)
  const { el } = useScroll()
  const isStarted = useAtomValue(gameIsStartedAtom)
  const isPaused = useAtomValue(gamePauseAtom)
  const isPrizeVisible = useAtomValue(isPrizeVisibleAtom)
  const score = useAtomValue(gameScoreAtom)
  const showGameGuide = useSetAtom(showGuideAtom)
  const setScore = useSetAtom(gameSetScoreAtom)
  const setTime = useSetAtom(gameTimeAtom)
  const setIsPaused = useSetAtom(gamePauseAtom)
  const setIsPrizeVisible = useSetAtom(isPrizeVisibleAtom)

  const handleTogglePauseTheGame = useCallback(() => {
    scrollIntoView(el)
    if (isPaused) {
      setIsPrizeVisible(false)
      setIsPaused(false)
      setScore(score => score + 1)
    } else {
      setIsPaused(true)
      clearInterval(gameTimerRef.current)
    }
  }, [isPaused, setIsPaused, setScore, gameTimerRef.current])

  useEffect(() => {
    if (isStarted || gameTimerRef.current) {
      clearInterval(gameTimerRef.current)
    }

    /**
     * Start the game tick
     */
    gameTimerRef.current = setInterval(() => {
      if (isPaused || !isStarted) return

      let prevScore = 0
      let prevTime = 0
      setTime(time => {
        prevTime = time
        return time + 0.1
      })
      setScore(score => {
        prevScore = score
        return score + 0.1
      })

      /**
       * Check if the game is ended
       */
      if (prevScore >= 700) {
        clearInterval(gameTimerRef.current)
      }

      /**
       * Show the guide
       */
      if (prevTime >= 2 && prevTime < 2.1) {
        showGameGuide('defend')
      } else if (prevTime >= 6 && prevTime < 6.1) {
        showGameGuide('jump')
      } else if (prevTime >= 13 && prevTime < 13.1) {
        showGameGuide('sit')
      } else if (prevTime >= 18 && prevTime < 18.1) {
        showGameGuide('shoot')
      }
    }, 400)
  }, [isStarted, isPaused, setScore, setTime])

  useEffect(() => {
    if (score >= 700 && isStarted) {
      victoryAudioRef.current.play()
      clearInterval(gameTimerRef.current)
    }
  }, [score, isStarted])

  const showingReward = isPaused && isPrizeVisible

  return { gameTimerRef, handleTogglePauseTheGame, showingReward }
}
