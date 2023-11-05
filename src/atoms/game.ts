import { atom } from 'jotai'
import { focusAtom } from 'jotai-optics'

export const gameStateAtom = atom({
  isStarted: false,
  isPaused: false,
  isShooting: false,
  score: 0,
  time: 0
})

export const gameReadOnlyStateAtom = atom(get => get(gameStateAtom))

export const gameIsStartedAtom = focusAtom(gameStateAtom, optic => optic.prop('isStarted'))
export const gamePauseAtom = focusAtom(gameStateAtom, optic => optic.prop('isPaused'))

export const gameIsShootingAtom = focusAtom(gameStateAtom, optic => optic.prop('isShooting'))

export const gameScoreAtom = focusAtom(gameStateAtom, optic => optic.prop('score'))
export const gameTimeAtom = focusAtom(gameStateAtom, optic => optic.prop('time'))
