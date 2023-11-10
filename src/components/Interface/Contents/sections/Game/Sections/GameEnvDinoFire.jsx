import { useEffect, useState, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { FIRE } from '../constants'
import {
  gameIsPlayerHitAtom,
  gameIsShootingAtom,
  gameIsStartedAtom,
  gamePauseAtom,
  gamePlayerFire1AtomX,
  gamePlayerFire2AtomX,
  gamePlayerLifeAtom
} from '../../../../../../atoms/game'
import { throttle } from 'lodash-es'

export const GameEnvDinoFire = ({ hitAudioRef }) => {
  const fireControls = useAnimation()
  const [hideFire, setHideFire] = useState(false)

  const setPlayerLifeAtom = useSetAtom(gamePlayerLifeAtom)
  const [isPlayerHit, setIsPlayerHit] = useAtom(gameIsPlayerHitAtom)
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const isGamePaused = useAtomValue(gamePauseAtom)
  const isShooting = useAtomValue(gameIsShootingAtom)
  const playerFire1AtomX = useAtomValue(gamePlayerFire1AtomX)
  const playerFire2AtomX = useAtomValue(gamePlayerFire2AtomX)

  const startFire = useCallback(() => {
    fireControls.start(() => ({
      x: ['-12vw', '-68vw'],
      rotate: [90, 90, 90],
      transition: { duration: 3, repeat: 0, ease: 'linear' }
    }))
  }, [])

  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted) return

    startFire()
  }, [isGameStarted, startFire])

  const handleDinoFireUpdate = useCallback(
    throttle(e => {
      console.log('hideFire', hideFire)
      if (hideFire) return

      const x = parseInt(e.x + '')
      if (
        (playerFire1AtomX && playerFire1AtomX - x > -2 && playerFire1AtomX - x < 0) ||
        (playerFire2AtomX && playerFire2AtomX - x > -2 && playerFire2AtomX - x < 0)
      ) {
        fireControls.stop()
        setHideFire(true)
      }

      if (x < -66 && !isPlayerHit && isGameStarted && !isGamePaused && !isShooting) {
        setIsPlayerHit(true)
        hitAudioRef.current.currentTime = 0
        hitAudioRef.current.play()
        setPlayerLifeAtom(life => life - 1)
        setTimeout(() => {
          setIsPlayerHit(false)
        }, 200)
      }
    }, 100),
    [
      isPlayerHit,
      isGameStarted,
      isGamePaused,
      isShooting,
      hideFire,
      playerFire1AtomX,
      playerFire2AtomX
    ]
  )

  const handleDinoFireAnimationComplete = useCallback(() => {
    setHideFire(false)
    startFire()
  }, [startFire])

  return (
    <motion.div
      key="dinosaurs-fire"
      src={FIRE}
      animate={fireControls}
      alt="dinosaur"
      onUpdate={handleDinoFireUpdate}
      onAnimationComplete={handleDinoFireAnimationComplete}
      className={`absolute bottom-32 right-32 rotate-90 w-24 h-24 ${
        isGameStarted && !isGamePaused && !hideFire ? 'visible' : 'invisible'
      }`}>
      <div className="relative">
        <img src={FIRE} alt="dino-fire" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-rotate-90 w-6 h-6 text-red-600 absolute top-[60px] left-[0px]"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m21 11l2-2c-3.73-3.73-8.87-5.15-13.7-4.31l2.58 2.58c3.3-.02 6.61 1.22 9.12 3.73zm-2 2a9.895 9.895 0 0 0-3.72-2.33l3.02 3.02l.7-.69zM9 17l3 3l3-3a4.237 4.237 0 0 0-6 0zM3.41 1.64L2 3.05L5.05 6.1C3.59 6.83 2.22 7.79 1 9l2 2c1.23-1.23 2.65-2.16 4.17-2.78l2.24 2.24A9.823 9.823 0 0 0 5 13l2 2a6.999 6.999 0 0 1 4.89-2.06l7.08 7.08l1.41-1.41L3.41 1.64z"
          />
        </svg>
      </div>
    </motion.div>
  )
}
