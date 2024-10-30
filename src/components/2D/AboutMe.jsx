import { useCursorHandlers } from './Cursor'
import { Section } from './Section'
import { AnimatePresence } from 'framer-motion'
import { useAtom, useAtomValue } from 'jotai'
import { currentSectionAtom, isSidebarOpenedAtom } from '@/atoms/menu.js'
import NameWithRandomDarkColors from '@/components/2D/NameWithRandomColors'

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
          <div className="window">
            <h1 className="leading-none font-light text-xl sm:text-md">
              <span className="bg-white">Hi, I&apos;m</span>
              <br />
              <br />
              <NameWithRandomDarkColors />
              <br />
            </h1>
            <p className="text-xs bg-white sm:text-base md:text-lg lg:text-lg text-black mt-6 pl-2 border-l-8 border-gray-300 border-opacity-50">
              <span {...cursorHandlers}>A published author with 10+ years in the field,</span>
              <br />
              <span {...cursorHandlers} className="bg-white">
                dedicated to learning, sharing insights,
              </span>
              <br />
              <span {...cursorHandlers}>and building impactful solutions across borders. </span>
              <br />
            </p>

            <div className="italic text-white mt-5 text-base">
              Maybe a &quot;Code Whisperer&quot;!?
            </div>

            <button
              onClick={() => setSection(1)}
              className="inline-flex generic-squircle transform px-2 py-1 font-bold lg:px-6 lg:py-4 mt-5 text-black text-base md:text-lg lg:text-xl active:scale-95 transition-transform"
              {...cursorHandlers}>
              Up for a magical twist?
              <div id="mouse-scroll">
                <div className="mouse">
                  <div className="mouse-in"></div>
                </div>
                <div className="arrows">
                  <span className="down-arrow-1"></span>
                  <span className="down-arrow-2"></span>
                  <span className="down-arrow-3"></span>
                </div>
              </div>
            </button>
          </div>
        </Section>
      )}
    </AnimatePresence>
  )
}
