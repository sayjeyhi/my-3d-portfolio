import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { gameIsSoundsEnabledAtom, isMusicEnabledAtom } from '@/atoms/audio'
import {
  gameDinoWeaponVisible,
  gameIsStartedAtom,
  gamePauseAtom,
  gamePlayerLifeAtom,
  gameReset
} from '@/atoms/game'
import {
  currentPrizeSetAtom,
  gameEnableRewardsAtom,
  isPrizeVisibleAtom,
  nextPrizeAtom
} from '@/atoms/prizes'

export const Controls = ({ handleTogglePauseTheGame }) => {
  const playerLifeAtom = useAtomValue(gamePlayerLifeAtom)
  const [isStarted, setIsStarted] = useAtom(gameIsStartedAtom)
  const [enabledRewards, setEnabledRewards] = useAtom(gameEnableRewardsAtom)
  const [isGameSoundsEnabled, setIsGameSoundsEnabled] = useAtom(gameIsSoundsEnabledAtom)
  const [isMusicEnabled, setIsMusicEnabled] = useAtom(isMusicEnabledAtom)
  const isPaused = useAtomValue(gamePauseAtom)
  const setDinoWeaponVisible = useSetAtom(gameDinoWeaponVisible)
  const resetGame = useSetAtom(gameReset)
  const setPrize = useSetAtom(currentPrizeSetAtom)
  const nextPrize = useAtomValue(nextPrizeAtom)

  const handleStartGame = () => {
    resetGame()
    setIsStarted(true)
    setDinoWeaponVisible(true)
  }
  const handleRestartTheGame = () => {
    resetGame()
  }

  const handleToggleGameSounds = () => {
    setIsGameSoundsEnabled(a => !a)
  }

  const handleToggleMusic = () => {
    setIsMusicEnabled(a => !a)
  }

  const handleToggleGameRewardsModal = () => {
    setEnabledRewards(enabled => !enabled)
  }

  const handleJumpToPrize = () => {
    setEnabledRewards(true)
    setPrize({
      value: nextPrize,
      playSuccessAudio: false
    })
  }

  return (
    <div className="flex justify-between items-center absolute -bottom-28 w-full left-0 right-0">
      <div className="flex ml-18 items-center font-semibold text-gray-800 pixel">
        Your Life:
        <div className="h-4 relative ml-2 w-48 rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200 absolute"></div>
          <div
            className={`h-full ${playerLifeAtom < 50 ? 'bg-red-500' : 'bg-primary'} absolute`}
            style={{ width: `${playerLifeAtom}%` }}></div>
        </div>
      </div>
      <div className="flex gap-2 control-buttons">
        {!isStarted && (
          <button
            data-title="Start the game"
            onClick={handleStartGame}
            className="bg-primary ring-lime-600 focus:outline-lime-700 w-10 h-10 rounded-2xl text-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="scale-150"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"
              />
            </svg>
          </button>
        )}
        {isStarted && (
          <>
            <button
              onClick={handleTogglePauseTheGame}
              data-title={isPaused ? 'Resume the game' : 'Pause the game'}
              className="bg-primary focus:outline-lime-700 w-10 h-10 rounded-2xl text-white flex justify-center items-center">
              {!isPaused ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6 5h4v14H6zm8 0h4v14h-4z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="scale-150"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"
                  />
                </svg>
              )}
            </button>
            <button
              data-title="Restart the game"
              onClick={handleRestartTheGame}
              className="bg-primary ring-lime-600 focus:outline-lime-700 w-10 h-10 rounded-2xl text-white flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M6 13c0-1.65.67-3.15 1.76-4.24L6.34 7.34A8.014 8.014 0 0 0 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91zm14 0c0-4.42-3.58-8-8-8c-.06 0-.12.01-.18.01l1.09-1.09L11.5 2.5L8 6l3.5 3.5l1.41-1.41l-1.08-1.08c.06 0 .12-.01.17-.01c3.31 0 6 2.69 6 6c0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93z"
                />
              </svg>
            </button>
          </>
        )}

        <button
          data-title="Toggle game sounds"
          onClick={handleToggleGameSounds}
          className="bg-primary ring-lime-600 focus:outline-lime-700 w-10 h-10 rounded-2xl flex justify-center items-center">
          {isGameSoundsEnabled ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M4.34 2.93L2.93 4.34L7.29 8.7L7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06a8.94 8.94 0 0 0 3.61-1.75l2.05 2.05l1.41-1.41L4.34 2.93zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76zm4.5 8A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
              />
            </svg>
          )}
        </button>
        <button
          data-title="Toggle background music"
          onClick={handleToggleMusic}
          className="bg-primary ring-lime-600 focus:outline-lime-700 w-10 h-10 rounded-2xl flex justify-center items-center">
          {isMusicEnabled ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M12 5v8.55c-.94-.54-2.1-.75-3.33-.32c-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 0 0 4.59 4.65c1.96-.31 3.35-2.11 3.35-4.1V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M14 9.61V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-3c-.55 0-1 .45-1 1v3.61l2 2zM5.12 3.56a.996.996 0 1 0-1.41 1.41l8.29 8.3v.28c-.94-.54-2.1-.75-3.33-.32c-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 0 0 4.59 4.65c1.96-.31 3.35-2.11 3.35-4.1v-1.58l5.02 5.02a.996.996 0 1 0 1.41-1.41L5.12 3.56z"
              />
            </svg>
          )}
        </button>
        <button
          data-title="Toggle game rewards modal"
          onClick={handleToggleGameRewardsModal}
          className="bg-primary ring-lime-600 focus:outline-lime-700 w-10 h-10 rounded-2xl flex justify-center items-center">
          {enabledRewards ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M9.06 1.93C7.17 1.92 5.33 3.74 6.17 6H3a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h9V8h2v3h9a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2h-3.17C19 2.73 14.6.42 12.57 3.24L12 4l-.57-.78c-.63-.89-1.5-1.28-2.37-1.29M9 4c.89 0 1.34 1.08.71 1.71C9.08 6.34 8 5.89 8 5a1 1 0 0 1 1-1m6 0c.89 0 1.34 1.08.71 1.71c-.63.63-1.71.18-1.71-.71a1 1 0 0 1 1-1M2 12v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8h-9v8h-2v-8H2Z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="m1.11 3l3.03 3.04H3a2 2 0 0 0-2 2v2c0 .55.45 1 1 1h7.15l1 1H2v8c0 1.1.9 2 2 2h16c.05 0 .09-.01.13-.04l1.43 1.45l1.27-1.27L2.39 1.73L1.11 3M11 12.89l2 2v5.15h-2v-7.15m11-.85v6.76l-6.76-6.76H22m-1-6h-3.17C19 2.77 14.6.455 12.57 3.28l-.57.76l-.57-.78C10.8 2.37 9.93 2 9.06 1.97c-1-.01-1.98.53-2.56 1.33l1.54 1.54c.09-.46.46-.8.96-.8c.89 0 1.34 1.08.71 1.71c-.15.14-.32.25-.5.25l2.03 2.04H13V9.8l1.24 1.24H22c.55 0 1-.45 1-1v-2c0-1.11-.89-2-2-2m-5.29-.29c-.63.63-1.71.18-1.71-.71c0-.54.45-1 1-1c.89 0 1.34 1.08.71 1.71Z"
              />
            </svg>
          )}
        </button>

        <button
          onClick={handleJumpToPrize}
          className="no-tooltip bg-primary ring-lime-600 focus:outline-lime-700 h-10 text-white rounded-2xl px-4 flex justify-center items-center pixel text-lg">
          Jump to {nextPrize}
        </button>
      </div>
      <div />
    </div>
  )
}
