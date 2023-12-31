/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { editable as e } from '@theatre/r3f'
import { useFrame } from '@react-three/fiber'
import { useAtomValue } from 'jotai'
import { isTalkingAtom } from '@/atoms/audio.js'
import { avatarCurrentAnimationAtom } from '@/atoms/3d.js'

const corresponding = [
  'viseme_PP',
  'viseme_PP',
  'viseme_kk',
  'viseme_I',
  'viseme_AA',
  'viseme_AA',
  'viseme_O',
  'viseme_U',
  'viseme_U',
  'viseme_FF',
  'viseme_TH'
]

export function Avatar(props) {
  const animation = useAtomValue(avatarCurrentAnimationAtom)

  const [blink, setBlink] = useState(false)
  const isTalking = useAtomValue(isTalkingAtom)

  const group = useRef()
  const skinnedMesh = useRef()
  const { nodes, materials } = useGLTF('models/avatar.glb')

  const { animations: fallingAnimation } = useFBX('animations/falling.fbx')
  const { animations: showOffAnimation } = useFBX('animations/Thoughtful Head Shake.fbx')
  const { animations: phoneCallAnimation } = useFBX('animations/phone-call.fbx')
  const { animations: runningAnimation } = useFBX('animations/running.fbx')
  const { animations: tellingASecretAnimation } = useFBX('animations/secret.fbx')
  const { animations: typingAnimation } = useFBX('animations/typing.fbx')
  const { animations: jumpAnimation } = useFBX('animations/Jumping (2).fbx')

  typingAnimation[0].name = 'Typing'
  showOffAnimation[0].name = 'ShowOff'
  fallingAnimation[0].name = 'Falling'
  tellingASecretAnimation[0].name = 'TellingASecret'
  phoneCallAnimation[0].name = 'PhoneCall'
  runningAnimation[0].name = 'Running'

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

  useEffect(() => {
    if (!animation || !actions[animation]) return
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

  useFrame(state => {
    lerpMorphTarget('eyeBlinkLeft', blink ? 1 : 0, 0.5)
    lerpMorphTarget('eyeBlinkRight', blink ? 1 : 0, 0.5)

    if (animation === 'ShowOff') {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y + 2, 10)
      group.current.getObjectByName('Head').lookAt(target)
    }

    // LIPSYNC random correspondence
    const key = corresponding[Math.floor(Math.random() * corresponding.length)]
    if (isTalking) {
      lerpMorphTarget(key, 0, 0.8)
      lerpMorphTarget(key, 1, 0.26)
    }
    setTimeout(() => {
      lerpMorphTarget(key, 0, 0.5)
    }, 80)
  })

  const lerpMorphTarget = (target, value, speed = 0.1) => {
    const index = skinnedMesh.current.morphTargetDictionary[target]
    if (index === undefined || skinnedMesh.current.morphTargetInfluences[index] === undefined) {
      return
    }
    skinnedMesh.current.morphTargetInfluences[index] = THREE.MathUtils.lerp(
      skinnedMesh.current.morphTargetInfluences[index],
      value,
      speed
    )
  }

  useEffect(() => {
    let blinkTimeout
    const nextBlink = () => {
      blinkTimeout = setTimeout(
        () => {
          setBlink(true)
          setTimeout(() => {
            setBlink(false)
            nextBlink()
          }, 200)
        },
        THREE.MathUtils.randInt(1000, 5000)
      )
    }
    nextBlink()
    return () => clearTimeout(blinkTimeout)
  }, [])

  return (
    <group dispose={null} ref={group} {...props}>
      <e.group theatreKey="Avatar">
        <skinnedMesh
          ref={skinnedMesh}
          name="Wolf3D_Avatar"
          geometry={nodes.Wolf3D_Avatar.geometry}
          material={materials.Wolf3D_Avatar}
          skeleton={nodes.Wolf3D_Avatar.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
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
