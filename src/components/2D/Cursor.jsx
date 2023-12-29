import { useCallback, useEffect, useRef, useState } from 'react'
import throttle from 'lodash-es/throttle'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { gameIsStartedAtom, gamePauseAtom } from '@/atoms/game'
import { isMusicEnabledAtom } from '@/atoms/audio'
import { isCursorActiveAtom } from '@/atoms/cursor.js'
import { currentSectionAtom, isSidebarOpenedAtom, showFullInformationAtom } from '@/atoms/menu.js'
import { log } from 'three/nodes'

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
  const [isAudioActive, setIsAudioActive] = useState(!isMusicEnabled)
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
    if (!isAudioActive && isMusicEnabled) {
      document.body.classList.add('cursor-pointer')
    } else {
      document.body.classList.remove('cursor-pointer')
    }

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
      if (isAudioActive) return
      setIsAudioActive(true)

      document.body.classList.remove('cursor-pointer')
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
      {!isAudioActive && (
        <div className="text-primary bold text-sm absolute w-[200px] -mt-12 -ml-[13px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-[pulse_1.4s_cubic-bezier(1,0,0,1)_infinite]"
            width="28"
            height="28"
            viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7.016 17.042C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.215 3.215 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17.127 17.127 0 0 1 1.5 12c0-.323.013-.671.035-1.029c.073-1.208.11-1.813.424-2.394a3.215 3.215 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.835.587.972 1.879 1.094 4.357" />
              <path
                d="M15.5 8.5V12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.317 2.317 0 0 1-.58.295c-.967.33-2.102-.328-4.2-1.702C8.833 17.915 7.4 17 7 17"
                opacity=".5"
                className=""
              />
              <path
                strokeLinecap="round"
                d="M20 18s1.5-1.8 1.5-6c0-2.433-.503-4.061-.927-5M18 15s.5-.9.5-3c0-.862-.084-1.522-.183-2"
                opacity=".5"
              />
              <path strokeLinecap="round" d="M22 2L2 22" />
            </g>
          </svg>
        </div>
      )}
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
        {!isAudioActive && (
          <circle
            className="animate-[ping_2s_cubic-bezier(0.18,0.89,0.32,1.27)_infinite] origin-center"
            cx="50"
            cy="50"
            r="28"
            style={{ opacity: 0.25 }}
          />
        )}
      </svg>
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
