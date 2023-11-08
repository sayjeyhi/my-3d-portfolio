import { useEffect, useRef } from 'react'
import { Section } from '../../Section.jsx'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  gamePauseAtom,
  gameIsShootingAtom,
  gameIsStartedAtom,
  gameReadOnlyStateAtom,
  gameScoreAtom,
  gameTimeAtom
} from '../../../../../atoms/game'
import { Audios } from './Sections/Audios.jsx'
import { Rewards } from './Sections/Rewards.jsx'
import { Controls } from './Sections/Controls.jsx'
import { TopTexts } from './Sections/TopTexts.jsx'
import { GameEnvironment } from './Sections/GameEnvironment.jsx'

export const GameSection = () => {
  const jumpAudioRef = useRef(null)
  const hitAudioRef = useRef(null)
  const victoryAudioRef = useRef(null)
  const gameTimerRef = useRef(null)

  const gameState = useAtomValue(gameReadOnlyStateAtom)
  const setIsStarted = useSetAtom(gameIsStartedAtom)
  const setIsPaused = useSetAtom(gamePauseAtom)
  const setScore = useSetAtom(gameScoreAtom)
  const setTime = useSetAtom(gameTimeAtom)
  const setIsShooting = useSetAtom(gameIsShootingAtom)

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
    const handleKeyPress = e => {
      if (e.key === ' ') {
        e.preventDefault()
        if (gameState.isPaused) {
          handleTogglePauseTheGame()
        } else if (!gameState.isStarted) {
          setIsStarted(true)
        } else {
          jumpAudioRef.current.currentTime = 0
          jumpAudioRef.current.play()
          setIsShooting(true)
          setTimeout(() => {
            setIsShooting(false)
          }, 900)
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
  }, [gameState.isStarted, setIsStarted, setIsShooting, gameState.isPaused])

  const handleTogglePauseTheGame = () => {
    if (gameState.isPaused) {
      setIsPaused(false)
      setScore(score => score + 1)
    } else {
      setIsPaused(true)
      clearInterval(gameTimerRef.current)
    }
  }

  useEffect(() => {
    if (gameState.score >= 700 && gameState.isStarted) {
      victoryAudioRef.current.play()
      setIsStarted(false)
      setScore(0)
      setTime(0)
      clearInterval(gameTimerRef.current)
    }
  }, [gameState.score, gameState.isStarted])

  const showingReward = gameState.isPaused && gameState.score % 100 < 2 && gameState.score < 502

  return (
    <Section
      className={showingReward ? 'border-t-8 border-b-8 border-gray-300' : ''}
      style={{
        background: showingReward
          ? 'repeating-conic-gradient(hsl(0deg 0% 100% / 79%) 0deg 15deg, hsla(0,0%,100%,0) 0deg 30deg) #faff0059'
          : ''
      }}>
      <div className="relative w-full h-3/4">
        <TopTexts showingReward={showingReward} />
        <GameEnvironment hitAudioRef={hitAudioRef} />
        <Controls />
        <Rewards showingReward={showingReward} />
      </div>

      <Audios
        hitAudioRef={hitAudioRef}
        jumpAudioRef={jumpAudioRef}
        victoryAudioRef={victoryAudioRef}
      />
    </Section>
  )
}
