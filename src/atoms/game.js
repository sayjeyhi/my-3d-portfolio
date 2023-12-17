import { atom } from 'jotai'
import { currentPrizeAtom, currentPrizeSetAtom, isPrizeVisibleAtom } from './prizes'
import { gsap } from 'gsap'

/**
 * Start atoms
 */
export const scrollIntoView = el => {
  const gameSection = document.getElementById('game-section')
  gsap.to(el, {
    duration: 0.5,
    scrollTop: gameSection.offsetTop
  })
}

export const gameIsStartedAtom = atom(false)
export const gameSetIsStartedAtom = atom(gameIsStartedAtom, (get, set, arg) => {
  set(gameIsStartedAtom, arg)
  const newVal = get(gameIsStartedAtom)

  scrollIntoView(get(appScrollElement))
  if (newVal) {
    set(gameDinoWeaponVisible, true)
  } else {
    resetGame(set)
  }
})

export const gamePauseAtom = atom(false)
export const gameHasWonAtom = atom(false)
export const gameLooseAtom = atom(false)
export const gameReset = atom(gameIsStartedAtom, (get, set) => {
  scrollIntoView(get(appScrollElement))
  resetGame(set)
})
export const appScrollElement = atom(null)

/**
 * Dino Weapons atoms
 */
export const gameUseDinoHorseAtom = atom(false)

export const DINO_WEAPONS = {
  FIRE: 'Fire',
  BIRD: 'Bird',
  GHOST: 'Ghost'
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
  hitFire: 'hit-fire',
  hitGhost: 'hit-ghost',
  hitBird: 'hit-bird'
}
export const gamePlayerCurrentAction = atom(PLAYER_ACTIONS.idle)

let actionTimer = null
export const gamePlayerSetCurrentAction = atom(gamePlayerCurrentAction, (get, set, arg) => {
  const isJumpingRepeat =
    arg === PLAYER_ACTIONS.jump && get(gamePlayerCurrentAction) === PLAYER_ACTIONS.jump

  scrollIntoView(get(appScrollElement))

  if (!isJumpingRepeat) {
    if (actionTimer) clearTimeout(actionTimer)

    setTimeout(
      () => {
        set(gamePlayerCurrentAction, arg)
      },
      arg === PLAYER_ACTIONS.jump ? 100 : 0
    )
  }

  if (arg !== PLAYER_ACTIONS.idle) {
    actionTimer = setTimeout(
      () => {
        set(gamePlayerCurrentAction, PLAYER_ACTIONS.idle)
      },
      arg === PLAYER_ACTIONS.shoot ? 300 : arg === PLAYER_ACTIONS.jump ? 600 : 500
    )
  }
})

export const gameIsDinoHitAtom = atom(false)
export const gameDinosaurLifeAtom = atom(100)
export const gameDinosaurLifeDeductAtom = atom(gameDinosaurLifeAtom, (get, set, arg) => {
  const dinoLife = get(gameDinosaurLifeAtom)
  const usingHorse = get(gameUseDinoHorseAtom)
  const newLife = dinoLife - arg

  /**
   * Win
   */
  if (newLife < 5 && !usingHorse) {
    set(gameDinosaurLifeAtom, 100)
    set(gameUseDinoHorseAtom, true)
  } else if (newLife < 5 && usingHorse) {
    resetGame(set)
    set(gameHasWonAtom, true)
    set(gameLooseAtom, false)
  } else {
    set(gameDinosaurLifeAtom, newLife)
  }
})

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
    set(gamePauseAtom, true)
    set(gameHasWonAtom, true)
    set(gameLooseAtom, false)
  }

  /**
   * Use the horse
   */
  if (newVal > 250 && !get(gameUseDinoHorseAtom)) {
    set(gameUseDinoHorseAtom, true)
    set(gameDinosaurLifeAtom, 100)
  }
})

export const gameTimeAtom = atom(0)

const resetGame = set => {
  set(gameUseDinoHorseAtom, false)
  set(gamePauseAtom, false)
  set(gameIsStartedAtom, false)
  set(isPrizeVisibleAtom, false)
  set(gameIsDinoHitAtom, false)
  set(gameDinosaurLifeAtom, 100)
  set(gamePlayerLifeAtom, 100)
  set(gamePlayerCurrentAction, PLAYER_ACTIONS.idle)
  set(gameDinoCurrentWeapon, DINO_WEAPONS.FIRE)
  set(gamePlayerCurrentAction, '')
  set(currentPrizeAtom, '')
  set(gameScoreAtom, 0)
  set(gameTimeAtom, 0)
}
