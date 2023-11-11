import { atom } from 'jotai'
import { currentPrizeAtom, currentPrizeSetAtom } from './prizes'

export const gameIsStartedAtom = atom(false)
export const gamePauseAtom = atom(false)

export const gameIsShootingAtom = atom(false)
export const gameIsPlayerHitAtom = atom(false)
export const gameIsDinoHitAtom = atom(false)
export const gameEnableRewardsAtom = atom(false)

export const gameScoreAtom = atom(0)
export const gameSetScoreAtom = atom(gameScoreAtom, (get, set, arg) => {
  set(gameScoreAtom, arg)
  const currentPrize = get(currentPrizeAtom)
  const newVal = get(gameScoreAtom)

  if (newVal > 100 && newVal < 200 && currentPrize !== 'Education') {
    set(currentPrizeSetAtom, 'Education')
  } else if (newVal > 200 && newVal < 300 && currentPrize !== 'Projects') {
    set(currentPrizeSetAtom, 'Projects')
  } else if (newVal > 300 && newVal < 400 && currentPrize !== 'Certifications') {
    set(currentPrizeSetAtom, 'Certifications')
  } else if (newVal > 400 && newVal < 500 && currentPrize !== 'Talks') {
    set(currentPrizeSetAtom, 'Talks')
  } else if (newVal > 500 && currentPrize !== 'Experiences') {
    set(currentPrizeSetAtom, 'Experiences')
  }
})

export const gameTimeAtom = atom(0)

export const gameDinosaurLifeAtom = atom(100)
export const gamePlayerLifeAtom = atom(100)

/**
 * Fires location
 */
export const gameDinoFireAtomX = atom(0)
export const gamePlayerFire1AtomX = atom(0)
export const gamePlayerFire2AtomX = atom(0)
