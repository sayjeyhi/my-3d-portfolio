import { useAtomValue } from 'jotai'
import { gameIsSoundsEnabledAtom } from '@/atoms/audio'
import { useEffect } from 'react'
import {
  AUDIO_HIT,
  AUDIO_JUMP,
  AUDIO_SUCCESS,
  AUDIO_VICTORY
} from '@/components/2D/Game/base64_files'

export const Audios = ({ jumpAudioRef, victoryAudioRef, hitAudioRef }) => {
  const isSoundsEnabled = useAtomValue(gameIsSoundsEnabledAtom)

  useEffect(() => {
    if (isSoundsEnabled) {
      jumpAudioRef.current.volume = 0
      victoryAudioRef.current.volume = 0
      hitAudioRef.current.volume = 0
    } else {
      jumpAudioRef.current.volume = 0.5
      victoryAudioRef.current.volume = 0.5
      hitAudioRef.current.volume = 0.5
    }
  }, [isSoundsEnabled])

  return (
    <>
      <audio ref={jumpAudioRef} src={AUDIO_JUMP}></audio>
      <audio ref={victoryAudioRef} src={AUDIO_VICTORY}></audio>
      <audio ref={hitAudioRef} src={AUDIO_HIT}></audio>
      <audio id="successAudioRef" src={AUDIO_SUCCESS}></audio>
    </>
  )
}
