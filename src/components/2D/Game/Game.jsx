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
import { PlayerFire } from './Components/PlayerFire.jsx'
import { GameEnvGround } from './Components/GameEnvGround'
import { useGameInterval } from './hooks/useGameInterval'
import { useKeyboard } from './hooks/useKeyboard'
import { EnemyBird } from '@/components/2D/Game/Components/EnemyBird.jsx'
import { EnemyGhost } from '@/components/2D/Game/Components/EnemyGhost.jsx'
import { useAtomValue } from 'jotai'
import { DINO_WEAPONS, gameDinoCurrentWeapon } from '@/atoms/game'

export const GameSection = () => {
  const jumpAudioRef = useRef(null)
  const hitAudioRef = useRef(null)
  const victoryAudioRef = useRef(null)
  const dinoCurrentWeapon = useAtomValue(gameDinoCurrentWeapon)

  const { handleTogglePauseTheGame, showingReward } = useGameInterval({
    victoryAudioRef
  })
  useKeyboard({ handleTogglePauseTheGame, jumpAudioRef })

  return (
    <Section
      className={`mt-48 ${
        showingReward ? 'border-t-8 border-b-8 border-gray-300 reward-bg pixel' : ''
      }`}>
      <div className="relative w-full h-3/4">
        <TopTexts showingReward={showingReward} />

        <GameEnvClouds />
        <GameEnvDino />
        <Player />
        {dinoCurrentWeapon === DINO_WEAPONS.FIRE && <EnemyFire hitAudioRef={hitAudioRef} />}
        {dinoCurrentWeapon === DINO_WEAPONS.BIRD && <EnemyBird hitAudioRef={hitAudioRef} />}
        {dinoCurrentWeapon === DINO_WEAPONS.GHOST && <EnemyGhost hitAudioRef={hitAudioRef} />}
        <PlayerFire hitAudioRef={hitAudioRef} />
        <GameEnvGround />

        <Controls handleTogglePauseTheGame={handleTogglePauseTheGame} />
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
