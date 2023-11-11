import {
  gameHasWonAtom,
  gameIsStartedAtom,
  gamePauseAtom,
  gameScoreAtom,
  gameTimeAtom
} from '@/atoms/game'
import { useAtomValue } from 'jotai'
import { gameEnableRewardsAtom, nextPrizeAtom } from '@/atoms/prizes.js'

export const TopTexts = ({ showingReward }) => {
  const isStarted = useAtomValue(gameIsStartedAtom)
  const time = useAtomValue(gameTimeAtom)
  const score = useAtomValue(gameScoreAtom)
  const nextPrize = useAtomValue(nextPrizeAtom)
  const isGameRewardsEnabled = useAtomValue(gameEnableRewardsAtom)
  const hasWon = useAtomValue(gameHasWonAtom)
  const isPaused = useAtomValue(gamePauseAtom)

  return (
    <>
      {!isStarted && !hasWon && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 stylish text-2xl text-gray-700 pixel">
          <span className="text-2xl text-orange-700 mt-3">
            Press <kbd>Space</kbd> to start the game with interesting prizes! 🎁
          </span>
          <br />
          <span className="text-lg">
            {' '}
            Use <kbd>Space</kbd> to shoot and defend yourself from the dinosaur. 🦖
          </span>
        </div>
      )}
      {!isStarted && hasWon && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 stylish text-2xl text-gray-700 pixel">
          <span className="block text-4xl text-orange-700 mt-3">
            Congratulations! You have won the game! 🎉{' '}
          </span>
          <br /> Press <kbd>Space</kbd> key to restart the game with interesting prizes!
        </div>
      )}
      {isStarted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 stylish text-2xl text-gray-700 pixel">
          {showingReward || isPaused ? (
            <>
              Press <kbd>Space</kbd> to continue the game...
            </>
          ) : isGameRewardsEnabled && score < 502 ? (
            <>
              Hit {Math.ceil(score / 100) * 100} scores and you will see my {nextPrize}
            </>
          ) : (
            <>Earn 700 scores and win the game! 💪</>
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
