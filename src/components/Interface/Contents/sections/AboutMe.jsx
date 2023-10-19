import { useCursorHandlers } from '../../Cursor.jsx'
import { Section } from '../components/Section.jsx'

export const AboutMeSection = props => {
  const { setSection } = props
  const cursorHandlers = useCursorHandlers()

  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I&apos;m
        <br />
        <span className="bg-amber-50 px-1 italic">Jafar Rezaei</span>
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        I am a curious person who wants to learn and improve every single system.
        <br />I have 9+ years of experience in software development.
      </p>

      <button
        onClick={() => setSection(3)}
        className="px-4 py-3 mt-8 bg-blue-600 shadow-2xl rounded-2xl text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
        {...cursorHandlers}>
        Contact me
      </button>
    </Section>
  )
}
