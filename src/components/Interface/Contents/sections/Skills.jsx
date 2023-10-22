import { motion } from 'framer-motion'
import { Section } from '../Section.jsx'

const skills = [
  {
    title: 'Threejs / React Three Fiber',
    level: 80
  },
  {
    title: 'React / React Native',
    level: 90
  },
  {
    title: 'Nodejs',
    level: 90
  },
  {
    title: 'Typescript',
    level: 60
  },
  {
    title: '3D Modeling',
    level: 40
  }
]
const languages = [
  {
    title: '🇮🇷 Persian',
    level: 100
  },
  {
    title: '🇺🇸 English',
    level: 80
  }
]

export const SkillsSection = () => {
  return (
    <Section>
      <motion.div
        whileInView={'visible'}
        className="px-6 py-4 mt-8 rounded-3xl bg-white shadow-primary text-lg text-white">
        <div>
          <h3 className="text-3xl font-bold text-primary">Skills</h3>
          <div className="mt-4 space-y-4">
            {skills.map((skill, index) => (
              <Badge key={index} title={skill.title} level={skill.level} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mt-10 text-primary">Languages</h3>
          <div className="mt-4 space-y-4">
            {languages.map((lng, index) => (
              <Badge key={index} title={lng.title} level={lng.level} />
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

const Badge = ({ title, level }) => {
  return (
    <span
      title={`${level}%`}
      className="bg-lime-900 cursor-pointer text-white text-sm font-medium mr-2 px-3 py-1 rounded inline-flex items-center">
      {title}
    </span>
  )
}
