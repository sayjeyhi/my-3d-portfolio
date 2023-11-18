import { useCallback, useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  gameDinoWeaponVisible,
  gameIsStartedAtom,
  gamePauseAtom,
  gamePlayerCurrentAction,
  gamePlayerLifeSetAtom,
  gamePlayerSetCurrentAction,
  gameSetDinoWeaponVisible,
  PLAYER_ACTIONS
} from '@/atoms/game'
import { throttle } from 'lodash-es'

export const useEnemy = ({ hitAudioRef, animateOptions }) => {
  const animationControl = useAnimation()

  const deductPlayerLife = useSetAtom(gamePlayerLifeSetAtom)
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const isGamePaused = useAtomValue(gamePauseAtom)
  const playerCurrentAction = useAtomValue(gamePlayerCurrentAction)
  const setPlayerCurrentAction = useSetAtom(gamePlayerSetCurrentAction)
  const isEnemyVisible = useAtomValue(gameDinoWeaponVisible)
  const setDinoWeaponVisible = useSetAtom(gameSetDinoWeaponVisible)

  const startFire = useCallback(() => {
    if (!isGameStarted) {
      return
    }

    animationControl.start(() => ({
      transition: { duration: 3, repeat: 0, ease: 'linear' },
      ...animateOptions
    }))
  }, [isGameStarted])

  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted) {
      return
    }

    startFire()
  }, [isGameStarted, startFire])

  const onAnimationUpdate = useCallback(
    throttle(e => {
      if (!isGameStarted) return
      const x = parseInt(e.x + '')

      if (
        x < -66 &&
        isGameStarted &&
        !isGamePaused &&
        (playerCurrentAction !== PLAYER_ACTIONS.sit ||
          playerCurrentAction === PLAYER_ACTIONS.defend ||
          playerCurrentAction === PLAYER_ACTIONS.shoot ||
          playerCurrentAction === PLAYER_ACTIONS.hit)
      ) {
        setPlayerCurrentAction(PLAYER_ACTIONS.hit)
        hitAudioRef.current.currentTime = 0
        hitAudioRef.current.play()
        deductPlayerLife(1)
        setTimeout(() => {
          setPlayerCurrentAction(PLAYER_ACTIONS.idle)
        }, 200)
      }
    }, 100),
    [playerCurrentAction, isGameStarted, isGamePaused, setPlayerCurrentAction]
  )

  const onAnimationComplete = useCallback(() => {
    setDinoWeaponVisible(false)
  }, [])

  return {
    animationControl,
    onAnimationUpdate,
    onAnimationComplete,
    isEnemyVisible: isEnemyVisible && isGameStarted && !isGamePaused
  }
}
