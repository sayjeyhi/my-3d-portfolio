import { useCallback, useEffect, useRef, useState } from 'react'
import throttle from 'lodash-es/throttle'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { gameIsStartedAtom, gamePauseAtom } from '@/atoms/game'
import { isMusicEnabledAtom } from '@/atoms/audio'
import { isCursorActiveAtom } from '@/atoms/cursor.js'
import { currentSectionAtom, isSidebarOpenedAtom, showFullInformationAtom } from '@/atoms/menu.js'

const isTouchDevice =
  'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0

const audioSection1 = new Audio('/audio/s1.mp3')
const audioSection2 = new Audio('/audio/s2.mp3')
const gameSection = new Audio('/audio/game.mp3')

audioSection2.volume = 0
audioSection1.volume = 0
gameSection.volume = 0

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0
  })

  useEffect(() => {
    const updatePosition = throttle(event => {
      const { clientX, clientY } = typeof event !== 'boolean' ? event : position

      setPosition({
        clientX,
        clientY
      })
    }, 10)

    document.body.addEventListener('mousemove', updatePosition, false)
    document.body.addEventListener('mouseenter', updatePosition, false)
    return () => {
      document.body.removeEventListener('mousemove', updatePosition)
      document.body.removeEventListener('mouseenter', updatePosition)
    }
  }, [])

  return position
}

export const Cursor = () => {
  const section = useAtomValue(currentSectionAtom)
  const isGameStarted = useAtomValue(gameIsStartedAtom)
  const isShowingFullInformationModal = useAtomValue(showFullInformationAtom)
  const isGamePaused = useAtomValue(gamePauseAtom)
  const isMusicEnabled = useAtomValue(isMusicEnabledAtom)
  const [menuOpened, setMenuOpened] = useAtom(isSidebarOpenedAtom)

  const intervalRefs = useRef([])
  const isAudioActive = useRef(!isMusicEnabled)
  if (isTouchDevice) {
    return null
  }

  const isCursorActive = useAtomValue(isCursorActiveAtom)
  const { clientX, clientY } = useMousePosition()

  const fadeOutAudioVolume = (audio, { step, key, to } = { step: 0.009 }) =>
    (intervalRefs.current[key] = setInterval(() => {
      if (audio.volume - step > to && audio.volume > 0.001) {
        audio.volume -= step
      } else {
        clearInterval(intervalRefs.current[key])
        intervalRefs.current[key] = null
      }
    }, 200))
  const fadeInAudioVolume = (audio, { step, key, to } = { step: 0.05 }) =>
    (intervalRefs.current[key] = setInterval(() => {
      if (audio.volume + step < to && audio.volume < 0.99) {
        audio.volume += step
      } else {
        clearInterval(intervalRefs.current[key])
        intervalRefs.current[key] = null
      }
    }, 20))

  useEffect(() => {
    if (!isMusicEnabled) {
      audioSection1.pause()
      audioSection2.pause()
      gameSection.pause()
      return
    } else {
      if (audioSection1.paused) audioSection1.play()
      if (audioSection2.paused) audioSection2.play()
      if (gameSection.paused) gameSection.play()
    }
    audioSection1.loop = true
    audioSection2.loop = true
    gameSection.loop = true

    if (isGameStarted && !isGamePaused) {
      gameSection.currentTime = 0
      fadeInAudioVolume(gameSection, { key: 'game', to: 0.6, step: 0.09 })
      fadeOutAudioVolume(audioSection1, { key: 'section1', to: 0, step: 0.1 })
      fadeOutAudioVolume(audioSection2, { key: 'section2', to: 0, step: 0.09 })
    } else if (section === 0) {
      fadeInAudioVolume(audioSection1, { key: 'section1', to: 0.9, step: 0.1 })
      fadeOutAudioVolume(audioSection2, { key: 'section2', to: 0, step: 0.09 })
      fadeOutAudioVolume(gameSection, { key: 'game', to: 0, step: 0.09 })
    } else {
      fadeOutAudioVolume(gameSection, { key: 'game', to: 0, step: 0.05 })
      fadeOutAudioVolume(audioSection1, { key: 'section1', to: 0, step: 0.1 })
      fadeInAudioVolume(audioSection2, { key: 'section2', to: 0.5, step: 0.09 })
    }

    const handleActivateAudio = () => {
      if (isAudioActive.current) return
      isAudioActive.current = true

      // start all sounds
      audioSection1.play()
      audioSection2.play()
      gameSection.play()
    }
    window.addEventListener('click', handleActivateAudio)
    return () => {
      window.removeEventListener('click', handleActivateAudio)
    }
  }, [section, isMusicEnabled, isGameStarted, isGamePaused])

  /**
   * Close menu on outside click
   */
  useEffect(() => {
    if (!menuOpened) return
    const handleCloseMenu = e => {
      const parent = e.target.parentElement
      if (!menuOpened || e.target.id === 'menu-button' || parent.id === 'menu-button') return
      setMenuOpened(false)
    }
    window.addEventListener('click', handleCloseMenu)
    return () => {
      window.removeEventListener('click', handleCloseMenu)
    }
  }, [menuOpened])

  const getCursorColor = () => {
    if (isShowingFullInformationModal) return '#3b82f6'
    return '#65a30c'
  }

  return (
    <div
      style={{
        opacity: !clientX && !clientY ? 0 : 1,
        zIndex: 9999,
        position: 'absolute',
        pointerEvents: 'none',
        left: clientX,
        top: clientY
      }}>
      <svg
        width={60}
        height={60}
        viewBox="0 0 100 100"
        style={{
          transform: `translate(-50%, -50%) scale(${isCursorActive ? 1.5 : 1})`,
          transition: 'transform .25s ease-in-out',
          stroke: isCursorActive ? getCursorColor() : 'transparent',
          strokeWidth: isCursorActive ? 3 : 1,
          fill: isCursorActive ? 'rgba(255,255,255,0.4)' : getCursorColor()
        }}>
        <circle cx="50" cy="50" r="16" />
        {!isAudioActive.current && (
          <circle
            className="animate-ping origin-center"
            cx="50"
            cy="50"
            r="16"
            style={{ opacity: 0.25 }}
          />
        )}
      </svg>
      {!isAudioActive.current && (
        <div className="text-gray-400 bold text-sm absolute w-[200px] -mt-10 -ml-[70px]">
          Click to activate audio
        </div>
      )}
    </div>
  )
}

export const useCursorHandlers = (options = {}) => {
  const setIsCursorActive = useSetAtom(isCursorActiveAtom)

  const onMouseEnter = useCallback(
    event => {
      if (options.onMouseEnter) {
        options.onMouseEnter(event)
      }

      setIsCursorActive(true)
    },
    [setIsCursorActive]
  )

  const onMouseLeave = useCallback(
    event => {
      if (options.onMouseLeave) {
        options.onMouseLeave(event)
      }

      setIsCursorActive(false)
    },
    [setIsCursorActive]
  )

  if (isTouchDevice) {
    return options
  }

  return { onMouseEnter, onMouseLeave }
}
