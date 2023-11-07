import { atom } from 'jotai'
import { focusAtom } from 'jotai-optics'

export const gameStateAtom = atom({
  isStarted: false,
  isPaused: false,
  isShooting: false,
  isHit: false,
  score: 0,
  time: 0,
  dianasourLife: 100,
  playerLife: 100
})

export const gameReadOnlyStateAtom = atom(get => get(gameStateAtom))

export const gameIsStartedAtom = focusAtom(gameStateAtom, optic => optic.prop('isStarted'))
export const gamePauseAtom = focusAtom(gameStateAtom, optic => optic.prop('isPaused'))

export const gameIsShootingAtom = focusAtom(gameStateAtom, optic => optic.prop('isShooting'))
export const gameIsHit = focusAtom(gameStateAtom, optic => optic.prop('isHit'))

export const gameScoreAtom = focusAtom(gameStateAtom, optic => optic.prop('score'))
export const gameTimeAtom = focusAtom(gameStateAtom, optic => optic.prop('time'))

export const gameDianasourLifeAtom = focusAtom(gameStateAtom, optic => optic.prop('dianasourLife'))
export const gamePlayerLifeAtom = focusAtom(gameStateAtom, optic => optic.prop('playerLife'))
