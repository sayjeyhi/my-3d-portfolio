import { AboutMeSection } from './Contents/AboutMe'
import { SkillsSection } from './Contents/Skills'
import { ProjectsSection } from './Contents/Projects'
import { ContactSection } from './Contents/Contact'
import { GameSection } from './Contents/Game/Game'
import { Cursor } from './Cursor'
import { Section } from './Section'

export const Contents = props => {
  const { setSection, menuOpened, section } = props

  return (
    <div className="flex flex-col items-center w-screen">
      <AboutMeSection section={section} menuOpened={menuOpened} setSection={setSection} />
      <SkillsSection section={section} />
      <ProjectsSection section={section} />
      <GameSection section={section} />
      <Section key="placeholder" />
      <ContactSection section={section} />
      <Cursor section={section} />
    </div>
  )
}
