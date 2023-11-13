import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, SheetProvider } from '@theatre/r3f'
import { getProject } from '@theatre/core'
import { Experience } from './components/3D/Experience'
import { Interface } from './components/2D/Interface'
import { ScrollManager } from './components/ScrollManager'
import { framerMotionConfig } from './config'
import state from './state.json'

// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'
// if (import.meta.env.DEV) {
//   studio.initialize()
//   studio.extend(extension)
// }

export default function App() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)
  const sheet = getProject('sayjeyhi.com', { state }).sheet('r3f')

  // useEffect(() => {
  //   setMenuOpened(false)
  // }, [section])

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

          <ScrollControls pages={6} damping={0.1}>
            <ScrollManager
              setMenuOpened={setMenuOpened}
              section={section}
              onSectionChange={setSection}
            />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface
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
