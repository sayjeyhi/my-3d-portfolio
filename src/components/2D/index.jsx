import { Cursor } from './Cursor'
import { AboutMeSection } from '@/components/2D/AboutMe'
import { SkillsSection } from '@/components/2D/Skills'
import { ProjectsSection } from '@/components/2D/Projects'
import { GameSection } from '@/components/2D/Game/Game'
import { ContactSection } from '@/components/2D/Contact'

import { Section } from './Section'
import { Menu } from './Menu'
import { Scroll } from '@react-three/drei'

export const TwoD = () => {
  return (
    <Scroll html>
      <Menu />
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
