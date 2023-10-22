import { motion } from 'framer-motion'
import { Section } from '../Section.jsx'

const FRONT_SKILLS = [
  { title: 'Javascript (ES6 and above)', level: 90 },
  { title: 'Typescript', level: 90 },
  { title: 'Reactjs', level: 90 },
  { title: 'React Native', level: 90 },
  { title: 'Vuejs', level: 90 },
  { title: 'Redux (Toolkit, Saga)', level: 90 },
  { title: 'ReactQuery', level: 90 },
  { title: 'Test (unit, behavior, e2e)', level: 90 },
  { title: 'Nextjs', level: 90 },
  { title: 'Rest, gRPC, graphQL', level: 90 },
  { title: 'Socket (io, WS)', level: 90 },
  { title: 'PWA (workbox)', level: 90 },
  {
    title: 'Three.js',
    level: 40
  }
]
const BACK_SKILLS = [
  { title: 'Docker', level: 90 },
  { title: 'Terraform', level: 90 },
  { title: 'CI/CD (GitHub, GitLab)', level: 90 },
  { title: 'Cloud (AWS, GCP)', level: 90 },
  { title: 'Kubernetes', level: 90 },
  { title: 'Helm', level: 90 },
  { title: 'Nodejs (sails, express, nest)', level: 90 },
  { title: 'DB (MySQL, MongoDB)', level: 90 },
  { title: 'Python, PHP, RoR, …', level: 90 }
]

const MANAGEMENT_SKILLS = [
  { title: 'Scrum Player', level: 90 },
  { title: 'Agile Team Lead Certified', level: 90 },
  { title: 'iSAQB Certified SA', level: 90 }
]
const languages = [
  {
    title: '🇮🇷 Persian',
    level: 100
  },
  {
    title: '🇹🇷 Turkish',
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
      <div className="px-6 py-4 mt-8 rounded-3xl shadow-primary text-lg text-white w-1/2">
        <div>
          <h3 className="text-3xl font-bold text-primary">Skills</h3>
          <div className="mt-4 space-y-4">
            {FRONT_SKILLS.map((skill, index) => (
              <Badge key={index} title={skill.title} level={skill.level} />
            ))}
          </div>
          <div className="mt-4 space-y-4">
            {BACK_SKILLS.map((skill, index) => (
              <Badge key={index} title={skill.title} level={skill.level} />
            ))}
          </div>
          <div className="mt-4 space-y-4">
            {MANAGEMENT_SKILLS.map((skill, index) => (
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
      </div>
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
