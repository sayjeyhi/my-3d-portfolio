import { useCursorHandlers } from '../Cursor'
import { Section } from '../Section'
import { AnimatePresence } from 'framer-motion'

export const AboutMeSection = props => {
  const { setSection, menuOpened, section } = props
  const cursorHandlers = useCursorHandlers()

  return (
    <AnimatePresence>
      {menuOpened || section !== 0 ? (
        <Section key="placeholder" />
      ) : (
        <Section key="me">
          <h1 className="text-7xl font-extrabold leading-none">
            Hi, I&apos;m
            <br />
            <span className="bg-amber-50 px-1">Jafar Rezaei</span>
          </h1>
          <p className="text-2xl text-gray-600 mt-4">
            A curious person who wants to improve stuff.
            <br />
            I&apos;m a software engineer and I&apos;m interested in web development.
            <br />
            with 9+ years of experience in software development.
          </p>

          <button
            onClick={() => setSection(1)}
            className="px-6 py-4 mt-8 rounded-3xl bg-primary shadow-2xl ring-primary shadow-primary text-2xl text-white outline-none focus:ring-4 transform active:scale-90 transition-transform"
            {...cursorHandlers}>
            Tell me more
          </button>
        </Section>
      )}
    </AnimatePresence>
  )
}
