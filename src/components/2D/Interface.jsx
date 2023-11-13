import { Cursor } from './Cursor'
import { AboutMeSection } from '@/components/2D/AboutMe'
import { SkillsSection } from '@/components/2D/Skills'
import { ProjectsSection } from '@/components/2D/Projects'
import { GameSection } from '@/components/2D/Game/Game'
import { ContactSection } from '@/components/2D/Contact'

import { Section } from './Section'
import { Menu } from './Menu'

export const Interface = props => {
  const { setSection, menuOpened, setMenuOpened, section } = props

  console.log('=====srrrrr')
  return (
    <>
      <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <div className="flex flex-col items-center w-screen">
        <AboutMeSection section={section} menuOpened={menuOpened} setSection={setSection} />
        <SkillsSection section={section} />
        <ProjectsSection section={section} />
        <GameSection section={section} />
        <Section key="placeholder" />
        <ContactSection section={section} />
        <Cursor section={section} />
      </div>
    </>
  )
}
