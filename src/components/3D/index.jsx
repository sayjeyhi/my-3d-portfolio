import { Scroll, Stage, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { animate, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'
import { framerMotionConfig } from '@/config'
import { Avatar } from './Avatar'
import { Office } from './Office'
import { Amsterdam } from './Amsterdam'
import { useCurrentSheet } from '@theatre/r3f'
import { val } from '@theatre/core'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { gameIsStartedAtom, gamePauseAtom } from '@/atoms/game'
import { isSidebarOpenedAtom } from '@/atoms/menu.js'
import { avatarCurrentAnimationAtom, isAmsterdamAtom } from '@/atoms/3d.js'

export const ThreeD = () => {
  const { camera } = useThree()
  const menuOpened = useAtomValue(isSidebarOpenedAtom)
  const data = useScroll()
  const [isAmsterdam, setIsAmsterdam] = useAtom(isAmsterdamAtom)
  const sheet = useCurrentSheet()
  const [animation, setCharacterAnimation] = useAtom(avatarCurrentAnimationAtom)
  const isStarted = useAtomValue(gameIsStartedAtom)
  const setIsPaused = useSetAtom(gamePauseAtom)

  const [section, setSection] = useState(0)

  const cameraPositionX = useMotionValue(camera.position.x)
  const cameraPositionZ = useMotionValue()
  const cameraLookAtX = useMotionValue()
  const cameraLookAtY = useMotionValue()
  const cameraLookAtZ = useMotionValue()

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -2 : 1.2, {
      ...framerMotionConfig
    })
    animate(cameraPositionZ, menuOpened ? 5 : 9.2, {
      ...framerMotionConfig
    })
    animate(cameraLookAtX, menuOpened ? 10 : 0, {
      ...framerMotionConfig
    })
    animate(cameraLookAtY, menuOpened ? -1 : 0.6, {
      ...framerMotionConfig
    })
    animate(cameraLookAtZ, menuOpened ? 10 : -1, {
      ...framerMotionConfig
    })
  }, [menuOpened])

  /**
   * Move camera based on mouse position
   */
  useEffect(() => {
    let oldMouseX = 0
    let oldMouseY = 0
    window.onmousemove = e => {
      if (animation !== 'Typing' && animation !== 'PhoneCall') return
      let xAxesMultiplier = 0.00008
      let yAxesMultiplier = 0.0001
      if (animation === 'PhoneCall') {
        xAxesMultiplier = 0.00002
        yAxesMultiplier = 0.00003
      }
      cameraPositionX.set(cameraPositionX.get() + (e.x - oldMouseX) * xAxesMultiplier)
      camera.position.y -= (e.y - oldMouseY) * yAxesMultiplier
      oldMouseX = e.x
      oldMouseY = e.y
    }
  }, [animation, camera, menuOpened])

  useFrame(state => {
    let curSection = Math.floor(data.scroll.current * data.pages + 0.23)

    if (curSection > 3) {
      curSection = 3
    }

    if (curSection !== section) {
      setSection(curSection)
    }

    state.camera.position.x = cameraPositionX.get()
    state.camera.position.z = cameraPositionZ.get()
    state.camera.lookAt(cameraLookAtX.get(), cameraLookAtY.get(), cameraLookAtZ.get())
  })

  // our callback will run on every animation frame
  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length)
    sheet.sequence.position = data.offset * sequenceLength

    if (sheet.sequence.position < 0.5) {
      setCharacterAnimation('Typing')
    } else if (sheet.sequence.position < 1.5 && sheet.sequence.position >= 0.5) {
      setCharacterAnimation('Falling')
    } else if (sheet.sequence.position < 2.5 && sheet.sequence.position >= 1.5) {
      setCharacterAnimation('ShowOff')
    } else if (sheet.sequence.position < 3.7 && sheet.sequence.position >= 2.5) {
      setCharacterAnimation('Running')
    } else if (sheet.sequence.position < 4.03 && sheet.sequence.position >= 3.7) {
      setCharacterAnimation('TellingASecret')
    } else if (sheet.sequence.position < 10.08 && sheet.sequence.position >= 4.03) {
      if (!isAmsterdam && sheet.sequence.position > 6.1) setIsAmsterdam(true)
      else if (isAmsterdam && sheet.sequence.position <= 6.1) setIsAmsterdam(false)

      setCharacterAnimation('Running')
    } else if (sheet.sequence.position > 10.08) {
      setCharacterAnimation('PhoneCall')
    }

    if (sheet.sequence.position >= 7.5 && isStarted) {
      if (isStarted) setIsPaused(true)
    }
  })

  return (
    <Scroll>
      <Stage shadows intensity={0.5} adjustCamera={false}>
        <Avatar />
      </Stage>
      <Stage shadows intensity={0.5} adjustCamera={false}>
        <Office section={section} />
      </Stage>
      <Stage shadows intensity={0.5} adjustCamera={false}>
        <Amsterdam theatreKey="Amsterdam" />
      </Stage>
    </Scroll>
  )
}
