import { useCallback, useEffect, useState } from 'react'
import { useAnimation } from 'framer-motion'
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
import { throttle } from 'lodash-es'

export const useEnemy = ({ name, hitAudioRef, animateOptions }) => {
  const [playerCurrentPosition, setPlayerCurrentPosition] = useState(0)
  const [dinosaurCurrentPosition, setDinosaurCurrentPosition] = useState(0)
  const animationControl = useAnimation()

  const deductPlayerLife = useSetAtom(gamePlayerLifeSetAtom)
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const isGamePaused = useAtomValue(gamePauseAtom)
  const playerCurrentAction = useAtomValue(gamePlayerCurrentAction)
  const setPlayerCurrentAction = useSetAtom(gamePlayerSetCurrentAction)
  const isEnemyVisible = useAtomValue(gameDinoWeaponVisible)
  const setDinoWeaponVisible = useSetAtom(gameSetDinoWeaponVisible)

  useEffect(() => {
    // get player current clientX
    const playerX = document.getElementById('player').getBoundingClientRect().x
    const dinosaurX = document.getElementById('dinosaur').getBoundingClientRect().x
    setPlayerCurrentPosition(playerX)
    setDinosaurCurrentPosition(dinosaurX)
  }, [])

  const startAnimation = useCallback(() => {
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

    startAnimation()
  }, [isGameStarted, startAnimation])

  const onAnimationUpdate = useCallback(
    throttle(e => {
      if (!isGameStarted) return
      const x = parseInt(e.x + '')

      console.log('e', e, '  , player pos', playerCurrentPosition)
      if (
        x < -66 &&
        isGameStarted &&
        !isGamePaused &&
        ((name === DINO_WEAPONS.BIRD && playerCurrentAction !== PLAYER_ACTIONS.sit) ||
          (name === DINO_WEAPONS.GHOST && playerCurrentAction !== PLAYER_ACTIONS.jump) ||
          playerCurrentAction !== PLAYER_ACTIONS.defend ||
          playerCurrentAction !== PLAYER_ACTIONS.hit)
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
    [
      playerCurrentAction,
      isGameStarted,
      isGamePaused,
      setPlayerCurrentAction,
      playerCurrentPosition
    ]
  )

  const onAnimationComplete = useCallback(() => {
    console.log('DDDDDD onAnimationComplete')
    setDinoWeaponVisible()
  }, [])

  return {
    animationControl,
    onAnimationUpdate,
    onAnimationComplete,
    isEnemyVisible: isEnemyVisible && isGameStarted
  }
}
