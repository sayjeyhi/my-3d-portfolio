import { createContext, useContext, useState, useEffect, useCallback } from 'react'
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

export const Cursor = () => {
  if (isTouchDevice) {
    return null
  }

  const { cursorActive: isCursorActive } = useContext(CursorContext)
  const { clientX, clientY } = useMousePosition()

  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 100 100"
      style={{
        opacity: !clientX && !clientY ? 0 : 1,
        zIndex: 9999,
        position: 'absolute',
        pointerEvents: 'none',
        left: clientX,
        top: clientY,
        transform: `translate(-50%, -50%) scale(${isCursorActive ? 1.5 : 1})`,
        stroke: isCursorActive ? '#65a30c' : 'transparent',
        strokeWidth: isCursorActive ? 3 : 1,
        fill: isCursorActive ? 'rgba(255,255,255,0.4)' : '#65a30c',
        transition: 'transform .25s ease-in-out'
      }}>
      <circle cx="50" cy="50" r="16" />
    </svg>
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
