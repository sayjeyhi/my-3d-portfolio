import { useCallback, useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { BIRD } from '../base64_files'
import {
  gameIsStartedAtom,
  gamePauseAtom,
  gamePlayerCurrentAction,
  gamePlayerFire1AtomX,
  gamePlayerFire2AtomX,
  gamePlayerLifeSetAtom,
  PLAYER_ACTIONS
} from '@/atoms/game'
import { throttle } from 'lodash-es'
import { useExplosion } from '../useExplosion'

export const GameEnvBird = ({ hitAudioRef }) => {
  const explodeRef = useRef(null)
  const animationStarted = useRef(false)

  const birdControls = useAnimation()
  const [hide, setHide] = useState(false)

  const deductPlayerLife = useSetAtom(gamePlayerLifeSetAtom)
  const [playerCurrentAction, setPlayerCurrentAction] = useAtom(gamePlayerCurrentAction)
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const isGamePaused = useAtomValue(gamePauseAtom)
  const playerFire1AtomX = useAtomValue(gamePlayerFire1AtomX)
  const playerFire2AtomX = useAtomValue(gamePlayerFire2AtomX)

  const explodeFire = useExplosion({ duration: 800, id: 'bird' })

  const startFire = useCallback(() => {
    if (!isGameStarted) {
      birdControls.stop()
      return
    }

    birdControls.start(() => ({
      x: ['-12vw', '-68vw'],
      scaleX: [-1],
      transition: { duration: 3, repeat: 0, ease: 'linear' }
    }))
  }, [isGameStarted])

  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted) {
      return
    }

    birdControls.stop()
    startFire()
  }, [isGameStarted, startFire])

  const handleDinoFireUpdate = useCallback(
    throttle(e => {
      if (hide || !isGameStarted) return

      const x = parseInt(e.x + '')
      if (
        (playerFire1AtomX && playerFire1AtomX - x > -2 && playerFire1AtomX - x < 0) ||
        (playerFire2AtomX && playerFire2AtomX - x > -2 && playerFire2AtomX - x < 0)
      ) {
        setHide(true)
        setTimeout(() => {
          birdControls.stop()
        }, 1000)
        explodeFire(explodeRef.current)
      }

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
    [
      playerCurrentAction,
      isGameStarted,
      isGamePaused,
      setPlayerCurrentAction,
      hide,
      playerFire1AtomX,
      playerFire2AtomX
    ]
  )

  const handleDinoFireAnimationStart = useCallback(() => {
    animationStarted.current = true
  }, [startFire])

  const handleDinoFireAnimationComplete = useCallback(() => {
    if (!animationStarted.current) return

    animationStarted.current = false
    setHide(false)
    startFire()
  }, [startFire])

  return (
    <motion.div
      key="dinosaurs-bird"
      animate={birdControls}
      onUpdate={handleDinoFireUpdate}
      onAnimationStart={handleDinoFireAnimationStart}
      onAnimationComplete={handleDinoFireAnimationComplete}
      className={`absolute bottom-48 right-32 w-24 h-24 ${
        isGameStarted && !isGamePaused ? 'visible' : 'invisible'
      }`}>
      <div className="relative">
        <div ref={explodeRef} />
        {!hide && <img src={BIRD} alt="bird" />}
      </div>
    </motion.div>
  )
}
