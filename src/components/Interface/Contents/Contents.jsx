import { AboutMeSection } from './sections/AboutMe'
import { SkillsSection } from './sections/Skills'
import { ProjectsSection } from './sections/Projects'
import { ContactSection } from './sections/Contact'
import { GameSection } from './sections/Game/Game'
import { Cursor } from '../Cursor'
import { Section } from './Section'

export const Contents = props => {
  const { setSection, menuOpened, section, audioMuted } = props

  return (
    <div className="flex flex-col items-center w-screen">
      <AboutMeSection section={section} menuOpened={menuOpened} setSection={setSection} />
      <SkillsSection section={section} />
      <ProjectsSection section={section} />
      <GameSection section={section} />
      <Section key="placeholder" />
      <ContactSection section={section} />
      <Cursor audioMuted={audioMuted} section={section} />
    </div>
  )
}
