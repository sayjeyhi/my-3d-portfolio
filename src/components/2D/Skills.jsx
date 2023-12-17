import { Section } from './Section'
import { useSetAtom } from 'jotai'
import { isTalkingAtom } from '@/atoms/audio.js'

const FRONT_SKILLS = [
  {
    title: 'Javascript (ES6 and above)',
    titleSpoken:
      '<speak>Javascript <break time="0.2s"/> including ecma script 6 and above, I also wrote a book called Javascript fundamentals in persian</speak>',
    level: 90
  },
  {
    title: 'Typescript',
    titleSpoken: '<speak>Typescript</speak>',
    level: 90
  },
  {
    title: 'React.js',
    titleSpoken:
      '<speak>React.js <break time="0.2s"/>, React.js mainly used everywhere in my projects</speak>',
    level: 90
  },
  {
    title: 'React Native',
    titleSpoken:
      '<speak>React Native <break time="0.2s"/>, I am not a fan of it, but I used it for a couple of apps in my career</speak>',
    level: 90
  },
  {
    title: 'Vue.js',
    titleSpoken:
      '<speak>View J S <break time="0.2s"/>, I used view 2 and view 3, and I used view x and penia for state management</speak>',
    level: 90
  },
  { title: 'Redux (Toolkit, Saga)', level: 90 },
  { title: 'ReactQuery', level: 90 },
  { title: 'Test (unit, behavior, e2e)', level: 90 },
  { title: 'Next.js (13 and above)', level: 90 },
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
  {
    title: 'Terraform',
    titleSpoken:
      '<speak>Terraform <break time="0.2s"/>, for our infrastructure in soft construct company, we were using Terraform to manage A W S and google cloud </speak>',
    level: 90
  },
  {
    title: 'CI/CD (GitHub, GitLab, bitbucket, jenkins)',
    titleSpoken:
      '<speak>CI/CD <break time="0.2s"/> including GitHub, GitLab, bitbucket and jenkins</speak>',
    level: 90
  },
  {
    title: 'Cloud (AWS, GCP)',
    titleSpoken: '<speak>Cloud <break time="0.2s"/> including A W S and Google Cloud</speak>',
    level: 90
  },
  { title: 'Kubernetes', level: 90 },
  { title: 'Helm', level: 90 },
  {
    title: 'Nodejs (sails, express, nest)',
    titleSpoken: '<speak>Node J S <break time="0.2s"/>sails J S, express J S and nest J S</speak>',
    level: 90
  },
  {
    title: 'DB (MySQL, MongoDB, Postgres)',
    titleSpoken: '<speak>DB <break time="0.2s"/> My S Q L, Mongo DB and Post gres</speak>',
    level: 90
  },
  {
    title: 'Python (fastAPI, django)',
    titleSpoken:
      '<speak>Python (fast<say-as interpret-as="characters">api</say-as>, django)</speak>',
    level: 90
  },
  { title: 'PHP (laravel, zf2)', level: 90 },
  { title: 'Ruby (Rails)', level: 90 },
  { title: 'Node.js (express, nest)', level: 90 }
]
const MANAGEMENT_SKILLS = [
  {
    title: 'Scrum Player',
    titleSpoken: '<speak>Scrum Player</speak>',
    level: 90
  },
  { title: 'Agile Team Lead Certified', level: 90 },
  {
    title: 'iSAQB Certified SoftwareArchitect',
    titleSpoken:
      '<speak><say-as interpret-as="characters">isaqb</say-as> Certified SoftwareArchitect</speak>',
    level: 90
  }
]

export const SkillsSection = () => {
  return (
    <Section key="skills">
      <div className="px-2 py-4 -mt-24 rounded-3xl shadow-primary text-lg text-white w-1/2">
        <div>
          <h3 className="text-3xl font-extrabold text-blue-800">My skills</h3>
          <div className="mt-4 space-y-4">
            {FRONT_SKILLS.map((skill, index) => (
              <Badge
                key={index}
                title={skill.title}
                level={skill.level}
                titleSpoken={skill.titleSpoken}
              />
            ))}
          </div>
          <div className="mt-4 space-y-4">
            {BACK_SKILLS.map((skill, index) => (
              <Badge
                key={index}
                title={skill.title}
                level={skill.level}
                titleSpoken={skill.titleSpoken}
              />
            ))}
          </div>
          <div className="mt-4 space-y-4">
            {MANAGEMENT_SKILLS.map((skill, index) => (
              <Badge
                key={index}
                title={skill.title}
                level={skill.level}
                titleSpoken={skill.titleSpoken}
              />
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
  )
}

const Badge = ({ titleSpoken, title, level }) => {
  const setIsTalking = useSetAtom(isTalkingAtom)

  const handleTextToSpeech = () => {
    const utterThis = new SpeechSynthesisUtterance()
    utterThis.text = titleSpoken || title
    window.speechSynthesis.speak(utterThis)

    const synth = window.speechSynthesis
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror')
    }
    utterThis.onstart = function (event) {
      setIsTalking(true)
    }
    utterThis.onend = function (event) {
      setIsTalking(false)
    }
    utterThis.onpause = function (event) {
      setIsTalking(false)
    }
    utterThis.onresume = function (event) {
      setIsTalking(true)
    }
  }

  return (
    <div
      role="button"
      onClick={handleTextToSpeech}
      onMouseEnter={handleTextToSpeech}
      onMouseLeave={() => {
        setIsTalking(false)
        window.speechSynthesis.cancel()
      }}
      title={`${level}%`}
      className="bg-secondary inter cursor-pointer text-white text-sm font-medium mr-2 px-3 py-1 rounded-lg inline-flex items-center">
      {title}
    </div>
  )
}
