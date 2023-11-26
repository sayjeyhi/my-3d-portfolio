import { atom } from 'jotai'
import { gamePauseAtom } from '@/atoms/game.js'

export const showGameGuideAtom = atom(false)

export const GAME_GUIDES = ['defend', 'jump', 'sit', 'shoot']

export const currentGameGuideAtom = atom(localStorage.getItem('watchedGameGuide') || '')
export const showGuideAtom = atom(currentGameGuideAtom, (get, set, arg) => {
  const currentGameGuide = get(currentGameGuideAtom)
  const currentGameGuideIndex = GAME_GUIDES.indexOf(currentGameGuide)
  const isGameGuideCompleted = currentGameGuideIndex === GAME_GUIDES.length - 1

  /**
   * Hide the game guide if it's completed
   */
  if (isGameGuideCompleted) {
    set(showGameGuideAtom, false)
    return
  }

  set(currentGameGuideAtom, arg)
  localStorage.setItem('watchedGameGuide', arg)
  set(showGameGuideAtom, true)
  set(gamePauseAtom, true)
})
