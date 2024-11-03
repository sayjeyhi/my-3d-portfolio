import { MotionConfig } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
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
import useDeviceType from '@/loading.jsx'
import { FullInfo } from '@/components/2D/FullInfo.jsx'
import { AboutMeSection } from '@/components/2D/AboutMe.jsx'
import { ContactSection } from '@/components/2D/Contact.jsx'
// import { Perf } from 'r3f-perf'

// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'
// if (import.meta.env.DEV) {
//   studio.initialize()
//   studio.extend(extension)
// }

function App() {
  const sheet = getProject('sayjeyhi.com', { state }).sheet('r3f')
  const isAmsterdam = useAtomValue(isAmsterdamAtom)
  const searchParams = new URLSearchParams(window.location.search)
  const isLightweight = searchParams.get('lightweight')

  const deviceType = useDeviceType()

  if (isLightweight) {
    return (
      <>
        <FullInfo
          before={<AboutMeSection ignoreScroll className="mt-12" />}
          after={<ContactSection />}
        />
      </>
    )
  }

  if (deviceType === 'mobile') {
    // Mobile is not supported
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mb-6"
          width="64"
          height="64"
          viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z" />
            <path
              strokeLinecap="round"
              d="M15 19H9m7.748-16.622l-.084.126c-.756 1.134-1.134 1.701-1.686 2.044a3 3 0 0 1-.342.183c-.592.27-1.273.27-2.636.27s-2.045 0-2.636-.27a3 3 0 0 1-.342-.183c-.552-.343-.93-.91-1.686-2.044l-.084-.126"
              opacity=".5"
            />
          </g>
        </svg>
        <p className="font-semibold text-lg">Unfortunately mobile is not supported yet.</p>
        <span className="font-light text-sm mt-2">
          Use a desktop browser or switch light weight mode.
        </span>

        <div className="mt-6 flex items-center justify-center">
          <button
            className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg"
            onClick={() => (window.location.href = '/?lightweight=true')}>
            Light weight mode
          </button>
        </div>
      </div>
    )
  }

  return (
    <MotionConfig
      transition={{
        ...framerMotionConfig
      }}>
      <Canvas gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]}>
        {/*<Perf />*/}
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
