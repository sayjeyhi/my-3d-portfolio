import { useCallback, useEffect, useRef } from 'react'

import { useAtomValue, useSetAtom } from 'jotai'
import {
  DINO_WEAPONS,
  gameDinoWeaponVisible,
  gameIsStartedAtom,
  gamePauseAtom,
  gamePlayerCurrentAction,
  gamePlayerLifeSetAtom,
  gamePlayerSetCurrentAction,
  gameSetDinoWeaponVisible,
  PLAYER_ACTIONS
} from '@/atoms/game'
import { animate } from 'framer-motion'

export const useEnemy = ({
  name,
  hitAudioRef,
  animateOptions,
  onEnemyDie,
  dinoRef,
  playerRef,
  visibleEnemyRef
}) => {
  const animationControl = useRef(null)
  const animationControlTimer = useRef(null)
  const deductPlayerLife = useSetAtom(gamePlayerLifeSetAtom)
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const isGamePaused = useAtomValue(gamePauseAtom)
  const playerCurrentAction = useAtomValue(gamePlayerCurrentAction)
  const setPlayerCurrentAction = useSetAtom(gamePlayerSetCurrentAction)
  const isEnemyVisible = useAtomValue(gameDinoWeaponVisible)
  const setDinoWeaponVisible = useSetAtom(gameSetDinoWeaponVisible)

  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted || animationControl.current || !visibleEnemyRef.current) {
      return
    }

    let duration = 3.5
    if (name === DINO_WEAPONS.BIRD) duration += 0.6

    animationControl.current = animate(visibleEnemyRef.current, animateOptions, {
      duration,
      repeat: 0,
      ease: 'linear',
      onComplete: onAnimationComplete
    })

    return () => {
      if (animationControl.current) {
        animationControl.current.stop()
        animationControl.current.cancel()
        // clear requestAnimationFrame
        cancelAnimationFrame(animationControlTimer.current)
      }
    }
  }, [isGameStarted])

  /**
   * Check if the enemy hit the player
   */
  useEffect(() => {
    const checkAnimationTick = () => {
      if (animationControl.current) {
        /**
         * Main code to check hit
         */
        if (
          !isGameStarted ||
          !visibleEnemyRef.current ||
          !playerRef.current ||
          !dinoRef.current ||
          !animationControl.current
        )
          return

        let playerWidth = playerRef.current.clientWidth
        const dinoPositionX = dinoRef.current.getBoundingClientRect().x
        const playerPositionX = playerRef.current.getBoundingClientRect().x
        const enemyPositionX = visibleEnemyRef.current.getBoundingClientRect().x

        if (playerCurrentAction === PLAYER_ACTIONS.defend) playerWidth -= 50
        else playerWidth -= 150

        if (!dinoPositionX || !playerPositionX || !enemyPositionX) return

        if (enemyPositionX - playerWidth <= playerPositionX && isGameStarted && !isGamePaused) {
          console.log('Hit candidate', name, playerCurrentAction)
          if (
            (name === DINO_WEAPONS.BIRD || name === DINO_WEAPONS.FIRE) &&
            playerCurrentAction === PLAYER_ACTIONS.defend
          ) {
            onEnemyDie(animationControl.current)
            setTimeout(() => {
              onAnimationComplete()
            }, 400)
          } else if (
            (name === DINO_WEAPONS.GHOST && playerCurrentAction !== PLAYER_ACTIONS.jump) ||
            (name === DINO_WEAPONS.BIRD && playerCurrentAction !== PLAYER_ACTIONS.sit) ||
            ((name === DINO_WEAPONS.FIRE || name === DINO_WEAPONS.BIRD) &&
              playerCurrentAction !== PLAYER_ACTIONS.defend)
          ) {
            setPlayerCurrentAction(PLAYER_ACTIONS.hit)
            hitAudioRef.current.currentTime = 0
            hitAudioRef.current.play()
            deductPlayerLife(1)
            setTimeout(() => {
              setPlayerCurrentAction(PLAYER_ACTIONS.idle)
            }, 200)

            onAnimationComplete()
          }
        }

        animationControlTimer.current = requestAnimationFrame(checkAnimationTick)
      }
    }
    checkAnimationTick()
  }, [animationControl, isGameStarted, isGamePaused, playerCurrentAction])

  /**
   * Stop the animation
   */
  const onAnimationComplete = useCallback(() => {
    if (animationControl.current) {
      animationControl.current.stop()
      animationControl.current.cancel()

      animationControl.current = null
      setDinoWeaponVisible()

      cancelAnimationFrame(animationControlTimer.current)
    }
  }, [animationControl])

  return {
    isEnemyVisible: isEnemyVisible && isGameStarted
  }
}
