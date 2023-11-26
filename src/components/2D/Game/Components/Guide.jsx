import { useAtomValue } from 'jotai'
import { currentGameGuideAtom, GAME_GUIDES, showGameGuideAtom } from '@/atoms/gameGuide.js'

export const Guide = ({ dinoRef }) => {
  const showGameGuide = useAtomValue(showGameGuideAtom)
  const currentGameGuide = useAtomValue(currentGameGuideAtom)

  if (!showGameGuide) return null

  let content = null
  switch (currentGameGuide) {
    case GAME_GUIDES[0]:
      content = (
        <h1>
          Press <kbd>D</kbd> or <kbd>➡</kbd> to defend
        </h1>
      )
      break
    case GAME_GUIDES[1]:
      content = (
        <h1>
          Press <kbd>W</kbd> or <kbd>⬆</kbd> to jump
        </h1>
      )
      break
    case GAME_GUIDES[2]:
      content = (
        <h1>
          Press <kbd>S</kbd> or <kbd>⬇</kbd> to sit
        </h1>
      )
      break
    case GAME_GUIDES[3]:
      content = (
        <h1>
          Press <kbd>Space</kbd> to shoot
        </h1>
      )
      break
  }

  return (
    <div
      className="absolute bottom-56 w-72 bg-primary rounded-2xl p-4 pixel"
      style={{ right: '200px' }}>
      {content}
    </div>
  )
}
