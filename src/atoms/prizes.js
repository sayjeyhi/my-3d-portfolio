import { atom } from 'jotai'
import { gamePauseAtom } from '@/atoms/game.js'

export const prizeList = ['Education', 'Projects', 'Certifications', 'Talks', 'Experiences']

export const gameEnableRewardsAtom = atom(true)

export const currentPrizeAtom = atom('')
export const currentPrizeSetAtom = atom(
  get => get(currentPrizeAtom),
  (get, set, arg) => {
    let playSuccessAudio = true
    if (typeof arg === 'object') {
      playSuccessAudio = arg.playSuccessAudio
      arg = arg.value
    }

    set(currentPrizeAtom, arg)
    const enabledRewards = get(gameEnableRewardsAtom)
    const val = get(currentPrizeAtom)
    let index = prizeList.indexOf(val)
    if (index === prizeList.length - 1) {
      index = -1
    }

    /**
     * Show reward modal
     */
    if (enabledRewards) {
      set(isPrizeVisibleAtom, true)
      set(gamePauseAtom, true)
      set(nextPrizeAtom, prizeList[index + 1])

      const successAudioRef = document.getElementById('successAudioRef')
      if (successAudioRef && playSuccessAudio) successAudioRef.play()
    }
  }
)

export const nextPrizeAtom = atom('Education')

export const isPrizeVisibleAtom = atom(false)
