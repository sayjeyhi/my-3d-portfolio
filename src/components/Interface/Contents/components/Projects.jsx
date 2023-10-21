import { Image, Text, RoundedBox } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { animate, useMotionValue } from 'framer-motion'

import { motion } from 'framer-motion-3d'
import { atom, useAtom } from 'jotai'
import { useEffect, useRef } from 'react'

export const projects = [
  {
    title: 'TEST',
    url: 'https://google.com',
    image: 'projects/wawatmos.jpg',
    description: 'Lorem ipsom'
  },
  {
    title: 'Portfolio Baking',
    url: 'https://www.youtube.com/watch?v=YkHqpqJgLKw',
    image: 'projects/baking.jpg',
    description: 'Learn how to bake a 3D model with Blender and use it in r3f'
  },
  {
    title: '3D Avatar',
    url: 'https://www.youtube.com/watch?v=pGMKIyALcK0',
    image: 'projects/avatar.jpg',
    description: 'Learn how to use ReadyPlayerMe to create a 3D avatar'
  },
  {
    title: 'Kanagame',
    url: 'https://www.youtube.com/watch?v=zwNF1-lsia8',
    image: 'projects/kanagame.jpg',
    description: 'Use React Three Fiber to create a 3D game'
  },
  {
    title: 'Loader',
    url: 'https://www.youtube.com/watch?v=L12wIvuZTOY',
    image: 'projects/loader.jpg',
    description: 'Create a loading screen for your r3f projects'
  }
]

const Project = props => {
  const { project, highlighted } = props

  const background = useRef()
  const bgOpacity = useMotionValue(0.4)

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4)
  }, [highlighted])

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get()
  })

  return (
    <group {...props}>
      <mesh position-z={-0.001} onClick={() => window.open(project.url, '_blank')} ref={background}>
        <RoundedBox args={[2, 1, 0.3]} radius={0.1}>
          <meshBasicMaterial color="#e5a04c" />
        </RoundedBox>
      </mesh>
      <Text
        color="#fff"
        maxWidth={2}
        anchorX={'left'}
        anchorY={'top'}
        fontSize={0.2}
        position={[-0.5, 0.28, 0.2]}>
        {project.title.toUpperCase()}
      </Text>
      <Text maxWidth={2} anchorX="left" anchorY="top" fontSize={0.1} position={[-1, -0.6, 0.2]}>
        {project.description}
      </Text>
    </group>
  )
}

export const currentProjectAtom = atom(Math.floor(projects.length / 2))

export const Projects = () => {
  const { viewport } = useThree()
  const [currentProject] = useAtom(currentProjectAtom)

  return (
    <group position-y={-viewport.height * 1.4 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={'project_' + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? 2 : 0,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
            opacity: currentProject === index ? 0 : 0.5
          }}>
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  )
}
