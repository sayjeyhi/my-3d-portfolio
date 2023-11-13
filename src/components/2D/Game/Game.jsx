import { useRef } from 'react'
import { Section } from '../Section'
import { Audios } from './Components/Audios'
import { Rewards } from './Components/Rewards'
import { Controls } from './Components/Controls'
import { TopTexts } from './Components/TopTexts'
import { GameEnvClouds } from './Components/GameEnvClouds'
import { GameEnvDino } from './Components/GameEnvDino'
import { GameEnvPlayer } from './Components/GameEnvPlayer'
import { GameEnvDinoFire } from './Components/GameEnvDinoFire'
import { GameEnvPlayerFire } from './Components/GameEnvPlayerFire'
import { GameEnvGround } from './Components/GameEnvGround'
import { useGameInterval } from './useGameInterval'
import { useKeyboard } from './useKeyboard'
import { GameEnvBird } from '@/components/2D/Game/Components/GameEnvBird.jsx'
import { GameEnvGhost } from '@/components/2D/Game/Components/GameEnvGhost.jsx'

export const GameSection = () => {
  const jumpAudioRef = useRef(null)
  const hitAudioRef = useRef(null)
  const victoryAudioRef = useRef(null)

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
        <GameEnvPlayer />
        <GameEnvDinoFire hitAudioRef={hitAudioRef} />
        <GameEnvBird hitAudioRef={hitAudioRef} />
        <GameEnvGhost hitAudioRef={hitAudioRef} />
        <GameEnvPlayerFire hitAudioRef={hitAudioRef} />
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
