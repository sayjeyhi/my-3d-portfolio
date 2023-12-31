import { useCursorHandlers } from './Cursor'
import { Section } from './Section'
import { AnimatePresence } from 'framer-motion'
import { useAtom, useAtomValue } from 'jotai'
import { currentSectionAtom, isSidebarOpenedAtom } from '@/atoms/menu.js'

export const AboutMeSection = props => {
  const [section, setSection] = useAtom(currentSectionAtom)
  const menuOpened = useAtomValue(isSidebarOpenedAtom)
  const cursorHandlers = useCursorHandlers()

  return (
    <AnimatePresence>
      {menuOpened || section !== 0 ? (
        <Section key="placeholder" />
      ) : (
        <Section key="me">
          <h1 className="text-3xl font-extrabold leading-none md:text-5xl sm:text-3xl lg:text-7xl">
            Hi, I&apos;m
            <br />
            <span className="bg-amber-50 px-1">Jafar Rezaei</span>
          </h1>
          <p className="text-xs sm:text-base w-1/2 lg:w-1/2 xl:w-2/3 2xl:w-full md:text-xl lg:text-2xl text-gray-600 mt-4">
            A curious person who wants to improve stuff.
            <br />
            I&apos;m a software engineer and I&apos;m interested in web development.
            <br />
            with 9+ years of experience in software development.
          </p>

          <button
            onClick={() => setSection(1)}
            className="transform px-2 py-1 lg:px-6 lg:py-4 mt-8 rounded-lg lg:rounded-3xl bg-primary shadow-2xl ring-primary shadow-primary text-base md:text-lg lg:text-2xl text-white outline-none focus:ring-4 active:scale-90 transition-transform"
            {...cursorHandlers}>
            Tell me more
          </button>
        </Section>
      )}
    </AnimatePresence>
  )
}
