import { Stage, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { animate, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'
import { framerMotionConfig } from '@/config'
import { Avatar } from './Avatar'
import { Office } from './Office'
import { Amsterdam } from './Amsterdam'
import { useCurrentSheet } from '@theatre/r3f'
import { val } from '@theatre/core'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  gameIsPlayerHitAtom,
  gameIsShootingAtom,
  gameIsStartedAtom,
  gamePauseAtom
} from '@/atoms/game'

export const Experience = props => {
  const { menuOpened } = props
  const data = useScroll()
  const sheet = useCurrentSheet()
  const [animation, setCharacterAnimation] = useState('Standing')
  const isShooting = useAtomValue(gameIsShootingAtom)
  const isHit = useAtomValue(gameIsPlayerHitAtom)
  const isStarted = useAtomValue(gameIsStartedAtom)
  const setIsPaused = useSetAtom(gamePauseAtom)

  const [section, setSection] = useState(0)

  const cameraPositionX = useMotionValue()
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
      setCharacterAnimation('Running')
    } else if (sheet.sequence.position > 10.08) {
      setCharacterAnimation('PhoneCall')
    }

    if (sheet.sequence.position >= 7.5 && isStarted) {
      if (isStarted) setIsPaused(true)
    }
  })

  return (
    <>
      <Stage shadows intensity={0.5} adjustCamera={false}>
        <Avatar animation={animation} />
      </Stage>
      <Stage shadows intensity={0.5} adjustCamera={false}>
        <Office section={section} />
      </Stage>
      <Stage shadows intensity={0.5} adjustCamera={false}>
        <Amsterdam theatreKey="Amsterdam" />
      </Stage>
    </>
  )
}
