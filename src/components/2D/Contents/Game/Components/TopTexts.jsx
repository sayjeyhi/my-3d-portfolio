import { gameIsStartedAtom, gameScoreAtom, gameTimeAtom } from '@/atoms/game'
import { useAtomValue } from 'jotai'
import { nextPrizeAtom } from '@/atoms/prizes.js'

export const TopTexts = ({ showingReward }) => {
  const isStarted = useAtomValue(gameIsStartedAtom)
  const time = useAtomValue(gameTimeAtom)
  const score = useAtomValue(gameScoreAtom)
  const nextPrize = useAtomValue(nextPrizeAtom)

  return (
    <>
      {!isStarted && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 stylish text-2xl text-gray-700 pixel">
          Press Space key to start the game with interesting prizes! 🎁
        </div>
      )}
      {isStarted && score < 502 && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 stylish text-2xl text-gray-700 pixel">
          {showingReward ? (
            <>Press Space key to continue</>
          ) : (
            <>
              Hit {Math.ceil(score / 100) * 100} scores and you will see my {nextPrize}
            </>
          )}
        </div>
      )}
      {isStarted && (
        <div className="absolute top-16 left-4 -translate-y-1/2 stylish text-3xl text-secondary pixel">
          Score: {score.toFixed(0)}
        </div>
      )}
      {isStarted && (
        <div className="absolute top-16 right-4 -translate-y-1/2 stylish text-3xl text-secondary pixel">
          Time: {time.toFixed(2)}
          <span className="text-lg">s</span>
        </div>
      )}
    </>
  )
}
