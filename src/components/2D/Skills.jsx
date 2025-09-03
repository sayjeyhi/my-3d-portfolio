import { Section } from './Section'
import { useSetAtom } from 'jotai'
import { isTalkingAtom } from '@/atoms/audio.js'

export const SkillsSection = () => {
  return (
    <Section key="skills" className="max-w-screen-2xl">
      <div className="[&_img]:h-[24px] px-2 py-4 -mt-24 rounded-3xl shadow-primary text-lg text-white w-3/5 sm:w-2/5 md:w-3/5 lg:w-1/2">
        <p className="flex flex-wrap gap-2 mb-7 [&&_img]:h-[30px]">
          <Image
            alt="Frontend and Mobile development"
            src="https://img.shields.io/badge/Front/Mobile-8A2BE2"
          />
          <Image alt="Backend Development" src="https://img.shields.io/badge/Backend-8A2BE2" />
          <Image alt="Infrastructure" src="https://img.shields.io/badge/Infrastructure-8A2BE2" />
          <Image alt="AI" src="https://img.shields.io/badge/AI-8A2BE2" />
        </p>

        <div className="flex flex-wrap gap-2">
          <Image
            alt="JavaScript"
            src="https://img.shields.io/badge/-JavaScript-1b3333?style=flat&amp;logo=Javascript&amp;labelColor=172424"
          />

          <Image
            alt="React"
            src="https://img.shields.io/badge/-React-1b3333?style=flat&amp;logo=React&amp;labelColor=172424"
          />

          <Image
            alt="WebLLM"
            src="https://img.shields.io/badge/-WebLLM-1b3333?style=flat&amp;logo=React&amp;labelColor=172424"
          />

          <Image
            alt="Three.js"
            src="https://img.shields.io/badge/-Three.js-1b3333?style=flat&amp;logo=Three.js&amp;labelColor=172424"
          />

          <Image
            alt="CMS"
            src="https://img.shields.io/badge/-CMS-1b3333?style=flat&amp;logo=Contentful&amp;labelColor=172424"
          />

          <Image
            alt="i18n [Enterprise]"
            src="https://img.shields.io/badge/-i18n [Enterprise]-1b3333?style=flat&amp;logo=i18next&amp;labelColor=172424"
          />

          <Image
            alt="Next.JS"
            src="https://img.shields.io/badge/-Next.JS-1b3333?style=flat&amp;logo=Next.js&amp;labelColor=172424"
          />

          <Image
            alt="React Native"
            src="https://img.shields.io/badge/-React Native-1b3333?style=flat&amp;logo=React&amp;labelColor=172424"
          />

          <Image
            alt="Expo"
            src="https://img.shields.io/badge/-Expo-1b3333?style=flat&amp;logo=Expo&amp;labelColor=172424"
          />

          <Image
            alt="Node.JS"
            src="https://img.shields.io/badge/-NodeJs-1b3333?style=flat&amp;logo=Node.js&amp;labelColor=172424"
          />

          <Image
            alt="Vue.JS"
            src="https://img.shields.io/badge/-VueJs-1b3333?style=flat&amp;logo=Vue.js&amp;labelColor=172424"
          />

          <Image
            alt="Nuxt"
            src="https://img.shields.io/badge/-Nuxt-1b3333?style=flat&amp;logo=Nuxt&amp;labelColor=172424"
          />

          <Image
            alt="Typescript"
            src="https://img.shields.io/badge/-Typescript-1b3333?style=flat&amp;logo=Typescript&amp;labelColor=172424"
          />

          <Image
            alt="Published 3 Books"
            src="https://img.shields.io/badge/-Published 3 Books-1b3333?style=flat&amp;logo=BookStack&amp;labelColor=172424"
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-7">
          <Image
            alt="PHP"
            src="https://img.shields.io/badge/-PHP-1b3333?style=flat&amp;logo=PHP&amp;labelColor=172424"
          />

          <Image
            alt="GoLang"
            src="https://img.shields.io/badge/-GoLang-1b3333?style=flat&amp;logo=Go&amp;labelColor=172424"
          />

          <Image
            alt="Python"
            src="https://img.shields.io/badge/-Python-1b3333?style=flat&amp;logo=Python&amp;labelColor=172424"
          />

          <Image
            alt="Laravel"
            src="https://img.shields.io/badge/-Laravel-1b3333?style=flat&amp;logo=Laravel&amp;labelColor=172424"
          />

          <Image
            alt="Django"
            src="https://img.shields.io/badge/-Django-1b3333?style=flat&amp;logo=Django&amp;labelColor=172424"
          />

          <Image
            alt="FastAPI"
            src="https://img.shields.io/badge/-FastAPI-1b3333?style=flat&amp;logo=FastAPI&amp;labelColor=172424"
          />

          <Image
            alt="MySql"
            src="https://img.shields.io/badge/-MySql-1b3333?style=flat&amp;logo=Mysql&amp;labelColor=172424"
          />

          <Image
            alt="MongoDB"
            src="https://img.shields.io/badge/-MongoDB-1b3333?style=flat&amp;logo=MongoDB&amp;labelColor=172424"
          />

          <Image
            alt="Redis"
            src="https://img.shields.io/badge/-Redis-1b3333?style=flat&amp;logo=Redis&amp;labelColor=172424"
          />

          <Image
            alt="PostgreSQL"
            src="https://img.shields.io/badge/-PostgreSQL-1b3333?style=flat&amp;logo=PostgreSQL&amp;labelColor=172424"
          />
        </div>
        <div className="flex mt-7 flex-wrap justify-start gap-2">
          <Image
            alt="Terraform"
            src="https://img.shields.io/badge/-Terraform-1b3333?style=flat&amp;logo=Terraform&amp;labelColor=172424"
          />

          <Image
            alt="Kubernetes"
            src="https://img.shields.io/badge/-K8s-1b3333?style=flat&amp;logo=Kubernetes&amp;labelColor=172424"
          />

          <Image
            alt="Docker"
            src="https://img.shields.io/badge/-Docker-1b3333?style=flat&amp;logo=Docker&amp;labelColor=172424"
          />

          <Image
            alt="Rancher"
            src="https://img.shields.io/badge/-Rancher-1b3333?style=flat&amp;logo=Rancher&amp;labelColor=172424"
          />

          <Image
            alt="Jenkins"
            src="https://img.shields.io/badge/-Jenkins-1b3333?style=flat&amp;logo=Jenkins&amp;labelColor=172424"
          />

          <Image
            alt="Github Actions"
            src="https://img.shields.io/badge/-Github Actions-1b3333?style=flat&amp;logo=Github&amp;labelColor=172424"
          />

          <Image
            alt="Amazon Web Services"
            src="https://img.shields.io/badge/-AWS-1b3333?style=flat&amp;logo=AmazonWebServices&amp;labelColor=172424"
          />

          <Image
            alt="Google Cloud"
            src="https://img.shields.io/badge/-GCP-1b3333?style=flat&amp;logo=GoogleCloud&amp;labelColor=172424"
          />

          <Image
            alt="ArgoCD"
            src="https://img.shields.io/badge/-ArgoCD-1b3333?style=flat&amp;logo=Argocd&amp;labelColor=172424"
          />
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
// helper: wait until voices are available, works across Chrome/Safari
function loadVoices() {
  return new Promise(resolve => {
    const voices = window.speechSynthesis.getVoices()
    if (voices.length) return resolve(voices)
    const id = setInterval(() => {
      const v = window.speechSynthesis.getVoices()
      if (v.length) {
        clearInterval(id)
        resolve(v)
      }
    }, 50)
  })
}

function pickMaleVoice(voices) {
  const preferredNames =
    /(male|man|Alex|David|Fred|Daniel|George|Hank|Google UK English Male|Microsoft|James)/i

  // Prefer English male-ish names
  const en = voices.filter(v => v.lang?.toLowerCase().startsWith('en'))
  return (
    en.find(v => preferredNames.test(v.name)) || // best guess by name
    en.find(v => /male/i.test(v.voiceURI)) || // sometimes "Male" appears in voiceURI
    en[0] || // fallback: any English
    voices[0] // final fallback: any voice
  )
}

const Image = ({ alt, src }) => {
  const setIsTalking = useSetAtom(isTalkingAtom)

  const handleTextToSpeech = async () => {
    // stop any current speech before starting a new one
    window.speechSynthesis.cancel()

    const utter = new SpeechSynthesisUtterance(alt)

    utter.pitch = 0.95

    const voices = await loadVoices()
    const male = pickMaleVoice(voices)
    if (male) utter.voice = male

    // events
    utter.onerror = () => console.error('SpeechSynthesisUtterance.onerror')
    utter.onstart = () => setIsTalking(true)
    utter.onend = () => setIsTalking(false)
    utter.onpause = () => setIsTalking(false)
    utter.onresume = () => setIsTalking(true)

    window.speechSynthesis.speak(utter)
  }

  return (
    <img
      alt={alt}
      src={src}
      role="button"
      className="cursor-pointer generic-squircle"
      onClick={handleTextToSpeech}
      onMouseEnter={handleTextToSpeech} // consider debouncing or removing to avoid rapid re-triggers
      onMouseLeave={() => {
        setIsTalking(false)
        window.speechSynthesis.cancel()
      }}
    />
  )
}
