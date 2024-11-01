import { Cursor, useCursorHandlers } from './Cursor'
import { AboutMeSection } from '@/components/2D/AboutMe'
import { SkillsSection } from '@/components/2D/Skills'
import { ProjectsSection } from '@/components/2D/Projects'
import { GameSection } from '@/components/2D/Game/Game'
import { ContactSection } from '@/components/2D/Contact'

import { Section } from './Section'
import { Menu, MenuButton } from './Menu'
import { Scroll } from '@react-three/drei'
import { showFullInformationAtom } from '@/atoms/menu.js'
import { useAtom } from 'jotai'
import { GameEducation } from '@/components/2D/Game/Prizes/Education.jsx'
import { GameProjects } from '@/components/2D/Game/Prizes/Projects.jsx'
import { GameCertifications } from '@/components/2D/Game/Prizes/Certifications.jsx'
import { GameTalks } from '@/components/2D/Game/Prizes/Talks.jsx'
import { GameExperience } from '@/components/2D/Game/Prizes/Experience.jsx'

export const TwoD = () => {
  const [showFullInformation, setShowFullInformation] = useAtom(showFullInformationAtom)
  const cursorHandlers = useCursorHandlers()

  return (
    <Scroll html>
      <Menu />
      {showFullInformation && (
        <Section key="placeholder" className="fixed bg-white z-20 !py-0">
          <div className="overflow-y-auto max-w-full overflow-x-hidden px-3 lg:pl-0 lg:pr-3">
            <button
              {...cursorHandlers}
              onClick={e => {
                e.stopPropagation()
                setShowFullInformation(false)
              }}
              className="absolute top-0 right-0 text-primary p-2 z-20 bg-white rounded-bl-2xl scale-75 outline-squircle">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12 13.4l-2.917 2.925q-.277.275-.704.275t-.704-.275q-.275-.275-.275-.7t.275-.7L10.6 12L7.675 9.108Q7.4 8.831 7.4 8.404t.275-.704q.275-.275.7-.275t.7.275L12 10.625L14.892 7.7q.277-.275.704-.275t.704.275q.3.3.3.713t-.3.687L13.375 12l2.925 2.917q.275.277.275.704t-.275.704q-.3.3-.712.3t-.688-.3z"
                />
              </svg>
            </button>

            <br />
            <Title title="Educations" subTitle="My academic background" />
            <GameEducation />
            <br />
            <br />
            <br />

            <Title
              title="Projects"
              subTitle="The open source projects I worked on (scroll horizontally)"
            />
            <GameProjects />

            <br />
            <br />
            <br />

            <Title title="Certifications" subTitle="My certifications (scroll horizontally)" />
            <GameCertifications />

            <br />
            <br />
            <br />

            <Title title="Talks" subTitle="The talks I gave (less than a scrollable area :D )" />
            <GameTalks />

            <br />
            <br />
            <br />

            <Title
              title="Work experience"
              subTitle="List of the companies I worked for (scroll horizontally)"
            />
            <GameExperience />

            <br />
            <br />
            <br />
          </div>
        </Section>
      )}
      <div className="flex flex-col items-center w-screen">
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <GameSection />
        <Section key="placeholder" />
        <ContactSection />
        <Cursor />
      </div>
    </Scroll>
  )
}

const Title = ({ title, subTitle }) => (
  <div className="mb-5">
    <h2 className="w-[100vw] text-left text-3xl lg:text-4xl font-bold text-primary mt-6 lg:mt-8">
      {title}
    </h2>
    {subTitle && (
      <p className="w-[100vw] text-left text-[12px] lg:text-md text-gray-400">
        <span className="hidden lg:inline ml-2 mr-1">&gt; </span>
        {subTitle}
      </p>
    )}
  </div>
)
