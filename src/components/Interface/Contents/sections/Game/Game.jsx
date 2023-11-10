import { useEffect, useRef, useCallback } from 'react'
import { Section } from '../../Section.jsx'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  gamePauseAtom,
  gameIsShootingAtom,
  gameIsStartedAtom,
  gameReadOnlyStateAtom,
  gameScoreAtom
} from '../../../../../atoms/game'
import { Audios } from './Sections/Audios.jsx'
import { Rewards } from './Sections/Rewards.jsx'
import { Controls } from './Sections/Controls.jsx'
import { TopTexts } from './Sections/TopTexts.jsx'
import { GameEnvClouds } from './Sections/GameEnvClouds.jsx'
import { GameEnvDino } from './Sections/GameEnvDino.jsx'
import { GameEnvPlayer } from './Sections/GameEnvPlayer.jsx'
import { GameEnvDinoFire } from './Sections/GameEnvDinoFire.jsx'
import { GameEnvPlayerFire } from './Sections/GameEnvPlayerFire.jsx'
import { GameEnvGround } from './Sections/GameEnvGround.jsx'
import { useGameInterval } from './useGameInterval'

export const GameSection = () => {
  const gameState = useAtomValue(gameReadOnlyStateAtom)
  const setIsStarted = useSetAtom(gameIsStartedAtom)
  const setIsShooting = useSetAtom(gameIsShootingAtom)

  const jumpAudioRef = useRef(null)
  const hitAudioRef = useRef(null)
  const victoryAudioRef = useRef(null)
  const shootingTimerRef = useRef(null)

  const { handleTogglePauseTheGame } = useGameInterval({
    victoryAudioRef
  })

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === ' ') {
        e.preventDefault()
        if (gameState.isPaused) {
          handleTogglePauseTheGame()
        } else if (!gameState.isStarted) {
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
  }, [gameState.isStarted, setIsStarted, setIsShooting, gameState.isPaused])

  const showingReward =
    gameState.isPaused && gameState.score && gameState.score % 100 < 2 && gameState.score < 502

  return (
    <Section className={showingReward ? 'border-t-8 border-b-8 border-gray-300 reward-bg' : ''}>
      <div className="relative w-full h-3/4">
        <TopTexts showingReward={showingReward} />

        <GameEnvClouds />
        <GameEnvDino />
        <GameEnvPlayer />
        <GameEnvDinoFire hitAudioRef={hitAudioRef} />
        <GameEnvPlayerFire hitAudioRef={hitAudioRef} />
        <GameEnvGround />

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
