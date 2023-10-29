import { useEffect, useState, useReducer } from 'react'
import { MotionConfig } from 'framer-motion'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { SheetProvider, PerspectiveCamera } from '@theatre/r3f'
import { getProject } from '@theatre/core'
import { Experience } from './components/Experience'
import { Interface } from './components/Interface/Interface'
import { ScrollManager } from './components/ScrollManager'
import { framerMotionConfig } from './config'
import state from './state.json'

// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'
// if (import.meta.env.DEV) {
//   studio.initialize()
//   studio.extend(extension)
// }

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        startTime: new Date().getTime(),
        isStarted: true
      }
    case 'end':
      return {
        ...state,
        startTime: 0,
        isStarted: false,
        gameMode: false
      }
    case 'pause':
      return {
        ...state,
        isPaused: true
      }
    case 'resume':
      return {
        ...state,
        isPaused: false
      }
    case 'gameover':
      return {
        ...state,
        isGameOver: true
      }
    case 'gameMode':
      return {
        ...state,
        gameMode: action.payload
      }
    case 'jump':
      return {
        ...state,
        isJumping: action.payload
      }
    case 'gameTick':
      const time = (new Date().getTime() - state.startTime) / 1000
      const score = Math.floor(time * 12.5)

      if (Math.ceil(score / 100) * 100 > Math.ceil(state.score / 100) * 100) {
        document.getElementById('successAudioRef').play()
      }
      return {
        ...state,
        time,
        score,
        speed: Math.floor(time / 10 + 0.1)
      }
    default:
      throw new Error('Invalid action type')
  }
}

function App() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)
  const sheet = getProject('sayjeyhi.com', { state }).sheet('r3f')

  const [gameState, dispatchGameState] = useReducer(
    reducer,
    {
      gameMode: false,
      isStarted: false,
      isJumping: false,
      startTime: 0,
      score: 0,
      time: 0,
      speed: 0.1,
      isGameOver: false
    },
    () => ({
      gameMode: false,
      isStarted: false,
      isJumping: false,
      startTime: 0,
      score: 0,
      time: 0,
      speed: 0.1,
      isGameOver: false
    })
  )

  useEffect(() => {
    setMenuOpened(false)
  }, [section])

  return (
    <MotionConfig
      transition={{
        ...framerMotionConfig
      }}>
      <Canvas gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]}>
        <SheetProvider sheet={sheet}>
          <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, 3, 10]} />
          <color attach="background" args={['#ffffff']} />
          <ambientLight intensity={0.25} />

          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager
              setMenuOpened={setMenuOpened}
              section={section}
              onSectionChange={setSection}
            />
            <Scroll>
              <Experience
                section={section}
                menuOpened={menuOpened}
                gameState={gameState}
                dispatchGameState={dispatchGameState}
              />
            </Scroll>
            <Scroll html>
              <Interface
                gameState={gameState}
                dispatchGameState={dispatchGameState}
                section={section}
                setSection={setSection}
                menuOpened={menuOpened}
                setMenuOpened={setMenuOpened}
              />
            </Scroll>
          </ScrollControls>
        </SheetProvider>
      </Canvas>
    </MotionConfig>
  )
}

export default App
