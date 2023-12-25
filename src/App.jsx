import { MotionConfig } from 'framer-motion'
import { ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, SheetProvider } from '@theatre/r3f'
import { getProject } from '@theatre/core'
import { TwoD } from './components/2D/index.jsx'
import { ScrollManager } from './components/ScrollManager'
import { framerMotionConfig } from './config'
import state from './state.json'
import { ThreeD } from '@/components/3D/index.jsx'
import { useAtomValue } from 'jotai'
import { isAmsterdamAtom } from '@/atoms/3d.js'

// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'
// if (import.meta.env.DEV) {
//   studio.initialize()
//   studio.extend(extension)
// }

function App() {
  const sheet = getProject('sayjeyhi.com', { state }).sheet('r3f')
  const isAmsterdam = useAtomValue(isAmsterdamAtom)

  return (
    <MotionConfig
      transition={{
        ...framerMotionConfig
      }}>
      <Canvas gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]}>
        <SheetProvider sheet={sheet}>
          <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, 3, 10]} />
          <color attach="background" args={[isAmsterdam ? 'rgba(195,235,255,0.7)' : '#ffffff']} />

          <ScrollControls pages={6} damping={0.1}>
            <ScrollManager />
            <TwoD />
            <ThreeD />
          </ScrollControls>
        </SheetProvider>
      </Canvas>
    </MotionConfig>
  )
}

export default App
