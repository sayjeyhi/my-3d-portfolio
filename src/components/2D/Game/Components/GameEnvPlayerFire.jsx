import { useCallback, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { FIRE } from '../base64_files'
import {
  gameDinosaurLifeAtom,
  gameIsDinoHitAtom,
  gameIsStartedAtom,
  gamePauseAtom,
  gamePlayerCurrentAction,
  gamePlayerFire1AtomX,
  gamePlayerFire2AtomX,
  gameSetScoreAtom,
  PLAYER_ACTIONS
} from '@/atoms/game'
import { throttle } from 'lodash-es'

export const GameEnvPlayerFire = ({ hitAudioRef }) => {
  const [showFire1, setShowFire1] = useState(false)
  const [showFire2, setShowFire2] = useState(false)
  const playerFireControls1 = useAnimation()
  const playerFireControls2 = useAnimation()

  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const isGamePaused = useAtomValue(gamePauseAtom)
  const playerCurrentAction = useAtomValue(gamePlayerCurrentAction)
  const setPlayerFire1AtomX = useSetAtom(gamePlayerFire1AtomX)
  const setPlayerFire2AtomX = useSetAtom(gamePlayerFire2AtomX)
  const [isDinoHit, setIsDinoHit] = useAtom(gameIsDinoHitAtom)
  const setDinoLife = useSetAtom(gameDinosaurLifeAtom)
  const setScore = useSetAtom(gameSetScoreAtom)

  useEffect(() => {
    if (playerCurrentAction !== PLAYER_ACTIONS.shoot) {
      return
    }

    if (showFire1) {
      setTimeout(() => {
        setShowFire2(true)
        playerFireControls2.start(() => ({
          x: ['-67vw', '-12vw'],
          y: [-30, 0],
          rotate: [-90, -90, -90],
          transition: { duration: 3, repeat: 0, ease: 'linear' }
        }))
      }, 250)
    } else {
      setTimeout(() => {
        setShowFire1(true)
        playerFireControls1.start(() => ({
          x: ['-67vw', '-12vw'],
          y: [-30, 0, 0, 10],
          rotate: [-90, -90, -90],
          transition: { duration: 3, repeat: 0, ease: 'linear' }
        }))
      }, 250)
    }
  }, [playerCurrentAction])

  const checkIsHitDino = useCallback(
    x => {
      if (x > -12.5 && isGameStarted && !isGamePaused && !isDinoHit) {
        setIsDinoHit(true)
        hitAudioRef.current.currentTime = 0
        hitAudioRef.current.play()
        setDinoLife(life => life - 1)
        setScore(score => score + 6)
        setTimeout(() => {
          setIsDinoHit(false)
        }, 500)
      }
    },
    [isGameStarted, isGamePaused]
  )

  const handleFire1Update = useCallback(
    throttle(e => {
      const x = parseInt(e.x + '')
      setPlayerFire1AtomX(x)
      checkIsHitDino(x)
    }, 100),
    [checkIsHitDino, setPlayerFire1AtomX]
  )
  const handleFire2Update = useCallback(
    throttle(e => {
      const x = parseInt(e.x + '')
      setPlayerFire2AtomX(x)
      checkIsHitDino(x)
    }, 100),
    [checkIsHitDino, setPlayerFire2AtomX]
  )

  return (
    <>
      <motion.div
        animate={playerFireControls1}
        onUpdate={handleFire1Update}
        onAnimationComplete={() => {
          setShowFire1(false)
          playerFireControls1.stop()
        }}
        className={`absolute bottom-32 right-32 rotate-90 w-24 h-24 ${
          isGameStarted && !isGamePaused && showFire1 ? 'visible' : 'invisible'
        }`}>
        <div className="relative">
          <img src={FIRE} className="hue-rotate-180 " alt="player-fire" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-90 w-6 h-6 text-blue-600 absolute top-[60px] left-[70px]"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10q2.2 0 4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.738T12 13q-1.6 0-3.063.613T6.35 15.35ZM2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4q3.4 0 6.513 1.288T24 9l-2.1 2.1q-1.975-1.975-4.538-3.038T12 7Q9.2 7 6.637 8.063T2.1 11.1ZM12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16q1 0 1.913.375t1.612 1.075L12 21Z"
            />
          </svg>
        </div>
      </motion.div>
      <motion.div
        animate={playerFireControls2}
        onUpdate={handleFire2Update}
        onAnimationComplete={() => {
          setShowFire2(false)
          playerFireControls2.stop()
        }}
        className={`absolute bottom-32 right-32 rotate-90 w-24 h-24 ${
          isGameStarted && !isGamePaused && showFire2 ? 'visible' : 'invisible'
        }`}>
        <div className="relative">
          <img src={FIRE} className="hue-rotate-180 " alt="player-fire" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-90 w-6 h-6 text-blue-600 absolute top-[60px] left-[70px]"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10q2.2 0 4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.738T12 13q-1.6 0-3.063.613T6.35 15.35ZM2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4q3.4 0 6.513 1.288T24 9l-2.1 2.1q-1.975-1.975-4.538-3.038T12 7Q9.2 7 6.637 8.063T2.1 11.1ZM12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16q1 0 1.913.375t1.612 1.075L12 21Z"
            />
          </svg>
        </div>
      </motion.div>
    </>
  )
}
