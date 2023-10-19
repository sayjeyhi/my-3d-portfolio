import { Stage, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { animate, useMotionValue } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { useEffect, useState } from 'react'
import { framerMotionConfig } from '../config'
import { Avatar } from './Models/Avatar.jsx'
import { Office } from './Models/Office.jsx'
import { Projects } from './Interface/Contents/components/Projects.jsx'

export const Experience = props => {
  const { menuOpened } = props
  const { viewport } = useThree()
  const data = useScroll()

  const [section, setSection] = useState(0)

  const cameraPositionX = useMotionValue()
  const cameraPositionZ = useMotionValue()
  const cameraLookAtX = useMotionValue()
  const cameraLookAtY = useMotionValue()
  const cameraLookAtZ = useMotionValue()

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -4 : 1.2, {
      ...framerMotionConfig
    })
    animate(cameraPositionZ, menuOpened ? 4 : 9.2, {
      ...framerMotionConfig
    })
    animate(cameraLookAtX, menuOpened ? 10 : 0, {
      ...framerMotionConfig
    })
    animate(cameraLookAtY, menuOpened ? -0.2 : 0.6, {
      ...framerMotionConfig
    })
    animate(cameraLookAtZ, menuOpened ? 6 : -1, {
      ...framerMotionConfig
    })
  }, [menuOpened])

  const [characterAnimation, setCharacterAnimation] = useState('Standing')
  useEffect(() => {
    if (section !== 0) setCharacterAnimation('Falling')
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? 'Typing' : 'Standing')
    }, 600)
  }, [section])

  useFrame(state => {
    let curSection = Math.floor(data.scroll.current * data.pages + 0.23)

    console.log('curSection', data)
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

  return (
    <>
      <motion.group
        initial={'100'}
        position={[0.67, 2.07, 4]}
        rotation={[-Math.PI, 1.0, Math.PI]}
        animate={`${section}`}
        transition={{
          duration: 0.6
        }}
        variants={{
          100: {
            opacity: 0
          },
          0: {
            opacity: 1,
            scaleX: 2.15,
            scaleY: 2.15,
            scaleZ: 2.15
          },
          1: {
            y: -viewport.height + 1,
            x: 2.5,
            z: 1,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scaleX: 2.9,
            scaleY: 2.9,
            scaleZ: 2.9
          },
          2: {
            x: -2,
            y: -viewport.height * 2 + 0.5,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 2.6,
            z: 3.5,
            rotateX: 0,
            rotateY: -Math.PI / 9,
            rotateZ: 0,

            scaleX: 3,
            scaleY: 3,
            scaleZ: 3
          }
        }}>
        <Stage shadows intensity={0.5} adjustCamera={false}>
          <Avatar animation={characterAnimation} />
        </Stage>
      </motion.group>
      <motion.group
        position={[1.4, 1.9, 4]}
        rotation-y={-Math.PI / 4}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.4 }}
        transition={{ duration: 0.5 }}>
        <Stage shadows intensity={0.5} adjustCamera={false}>
          <Office section={section} />
        </Stage>
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5
        }}>
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      </motion.group>
      <Projects />
    </>
  )
}
