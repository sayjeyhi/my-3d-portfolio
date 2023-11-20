import { atom } from 'jotai'
import { currentPrizeAtom, currentPrizeSetAtom } from './prizes'

/**
 * Start atoms
 */
export const gameIsStartedAtom = atom(false)
export const gameSetIsStartedAtom = atom(gameIsStartedAtom, (get, set, arg) => {
  set(gameIsStartedAtom, arg)
  const newVal = get(gameIsStartedAtom)

  if (newVal) {
    set(gameDinoWeaponVisible, true)
  } else {
    resetGame(set)
  }
})

export const gamePauseAtom = atom(false)
export const gameHasWonAtom = atom(false)
export const gameLooseAtom = atom(false)

/**
 * Dino Weapons atoms
 */
export const DINO_WEAPONS = {
  FIRE: 'fire',
  BIRD: 'bird',
  GHOST: 'ghost'
}
export const gameDinoCurrentWeapon = atom(DINO_WEAPONS.FIRE)
export const gameDinoWeaponVisible = atom(false)
export const gameSetDinoWeaponVisible = atom(gameDinoWeaponVisible, (get, set) => {
  const currentWeapon = get(gameDinoCurrentWeapon)

  if (currentWeapon === DINO_WEAPONS.FIRE) set(gameDinoCurrentWeapon, DINO_WEAPONS.GHOST)
  else if (currentWeapon === DINO_WEAPONS.GHOST) set(gameDinoCurrentWeapon, DINO_WEAPONS.BIRD)
  else if (currentWeapon === DINO_WEAPONS.BIRD) set(gameDinoCurrentWeapon, DINO_WEAPONS.FIRE)
})

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

let actionTimer = null
export const gamePlayerSetCurrentAction = atom(gamePlayerCurrentAction, (get, set, arg) => {
  if (actionTimer) clearTimeout(actionTimer)

  set(gamePlayerCurrentAction, arg)
  if (arg !== PLAYER_ACTIONS.idle) {
    actionTimer = setTimeout(
      () => {
        set(gamePlayerCurrentAction, PLAYER_ACTIONS.idle)
      },
      arg === PLAYER_ACTIONS.shoot ? 300 : 500
    )
  }
})

export const gameIsDinoHitAtom = atom(false)
export const gameDinosaurLifeAtom = atom(100)
export const gamePlayerLifeAtom = atom(100)
export const gamePlayerLifeSetAtom = atom(gamePlayerLifeAtom, (get, set, arg) => {
  const playerLife = get(gamePlayerLifeAtom)
  const newLife = playerLife - arg
  set(gamePlayerLifeAtom, newLife)

  /**
   * Loose
   */
  if (newLife < 5) {
    resetGame(set)
    set(gameHasWonAtom, false)
    set(gameLooseAtom, true)
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

  /**
   * Victory
   */
  if (newVal > 700) {
    resetGame(set)
    set(gameHasWonAtom, true)
    set(gameLooseAtom, false)
  }
})

export const gameTimeAtom = atom(0)

const resetGame = set => {
  set(gamePauseAtom, false)
  set(gameIsStartedAtom, false)
  set(gamePlayerCurrentAction, '')
  set(gamePlayerCurrentAction, PLAYER_ACTIONS.idle)
  set(gameIsDinoHitAtom, false)
  set(gameDinosaurLifeAtom, 100)
  set(gamePlayerLifeAtom, 100)
  set(currentPrizeAtom, '')
  set(gameScoreAtom, 0)
  set(gameTimeAtom, 0)
}
