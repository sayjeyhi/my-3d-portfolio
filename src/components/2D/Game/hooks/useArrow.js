import { useCallback, useEffect, useRef, useState } from 'react'
import { animate } from 'framer-motion'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  gameDinosaurLifeAtom,
  gameIsDinoHitAtom,
  gameIsStartedAtom,
  gamePauseAtom,
  gameSetScoreAtom
} from '@/atoms/game.js'

export const useArrow = (el, config) => {
  const animationControl = useRef(null)
  const animationControlTimer = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const isGamePaused = useAtomValue(gamePauseAtom)
  const [isDinoHit, setIsDinoHit] = useAtom(gameIsDinoHitAtom)
  const setDinoLife = useSetAtom(gameDinosaurLifeAtom)
  const setScore = useSetAtom(gameSetScoreAtom)
  const { hitAudioRef, dinoRef, playerRef, ...options } = config

  /**
   * Start the game animations
   */
  const runAnimation = useCallback(
    to => {
      animationControl.current = animate(el.current, to, {
        duration: 3.5,
        repeat: 0,
        ease: 'linear',
        onComplete() {
          setIsActive(false)

          animationControl.current.stop()
          animationControl.current.cancel()
          cancelAnimationFrame(animationControlTimer.current)

          animationControl.current = null
        },
        ...options
      })
      setIsActive(true)
    },
    [el, JSON.stringify(options)]
  )

  /**
   * Run animation tick
   */
  useEffect(() => {
    const checkAnimationTick = () => {
      if (isGameStarted && el?.current && isActive && animationControl.current) {
        const x = el.current.getBoundingClientRect().x
        if (!x) return

        const dinoPositionX =
          dinoRef.current.getBoundingClientRect().x - dinoRef.current.clientWidth + 210

        if (x > dinoPositionX && isGameStarted && !isGamePaused && !isDinoHit) {
          setIsActive(false)
          animationControl.current.stop()
          animationControl.current.cancel()
          animationControl.current.complete()

          setTimeout(() => {
            el.current.style.transform = 'none'
          }, 100)

          setIsDinoHit(true)
          hitAudioRef.current.currentTime = 0
          hitAudioRef.current.play()
          setDinoLife(life => life - 1)
          setScore(score => score + 6)
          setTimeout(() => {
            setIsDinoHit(false)
          }, 500)
        }
        animationControlTimer.current = requestAnimationFrame(checkAnimationTick)
      }
    }
    checkAnimationTick()
  }, [animationControl, isGameStarted, isGamePaused, isActive])

  /**
   * Remove side effect on unmount
   */
  useEffect(() => {
    return () => {
      if (animationControl.current) {
        setIsActive(false)
        animationControl.current.stop()
        animationControl.current.cancel()
        cancelAnimationFrame(animationControlTimer.current)

        animationControl.current = null
      }
    }
  }, [])

  /**
   * Pause the game animations
   */
  useEffect(() => {
    if (!animationControl.current) return

    if (isGamePaused) animationControl.current.pause()
    else if (!isGamePaused && isGameStarted) animationControl.current.play()
  }, [isGamePaused])

  return {
    runAnimation,
    isActive
  }
}
