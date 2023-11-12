import { atomWithStorage } from 'jotai/utils'

export const gameIsSoundsEnabledAtom = atomWithStorage('gameIsSoundsEnabled', false)
export const isMusicEnabledAtom = atomWithStorage('isMusicEnabled', true)
