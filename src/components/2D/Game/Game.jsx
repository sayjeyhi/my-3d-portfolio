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
    <Section
      id="game-section"
      className={`mt-48 ${
        showingReward ? 'border-t-8 border-b-8 border-gray-300 reward-bg pixel' : ''
      }`}>
      <div className="relative w-full h-3/4">
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
        <Guide dinoRef={dinoRef} />
      </div>

      <Audios
        hitAudioRef={hitAudioRef}
        jumpAudioRef={jumpAudioRef}
        victoryAudioRef={victoryAudioRef}
      />
    </Section>
  )
}
