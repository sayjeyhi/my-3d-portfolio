import { Cursor } from './Cursor'
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

  return (
    <Scroll html>
      <Menu />
      {showFullInformation && (
        <Section key="placeholder" className="fixed bg-white z-20 py-0">
          <div className="overflow-y-auto max-w-full overflow-x-hidden px-3 lg:pl-0 lg:pr-3">
            <MenuButton
              onClick={e => {
                e.stopPropagation()
                setShowFullInformation(false)
              }}
              className="absolute top-0 right-0 p-2 z-20 bg-white rounded-bl-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                viewBox="0 0 24 24"
                id="close">
                <path
                  fill="#3b82f6"
                  d="M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29ZM19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"></path>
              </svg>
            </MenuButton>

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
    <h2 className="w-[100vw] text-left text-3xl lg:text-4xl font-bold text-blue-500 mt-6 lg:mt-8">
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
