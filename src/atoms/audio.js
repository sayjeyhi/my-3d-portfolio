import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'

export const gameIsSoundsEnabledAtom = atomWithStorage('gameIsSoundsEnabled', false)
export const isMusicEnabledAtom = atomWithStorage('isMusicEnabled', false)

export const isTalkingAtom = atom(false)
