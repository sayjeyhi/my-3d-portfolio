import { useCallback, useEffect, useRef, useState } from 'react'
import { animate } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { gameIsStartedAtom, gamePauseAtom } from '@/atoms/game.js'

export const useGameAnimation = (el, to, options) => {
  const animationControl = useRef(null)
  const animationControlTimer = useRef(null)
  const [isActive, setIsActive] = useState(false)

  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const isGamePaused = useAtomValue(gamePauseAtom)

  /**
   * Start the game animations
   */
  const runAnimation = useCallback(() => {
    const { onComplete } = options
    animationControl.current = animate(el.current, to, {
      duration: 3.5,
      repeat: 0,
      ease: 'linear',
      onComplete() {
        setIsActive(false)

        animationControl.current.stop()
        animationControl.current.cancel()
        cancelAnimationFrame(animationControlTimer.current)

        onComplete && onComplete()
        animationControl.current = null
      },
      ...options
    })
    setIsActive(true)
  }, [el, JSON.stringify(options), to])

  /**
   * Run animation tick
   */
  useEffect(() => {
    const checkAnimationTick = () => {
      if (isGameStarted && el?.current && isActive && animationControl.current) {
        options.onUpdate && options.onUpdate(el, animationControl.current)
        animationControlTimer.current = requestAnimationFrame(checkAnimationTick)
      }
    }
    checkAnimationTick()
  }, [animationControl, isGameStarted, isGamePaused, options?.onUpdate, isActive])

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
