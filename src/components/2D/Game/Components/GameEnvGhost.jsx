import { useCallback, useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { GHOST } from '../base64_files'
import {
  gameIsStartedAtom,
  gamePauseAtom,
  gamePlayerCurrentAction,
  gamePlayerFire1AtomX,
  gamePlayerFire2AtomX,
  gamePlayerLifeSetAtom
} from '@/atoms/game'
import { throttle } from 'lodash-es'
import { useExplosion } from '../useExplosion'

export const GameEnvGhost = ({ hitAudioRef }) => {
  const explodeRef = useRef(null)
  const ghostControls = useAnimation()
  const [hide, setHide] = useState(false)

  const deductPlayerLife = useSetAtom(gamePlayerLifeSetAtom)
  const [playerCurrentAction, setPlayerCurrentAction] = useAtom(gamePlayerCurrentAction)
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const isGamePaused = useAtomValue(gamePauseAtom)

  const explodeFire = useExplosion({ duration: 800, id: 'ghost' })

  const startFire = useCallback(() => {
    if (!isGameStarted) {
      ghostControls.stop()
      return
    }

    ghostControls.start(() => ({
      x: ['-12vw', '-68vw'],
      y: [3, -5, 3, -5, 3],
      transition: { duration: 3, repeat: Infinity, ease: 'linear' }
    }))
  }, [isGameStarted])

  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!isGameStarted) {
      ghostControls.stop()
      return
    }

    startFire()
  }, [isGameStarted, startFire])

  // const handleDinoFireUpdate = useCallback(
  //   throttle(e => {
  //     if (hide || !isGameStarted) return
  //
  //     const x = parseInt(e.x + '')
  //     if (
  //       (playerFire1AtomX && playerFire1AtomX - x > -2 && playerFire1AtomX - x < 0) ||
  //       (playerFire2AtomX && playerFire2AtomX - x > -2 && playerFire2AtomX - x < 0)
  //     ) {
  //       setHide(true)
  //       setTimeout(() => {
  //         ghostControls.stop()
  //       }, 1000)
  //       explodeFire(explodeRef.current)
  //     }
  //
  //     if (x < -66 && !isPlayerHit && isGameStarted && !isGamePaused && !isShooting) {
  //       setIsPlayerHit(true)
  //       hitAudioRef.current.currentTime = 0
  //       hitAudioRef.current.play()
  //       deductPlayerLife(1)
  //       setTimeout(() => {
  //         setIsPlayerHit(false)
  //       }, 200)
  //     }
  //   }, 100),
  //   [isPlayerHit, isGameStarted, isGamePaused, isShooting, hide, playerFire1AtomX, playerFire2AtomX]
  // )

  // const handleDinoFireAnimationComplete = useCallback(() => {
  //   setHide(false)
  //   startFire()
  // }, [startFire])

  return (
    <motion.div
      key="dinosaurs-ghost"
      animate={ghostControls}
      // onUpdate={handleDinoFireUpdate}
      // onAnimationComplete={handleDinoFireAnimationComplete}
      className={`absolute -bottom-16 right-32 w-44 h-44 ${
        isGameStarted && !isGamePaused ? 'visible' : 'invisible'
      }`}>
      <div className="relative">
        <div ref={explodeRef} />
        {!hide && <img src={GHOST} alt="ghost" />}
        {!hide && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400 absolute top-[76px] left-[58px]"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m21 11l2-2c-3.73-3.73-8.87-5.15-13.7-4.31l2.58 2.58c3.3-.02 6.61 1.22 9.12 3.73zm-2 2a9.895 9.895 0 0 0-3.72-2.33l3.02 3.02l.7-.69zM9 17l3 3l3-3a4.237 4.237 0 0 0-6 0zM3.41 1.64L2 3.05L5.05 6.1C3.59 6.83 2.22 7.79 1 9l2 2c1.23-1.23 2.65-2.16 4.17-2.78l2.24 2.24A9.823 9.823 0 0 0 5 13l2 2a6.999 6.999 0 0 1 4.89-2.06l7.08 7.08l1.41-1.41L3.41 1.64z"
            />
          </svg>
        )}
      </div>
    </motion.div>
  )
}
