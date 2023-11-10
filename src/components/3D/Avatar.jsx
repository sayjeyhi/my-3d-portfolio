/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { editable as e } from '@theatre/r3f'

const keyboardAudio = new Audio('/keyboard.mp3')

export function Avatar(props) {
  const { animation } = props

  const group = useRef()
  const { nodes, materials } = useGLTF('models/avatar.glb')

  const { animations: fallingAnimation } = useFBX('animations/falling.fbx')
  const { animations: showOffAnimation } = useFBX('animations/Thoughtful Head Shake.fbx')
  const { animations: phoneCallAnimation } = useFBX('animations/phone-call.fbx')
  const { animations: runningAnimation } = useFBX('animations/running.fbx')
  const { animations: tellingASecretAnimation } = useFBX('animations/secret.fbx')
  const { animations: typingAnimation } = useFBX('animations/typing.fbx')
  const { animations: jumpAnimation } = useFBX('animations/Jumping (2).fbx')
  // const { animations: idleAnimation } = useFBX('animations/Idle.fbx')
  // const { animations: shootAnimation } = useFBX('animations/shoot (1).fbx')
  // const { animations: hitAnimation } = useFBX('animations/Stomach Hit.fbx')
  //
  typingAnimation[0].name = 'Typing'
  showOffAnimation[0].name = 'ShowOff'
  fallingAnimation[0].name = 'Falling'
  tellingASecretAnimation[0].name = 'TellingASecret'
  phoneCallAnimation[0].name = 'PhoneCall'
  runningAnimation[0].name = 'Running'
  jumpAnimation[0].name = 'Jumping'
  // idleAnimation[0].name = 'Idle'

  const { actions } = useAnimations(
    [
      typingAnimation[0],
      showOffAnimation[0],
      fallingAnimation[0],
      phoneCallAnimation[0],
      tellingASecretAnimation[0],
      runningAnimation[0],
      jumpAnimation[0]
    ],
    group
  )
  //
  // useFrame(state => {
  //   if (headFollow) {
  //     const rotationMatrix = new THREE.Matrix4()
  //     const targetQuaternion = new THREE.Quaternion()
  //
  //     THREE.Quaternion.setFromRotationMatrix(
  //       group.current.getObjectByName('Head').matrixWorld,
  //       state.camera.matrixWorld
  //     )
  //     group.current.getObjectByName('Head').lookAt(state.camera.position)
  //   }
  //   if (cursorFollow) {
  //     const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1)
  //     group.current.getObjectByName('Spine2').lookAt(target)
  //   }
  // })

  useEffect(() => {
    if (!actions[animation]) return
    const fadeDuration = animation === 'Jumping' ? 0.5 : 0.5
    const currentAnimation = actions[animation].reset().fadeIn(fadeDuration).play()
    if (animation !== 'Running' && animation !== 'ShowOff') {
      currentAnimation.setLoop(THREE.LoopPingPong)
    }

    // if (animation === 'ShowOff') {
    //   const mixer = currentAnimation.getMixer()
    //
    //   console.log('DDDDDD')
    //   mixer.addEventListener('loop', function () {
    //     console.log('DDDDDD loop')
    //     currentAnimation.reset().pause()
    //     setTimeout(() => {
    //       currentAnimation.fadeIn(0.5).play()
    //     }, 4000)
    //   })
    // }

    return () => {
      if (!actions[animation]) return
      actions[animation].reset().fadeOut(0.5)
    }
  }, [animation])

  return (
    <group {...props} dispose={null} ref={group}>
      <e.group theatreKey="Avatar">
        <skinnedMesh
          geometry={nodes.Wolf3D_Avatar.geometry}
          material={materials['Wolf3D_Avatar.001']}
          skeleton={nodes.Wolf3D_Avatar.skeleton}
        />
        <primitive object={nodes.Hips} />
      </e.group>
    </group>
  )
}

useGLTF.preload('models/avatar.glb')
useFBX.preload('animations/typing.fbx')
useFBX.preload('animations/joyfull-jump.fbx')
useFBX.preload('animations/falling.fbx')
useFBX.preload('animations/secret.fbx')
useFBX.preload('animations/phone-call.fbx')
useFBX.preload('animations/running.fbx')