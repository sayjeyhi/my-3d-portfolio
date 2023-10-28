import { Section } from '../Section.jsx'
import { AnimatePresence } from 'framer-motion'

const FRONT_SKILLS = [
  { title: 'Javascript (ES6 and above)', level: 90 },
  { title: 'Typescript', level: 90 },
  { title: 'React.js', level: 90 },
  { title: 'React Native', level: 90 },
  { title: 'Vue.js', level: 90 },
  { title: 'Redux (Toolkit, Saga)', level: 90 },
  { title: 'ReactQuery', level: 90 },
  { title: 'Test (unit, behavior, e2e)', level: 90 },
  { title: 'Next.js', level: 90 },
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
  { title: 'DB (MySQL, MongoDB, Postgres)', level: 90 },
  { title: 'Python (fastAPI, django)', level: 90 },
  { title: 'PHP (laravel, zf2)', level: 90 },
  { title: 'Ruby (Rails)', level: 90 },
  { title: 'Node.js (express, nest)', level: 90 }
]

const MANAGEMENT_SKILLS = [
  { title: 'Scrum Player', level: 90 },
  { title: 'Agile Team Lead Certified', level: 90 },
  { title: 'iSAQB Certified SoftwareArchitect', level: 90 }
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

export const SkillsSection = ({ section }) => {
  return (
    <AnimatePresence>
      {section !== 1 ? (
        <Section key="placeholder" />
      ) : (
        <Section key="skills">
          <div className="px-2 py-4 mt-8 rounded-3xl shadow-primary text-lg text-white w-1/2">
            <div>
              <h3 className="text-3xl font-extrabold text-blue-800">My skills</h3>
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
              <h3 className="text-3xl font-extrabold mt-10 text-blue-800">Languages proficiency</h3>
              <div className="mt-4 space-y-4">
                {languages.map((lng, index) => (
                  <Badge key={index} title={lng.title} level={lng.level} />
                ))}
              </div>
            </div>
          </div>

          <div className="blur-2xl absolute -mt-48 z-[-1] rotate-12">
            <svg
              id="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="300"
              height="300">
              <path
                d="M3 30 A3 3 0 0 1 0.4 25.5 L13.4 2.5 A3 3 0 0 1 18.6 2.5 L31.6 25.5 A3 3 0 0 1 29 30 Z"
                fill="#b1a5ff"
              />
            </svg>
          </div>
          <div className="blur-md absolute right-0 -mt-96 z-[-1] -rotate-12 opacity-60">
            <svg
              id="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="200"
              height="200">
              <path
                d="M3 30 A3 3 0 0 1 0.4 25.5 L13.4 2.5 A3 3 0 0 1 18.6 2.5 L31.6 25.5 A3 3 0 0 1 29 30 Z"
                fill="#EF9A9A"
              />
            </svg>
          </div>
          <div className="blur-xl absolute right-48 mt-96 z-[-1] -rotate-12 opacity-60">
            <svg
              id="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="200"
              height="200">
              <circle cx="16" cy="16" r="16" fill="#9aefa4" />
            </svg>
          </div>
        </Section>
      )}
    </AnimatePresence>
  )
}

const Badge = ({ title, level }) => {
  const handleTextToSpeech = () => {
    const msg = new SpeechSynthesisUtterance()
    msg.text = title
    window.speechSynthesis.speak(msg)
  }

  return (
    <div
      role="button"
      onMouseEnter={handleTextToSpeech}
      onMouseLeave={() => window.speechSynthesis.cancel()}
      title={`${level}%`}
      className="bg-secondary inter cursor-pointer text-white text-sm font-medium mr-2 px-3 py-1 rounded-lg inline-flex items-center">
      {title}
    </div>
  )
}
