import { useRef } from 'react'
import { Section } from '../Section'
import { Audios } from './Components/Audios'
import { Rewards } from './Components/Rewards'
import { Controls } from './Components/Controls'
import { TopTexts } from './Components/TopTexts'
import { GameEnvClouds } from './Components/GameEnvClouds'
import { GameEnvDino } from './Components/GameEnvDino'
import { Player } from './Components/Player.jsx'
import { EnemyFire } from './Components/EnemyFire.jsx'
import { PlayerArrow } from './Components/PlayerArrow.jsx'
import { GameEnvGround } from './Components/GameEnvGround'
import { useGameInterval } from './hooks/useGameInterval'
import { useKeyboard } from './hooks/useKeyboard'
import { EnemyBird } from '@/components/2D/Game/Components/EnemyBird.jsx'
import { EnemyGhost } from '@/components/2D/Game/Components/EnemyGhost.jsx'
import { useAtomValue } from 'jotai'
import { DINO_WEAPONS, gameDinoCurrentWeapon, gameIsStartedAtom } from '@/atoms/game'
import { Guide } from '@/components/2D/Game/Components/Guide.jsx'

export const GameSection = () => {
  const jumpAudioRef = useRef(null)
  const hitAudioRef = useRef(null)
  const victoryAudioRef = useRef(null)
  const visibleEnemyRef = useRef(null)
  const playerRef = useRef(null)
  const dinoRef = useRef(null)
  const playerArrow1 = useRef(null)
  const playerArrow2 = useRef(null)

  const dinoCurrentWeapon = useAtomValue(gameDinoCurrentWeapon)
  const isStarted = useAtomValue(gameIsStartedAtom)

  const { handleTogglePauseTheGame, showingReward } = useGameInterval({
    victoryAudioRef
  })
  useKeyboard({ handleTogglePauseTheGame, jumpAudioRef, playerArrow1, playerArrow2 })

  return (
    <>
      <Section
        id="game-section"
        className={`mt-48 lg:bg-white relative ${
          showingReward ? 'border-t-8 border-b-8 border-gray-300 reward-bg pixel' : ''
        }`}>
        <div className="relative w-full h-3/4 invisible lg:visible ">
          <TopTexts showingReward={showingReward} />

          <GameEnvClouds />
          <GameEnvDino dinoRef={dinoRef} />
          <Player playerRef={playerRef} />
          {isStarted && (
            <>
              {dinoCurrentWeapon === DINO_WEAPONS.FIRE && (
                <EnemyFire
                  dinoRef={dinoRef}
                  playerRef={playerRef}
                  visibleEnemyRef={visibleEnemyRef}
                  hitAudioRef={hitAudioRef}
                />
              )}
              {dinoCurrentWeapon === DINO_WEAPONS.BIRD && (
                <EnemyBird
                  dinoRef={dinoRef}
                  playerRef={playerRef}
                  visibleEnemyRef={visibleEnemyRef}
                  hitAudioRef={hitAudioRef}
                />
              )}
              {dinoCurrentWeapon === DINO_WEAPONS.GHOST && (
                <EnemyGhost
                  dinoRef={dinoRef}
                  playerRef={playerRef}
                  visibleEnemyRef={visibleEnemyRef}
                  hitAudioRef={hitAudioRef}
                />
              )}
            </>
          )}
          <PlayerArrow
            playerArrow1={playerArrow1}
            playerArrow2={playerArrow2}
            playerRef={playerRef}
            dinoRef={dinoRef}
            hitAudioRef={hitAudioRef}
          />
          <GameEnvGround />

          <Controls handleTogglePauseTheGame={handleTogglePauseTheGame} />
          <Rewards
            showingReward={showingReward}
            handleTogglePauseTheGame={handleTogglePauseTheGame}
          />
        </div>

        <Audios
          hitAudioRef={hitAudioRef}
          jumpAudioRef={jumpAudioRef}
          victoryAudioRef={victoryAudioRef}
        />

        <div className="w-full h-48 absolute top-[90%] lg:top-full left-0 right-0 lg:bg-gradient-to-b from-white to-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            className="w-24 h-24 absolute top-12 right-[10px] md:right-[30px] lg:right-1/4 mt-8 opacity-60">
            <path
              fill="#ededed"
              d="M18.167 19H9a3.5 3.5 0 0 1-.937-6.873 5.998 5.998 0 0 1 11.407-1.585A4.329 4.329 0 0 1 18.167 19z"
              className="colorb2b1ff svgShape"></path>
            <path
              fill="#ffffff"
              d="M8.063 12.127a5.996 5.996 0 0 1 4.538-4.959 4.987 4.987 0 0 0-3.259-2.096 4.994 4.994 0 0 0-5.769 4.074A3 3 0 0 0 4.5 15h1.042a3.496 3.496 0 0 1 2.521-2.873z"
              className="color6563ff svgShape"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            className="w-24 h-24 absolute top-12 left-[10px] md:left-[30px] lg:left-1/4 mt-8 opacity-60 transform -scale-y-100 -rotate-180">
            <path
              fill="#ededed"
              d="M18.167 19H9a3.5 3.5 0 0 1-.937-6.873 5.998 5.998 0 0 1 11.407-1.585A4.329 4.329 0 0 1 18.167 19z"
              className="colorb2b1ff svgShape"></path>
            <path
              fill="#ffffff"
              d="M8.063 12.127a5.996 5.996 0 0 1 4.538-4.959 4.987 4.987 0 0 0-3.259-2.096 4.994 4.994 0 0 0-5.769 4.074A3 3 0 0 0 4.5 15h1.042a3.496 3.496 0 0 1 2.521-2.873z"
              className="color6563ff svgShape"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1792 1792"
            className="w-24 h-24 absolute top-12 left-1/2 transform -translate-x-1/2 mt-8 mr-8 opacity-60">
            <path
              d="M1792 1173.6q0 148.4-105 253.4t-253.4 105H418.133q-172.666 0-295.4-122.733Q0 1286.533 0 1113.867q0-123.2 66.267-225.4 66.266-102.2 174.533-152.6-1.867-26.134-1.867-40.134 0-197.866 140-337.866 140-140 337.867-140 147.467 0 267.4 82.133 119.933 82.133 175 214.667 65.333-57.867 154.933-57.867 98.934 0 168.934 70t70 168.933q0 70-38.267 128.8 120.4 28 198.8 125.534Q1792 1047.6 1792 1173.6Z"
              fill="#ffffff"></path>
          </svg>
        </div>
      </Section>
    </>
  )
}
