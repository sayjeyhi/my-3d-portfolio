import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import throttle from 'lodash-es/throttle'

const isTouchDevice =
  'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0

const CursorContext = createContext({ cursorActive: false, setCursorActive: state => state })

export const CursorContextProvider = ({ children }) => {
  const [cursorActive, setCursorActive] = useState(false)

  return (
    <CursorContext.Provider
      value={{
        cursorActive,
        setCursorActive
      }}>
      {children}
    </CursorContext.Provider>
  )
}
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

const audioSection1 = new Audio('/s1.mp3')
const audioSection2 = new Audio('/s2.mp3')

export const Cursor = ({ section, audioMuted }) => {
  const intervalRefs = useRef([])
  const isAudioActive = useRef(false)
  if (isTouchDevice) {
    return null
  }

  const { cursorActive: isCursorActive } = useContext(CursorContext)
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
    if (audioMuted) {
      audioSection1.pause()
      audioSection2.pause()
      return
    } else {
      if (audioSection1.paused) audioSection1.play()
      if (audioSection2.paused) audioSection2.play()
    }
    audioSection1.loop = true
    audioSection2.loop = true

    if (section === 0) {
      fadeInAudioVolume(audioSection1, { key: 'section1', to: 0.9, step: 0.1 })
      fadeOutAudioVolume(audioSection2, { key: 'section2', to: 0, step: 0.09 })
    } else if (section === 1) {
      fadeOutAudioVolume(audioSection1, { key: 'section1', to: 0, step: 0.1 })
      fadeInAudioVolume(audioSection2, { key: 'section2', to: 0.5, step: 0.09 })
    }

    const handleActivateAudio = () => {
      if (isAudioActive.current) return
      isAudioActive.current = true

      // start all sounds
      audioSection1.play()
      audioSection2.play()
    }
    window.addEventListener('click', handleActivateAudio)
    return () => {
      window.removeEventListener('click', handleActivateAudio)
    }
  }, [section, audioMuted])

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
          stroke: isCursorActive ? '#65a30c' : 'transparent',
          strokeWidth: isCursorActive ? 3 : 1,
          fill: isCursorActive ? 'rgba(255,255,255,0.4)' : '#65a30c'
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
  const context = useContext(CursorContext)
  if (!context) {
    throw new Error('useBrand must be used within a CursorContext')
  }

  const { setCursorActive } = context

  const onMouseEnter = useCallback(
    event => {
      if (options.onMouseEnter) {
        options.onMouseEnter(event)
      }

      setCursorActive(true)
    },
    [setCursorActive]
  )

  const onMouseLeave = useCallback(
    event => {
      if (options.onMouseLeave) {
        options.onMouseLeave(event)
      }

      setCursorActive(false)
    },
    [setCursorActive]
  )

  if (isTouchDevice) {
    return options
  }

  return { onMouseEnter, onMouseLeave }
}
