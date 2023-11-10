import { atom } from 'jotai'
import { focusAtom } from 'jotai-optics'

export const gameStateAtom = atom({
  isStarted: false,
  isPaused: false,
  isShooting: false,
  isPlayerHit: false,
  isDinoHit: false,
  score: 0,
  time: 0,
  dinosaurLife: 100,
  playerLife: 100
})

export const gameReadOnlyStateAtom = atom(get => get(gameStateAtom))

export const gameIsStartedAtom = focusAtom(gameStateAtom, optic => optic.prop('isStarted'))
export const gamePauseAtom = focusAtom(gameStateAtom, optic => optic.prop('isPaused'))

export const gameIsShootingAtom = focusAtom(gameStateAtom, optic => optic.prop('isShooting'))
export const gameIsPlayerHitAtom = focusAtom(gameStateAtom, optic => optic.prop('isPlayerHit'))
export const gameIsDinoHitAtom = focusAtom(gameStateAtom, optic => optic.prop('isDinoHit'))

export const gameScoreAtom = focusAtom(gameStateAtom, optic => optic.prop('score'))
export const gameTimeAtom = focusAtom(gameStateAtom, optic => optic.prop('time'))

export const gameDinosaurLifeAtom = focusAtom(gameStateAtom, optic => optic.prop('dinosaurLife'))
export const gamePlayerLifeAtom = focusAtom(gameStateAtom, optic => optic.prop('playerLife'))

/**
 * Fires location
 */
export const gameDinoFireAtomX = atom(0)
export const gamePlayerFire1AtomX = atom(0)
export const gamePlayerFire2AtomX = atom(0)
