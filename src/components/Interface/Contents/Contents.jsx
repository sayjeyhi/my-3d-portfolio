import { AboutMeSection } from './sections/AboutMe.jsx'
import { SkillsSection } from './sections/Skills.jsx'
import { ProjectsSection } from './sections/Projects.jsx'
import { ContactSection } from './sections/Contact.jsx'
import { GameSection } from './sections/Game.jsx'
import { Cursor } from '../Cursor.jsx'
import { Section } from './Section.jsx'

export const Contents = props => {
  const { setSection, menuOpened, section, audioMuted, dispatchGameState, gameState } = props

  return (
    <div className="flex flex-col items-center w-screen">
      <AboutMeSection section={section} menuOpened={menuOpened} setSection={setSection} />
      <SkillsSection section={section} />
      <ProjectsSection
        section={section}
        dispatchGameState={dispatchGameState}
        gameState={gameState}
      />
      <GameSection section={section} dispatchGameState={dispatchGameState} gameState={gameState} />
      <Section key="placeholder" />
      <ContactSection section={section} />
      <Cursor audioMuted={audioMuted} section={section} />
    </div>
  )
}
