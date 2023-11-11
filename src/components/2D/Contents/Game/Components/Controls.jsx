import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { audioAtom } from '@/atoms/audio'
import {
  gameDinosaurLifeAtom,
  gameIsStartedAtom,
  gamePauseAtom,
  gamePlayerLifeAtom,
  gameSetScoreAtom,
  gameTimeAtom
} from '@/atoms/game'
import { currentPrizeSetAtom, isPrizeVisibleAtom, nextPrizeAtom } from '@/atoms/prizes'

export const Controls = () => {
  const [audioMuted, setAudioMuted] = useAtom(audioAtom)
  const playerLifeAtom = useAtomValue(gamePlayerLifeAtom)
  const [isStarted, setIsStarted] = useAtom(gameIsStartedAtom)
  const pauseGame = useSetAtom(gamePauseAtom)
  const setScore = useSetAtom(gameSetScoreAtom)
  const setTime = useSetAtom(gameTimeAtom)
  const setPrize = useSetAtom(currentPrizeSetAtom)
  const setDinoLife = useSetAtom(gameDinosaurLifeAtom)
  const setPlayerLife = useSetAtom(gamePlayerLifeAtom)
  const nextPrize = useAtomValue(nextPrizeAtom)

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
      <div className="flex gap-2">
        {!isStarted && (
          <button
            onClick={() => setIsStarted(a => !a)}
            className="bg-primary w-10 h-10 rounded-2xl text-white flex justify-center items-center">
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
              onClick={() => pauseGame(a => !a)}
              className="bg-primary w-10 h-10 rounded-2xl text-white flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 5h4v14H6zm8 0h4v14h-4z" />
              </svg>
            </button>
            <button
              onClick={() => {
                setScore(0)
                setTime(0)
                setDinoLife(100)
                setPlayerLife(100)
                setIsStarted(false)
              }}
              className="bg-primary w-10 h-10 rounded-2xl text-white flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 22q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 13h2q0 2.925 2.038 4.963T12 20q2.925 0 4.963-2.038T19 13q0-2.925-2.038-4.963T12 6h-.15l1.55 1.55L12 9L8 5l4-4l1.4 1.45L11.85 4H12q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.713 3.513t-1.924 2.85q-1.213 1.212-2.85 1.925T12 22Z"
                />
              </svg>
            </button>
          </>
        )}

        <button
          onClick={() => setAudioMuted(a => !a)}
          className="bg-primary w-10 h-10 rounded-2xl flex justify-center items-center">
          {audioMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M4.34 2.93L2.93 4.34L7.29 8.7L7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06a8.94 8.94 0 0 0 3.61-1.75l2.05 2.05l1.41-1.41L4.34 2.93zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76zm4.5 8A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
              />
            </svg>
          )}
        </button>

        <button
          onClick={() => setPrize(nextPrize)}
          className="bg-primary h-10 text-white rounded-2xl px-4 flex justify-center items-center pixel text-lg">
          Jump to {nextPrize}
        </button>
      </div>
      <div />
    </div>
  )
}
