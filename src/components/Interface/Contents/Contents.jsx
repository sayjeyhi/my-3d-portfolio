import { AboutMeSection } from './sections/AboutMe.jsx'
import { SkillsSection } from './sections/Skills.jsx'
import { ProjectsSection } from './sections/Projects.jsx'
import { ContactSection } from './sections/Contact.jsx'
import { Cursor } from '../Cursor.jsx'

export const Contents = props => {
  const { setSection, menuOpened, section } = props

  return (
    <div className="flex flex-col items-center w-screen">
      <AboutMeSection section={section} menuOpened={menuOpened} setSection={setSection} />
      <SkillsSection section={section} />
      <ProjectsSection section={section} />
      <ContactSection section={section} />
      <Cursor section={section} />
    </div>
  )
}
