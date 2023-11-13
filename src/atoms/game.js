import { atom } from 'jotai'
import { currentPrizeAtom, currentPrizeSetAtom } from './prizes'

/**
 * Start atoms
 */
export const gameIsStartedAtom = atom(false)
export const gamePauseAtom = atom(false)
export const gameHasWonAtom = atom(false)
export const gameLooseAtom = atom(false)

/**
 * Actions atoms
 */
export const PLAYER_ACTIONS = {
  shoot: 'shoot',
  jump: 'jump',
  defend: 'defend',
  sit: 'sit',
  idle: 'idle',
  hit: 'hit'
}
export const gamePlayerCurrentAction = atom(PLAYER_ACTIONS.idle)

export const gameIsDinoHitAtom = atom(false)
export const gameDinosaurLifeAtom = atom(100)
export const gamePlayerLifeAtom = atom(100)
export const gamePlayerLifeSetAtom = atom(gamePlayerLifeAtom, (get, set, arg) => {
  const playerLife = get(gamePlayerLifeAtom)
  const newLife = playerLife - arg
  set(gamePlayerLifeAtom, newLife)

  if (newLife < 5) {
    set(gameLooseAtom, true)
    set(gamePauseAtom, true)
    set(gameIsStartedAtom, false)
    set(gamePlayerCurrentAction, '')
    set(gameIsDinoHitAtom, false)
    set(gameDinosaurLifeAtom, 100)
    set(gamePlayerLifeAtom, 100)
    set(currentPrizeAtom, '')
  }
})

/**
 * Fires location control atoms
 */
export const gameDinoFireAtomX = atom(0)
export const gamePlayerFire1AtomX = atom(0)
export const gamePlayerFire2AtomX = atom(0)

/**
 * Score and time atoms
 */
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
