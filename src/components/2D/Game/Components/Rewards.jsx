import { motion } from 'framer-motion'
import { useAtomValue, useSetAtom } from 'jotai'
import { GameEducation } from '../Prizes/Education'
import { GameExperience } from '../Prizes/Experience'
import { GameProjects } from '../Prizes/Projects'
import { GameTalks } from '../Prizes/Talks'
import { GameCertifications } from '../Prizes/Certifications'
import { SECTION_ITEMS } from '../constants'
import { currentPrizeAtom, gameEnableRewardsAtom } from '@/atoms/prizes.js'

const GAME_PRIZES = {
  Education: <GameEducation />,
  Projects: <GameProjects />,
  Certifications: <GameCertifications />,
  Talks: <GameTalks />,
  Experiences: <GameExperience />
}

export const Rewards = ({ showingReward, handleTogglePauseTheGame }) => {
  const currentPrize = useAtomValue(currentPrizeAtom)
  const setShowingGameRewards = useSetAtom(gameEnableRewardsAtom)

  if (!showingReward) return null

  return (
    <motion.div
      initial={{
        opacity: 0.5,
        scale: 0.8,
        y: 50
      }}
      exit={{
        opacity: 0.5,
        scale: 0.8,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: 0
        }
      }}
      className="absolute top-[6.2rem] left-0 right-0 inter w-full border-primary border-2 p-5 pt-12 pb-0 rounded-2xl min-h-[30rem] bg-white">
      <button
        className="bg-gray-300 hover:bg-gray-700 transition-all text-white text-xs py-2 px-3.5 rounded-lg absolute top-2 right-2"
        onClick={() => {
          setShowingGameRewards(false)
          handleTogglePauseTheGame()
        }}>
        Don&apos;t show this modal
      </button>
      <h2 className="text-center text-3xl text-primary font-bold bg-white pt-4 rounded-tl-2xl rounded-tr-2xl w-1/4 absolute left-1/2 -translate-x-1/2 -top-[3.5rem] border-t-2 border-l-2 border-r-2 border-primary pixel">
        {currentPrize}
        <span className="text-[20px] ml-4 relative -top-1 pixel">
          ({SECTION_ITEMS[currentPrize].length} items)
        </span>
      </h2>
      {GAME_PRIZES[currentPrize]}
    </motion.div>
  )
}
