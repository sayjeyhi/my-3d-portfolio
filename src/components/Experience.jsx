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

  const [characterAnimation, setCharacterAnimation] = useState('Typing')
  useEffect(() => {
    console.log('===section', section)
    setCharacterAnimation('Falling')
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? 'Typing' : 'Standing')
    }, 600)
  }, [section])

  useFrame(state => {
    let curSection = Math.floor(data.scroll.current * data.pages)

    console.log('curSection', data)
    if (curSection > 3) {
      curSection = 3
    }

    if (data.scroll.current > 0.05 && data.scroll.current < 0.2) {
      setSection(1)
    } else if (curSection !== section) {
      setSection(curSection)
    }

    console.log('cam pos', state.camera.position)
    state.camera.position.x = cameraPositionX.get()
    state.camera.position.z = cameraPositionZ.get()
    state.camera.lookAt(cameraLookAtX.get(), cameraLookAtY.get(), cameraLookAtZ.get())
  })

  return (
    <>
      <motion.group
        position={[0.45, 0.34, 3.8]}
        rotation={[-3.141592653589793, 1.153981633974482, 3.141592653589793]}
        animate={`${section}`}
        transition={{
          duration: 0.6
        }}
        variants={{
          0: {
            scaleX: 2.15,
            scaleY: 2.15,
            scaleZ: 2.15
          },
          1: {
            y: -viewport.height + 1.2,
            x: 0.3,
            z: 7,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
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
            y: -viewport.height * 2 + 1,
            x: 0.3,
            z: 8.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0
          }
        }}>
        <Avatar animation={characterAnimation} />
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
