import { motion } from 'framer-motion'
import { SECTION_ITEMS } from '../constants'
import { useAtomValue } from 'jotai'
import { GameEducation } from '../components/Education'
import { GameExperience } from '../components/Experience'
import { GameProjects } from '../components/Projects'
import { GameTalks } from '../components/Talks'
import { GameCertifications } from '../components/Certifications'
import { gamePauseAtom, gameScoreAtom } from '../../../../../../atoms/game'

const GAME_PRIZES = {
  100: <GameEducation />,
  200: <GameProjects />,
  300: <GameCertifications />,
  400: <GameTalks />,
  500: <GameExperience />
}

export const Rewards = ({ showingReward }) => {
  const score = useAtomValue(gameScoreAtom)

  const prizes = {
    100: 'Education',
    200: 'Projects',
    300: 'Certifications',
    400: 'Talks',
    500: 'Experiences'
  }

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
      className="absolute top-[8rem] left-0 right-0 inter w-full border-primary border-2 p-5 pt-12 pb-0 rounded-2xl min-h-[30rem] bg-white">
      <h2 className="text-center text-3xl text-primary font-bold bg-white pt-4 rounded-tl-2xl rounded-tr-2xl w-1/4 absolute left-1/2 -translate-x-1/2 -top-[3.6rem] border-t-2 border-l-2 border-r-2 border-primary pixel">
        {prizes[Math.ceil(score / 100) * 100 - 100]}
        <span className="text-[20px] ml-4 relative -top-1 pixel">
          ({SECTION_ITEMS[Math.ceil(score / 100) * 100 - 100].length} items)
        </span>
      </h2>
      {GAME_PRIZES[Math.ceil(score / 100) * 100 - 100]}
    </motion.div>
  )
}
