import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { FIRE } from '../constants'
import {
  gameIsHit,
  gameIsShootingAtom,
  gameIsStartedAtom,
  gamePauseAtom,
  gamePlayerLifeAtom
} from '../../../../../../atoms/game'

export const GameEnvironmentPlayerFire = ({ hitAudioRef }) => {
  const playerFireControls = useAnimation()

  const setPlayerLifeAtom = useSetAtom(gamePlayerLifeAtom)
  const [isHit, setIsHit] = useAtom(gameIsHit)
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const isGamePaused = useAtomValue(gamePauseAtom)
  const isShooting = useAtomValue(gameIsShootingAtom)

  useEffect(() => {
    if (!isShooting) return

    playerFireControls.start(() => ({
      x: ['-76vw', '-12vw'],
      rotate: [-90, -90, -90],
      transition: { duration: 3, repeat: Infinity, ease: 'linear' }
    }))
  }, [isShooting])

  return (
    <motion.div
      animate={playerFireControls}
      onUpdate={e => {
        if (parseInt(e.x + '') > -12 && !isHit && isGameStarted && !isGamePaused && !isShooting) {
          setIsHit(true)
          hitAudioRef.current.currentTime = 0
          hitAudioRef.current.play()
          setPlayerLifeAtom(life => life - 1)
          setTimeout(() => {
            setIsHit(false)
          }, 200)
        }
      }}
      className={`absolute bottom-32 right-32 rotate-90 w-24 h-24 ${
        isGameStarted && !isGamePaused && isShooting ? 'visible' : 'invisible'
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
  )
}
