import { AboutMeSection } from './sections/AboutMe.jsx'
import { SkillsSection } from './sections/Skills.jsx'
import { ProjectsSection } from './sections/Projects.jsx'
import { ContactSection } from './sections/Contact.jsx'

export const Contents = props => {
  const { setSection, menuOpened } = props
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutMeSection menuOpened={menuOpened} setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
