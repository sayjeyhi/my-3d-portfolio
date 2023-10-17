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
        <span className="bg-white px-1 italic">Jafar Rezaei</span>
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        I make YouTube videos to help developers
        <br />
        learn how to build 3D apps
      </p>

      <button
        onClick={() => setSection(3)}
        className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
        {...cursorHandlers}>
        Contact me
      </button>
    </Section>
  )
}
