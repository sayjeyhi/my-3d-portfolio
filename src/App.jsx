import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { MotionConfig } from 'framer-motion'
import { Leva } from 'leva'
import { useEffect, useState } from 'react'
import { Experience } from './components/Experience'
import { Interface } from './components/Interface/Interface'
import { ScrollManager } from './components/ScrollManager'
import { framerMotionConfig } from './config'

function App() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    setMenuOpened(false)
  }, [section])

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig
        }}>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={['#f6f4f0']} />

          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface
                setSection={setSection}
                menuOpened={menuOpened}
                setMenuOpened={setMenuOpened}
              />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </MotionConfig>
      <Leva hidden />
    </>
  )
}

export default App
