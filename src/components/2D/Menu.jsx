import { isMusicEnabledAtom } from '@/atoms/audio'
import { useAtom, useSetAtom } from 'jotai'
import { useCursorHandlers } from './Cursor'
import { currentSectionAtom, isSidebarOpenedAtom, showFullInformationAtom } from '@/atoms/menu.js'

export const Menu = props => {
  const setSection = useSetAtom(currentSectionAtom)
  const [menuOpened, setMenuOpened] = useAtom(isSidebarOpenedAtom)
  const setShowFullInformation = useSetAtom(showFullInformationAtom)

  const [isMusicEnabled, setIsMusicEnabled] = useAtom(isMusicEnabledAtom)
  const cursorHandlers = useCursorHandlers()

  const handleAudioMute = () => {
    setIsMusicEnabled(a => !a)
  }
  return (
    <>
      <button
        id="menu-button"
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 focus:outline-lime-700 fixed top-4 right-4 p-3 bg-primary w-12 h-12 rounded-2xl"
        {...cursorHandlers}>
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? 'rotate-45  translate-y-0.5' : ''
          }`}
        />
        <div className={`bg-white h-0.5 rounded-md w-full my-1 ${menuOpened ? 'hidden' : ''}`} />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? '-rotate-45' : ''
          }`}
        />
      </button>
      <button
        onClick={handleAudioMute}
        className="z-10 fixed focus:outline-lime-700 top-4 right-16 mr-2 p-3 bg-primary w-12 h-12 rounded-2xl"
        {...cursorHandlers}>
        {!isMusicEnabled ? (
          <svg
            className="relative -top-[2px] -left-[2px]"
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M4.34 2.93L2.93 4.34L7.29 8.7L7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06a8.94 8.94 0 0 0 3.61-1.75l2.05 2.05l1.41-1.41L4.34 2.93zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76zm4.5 8A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"
            />
          </svg>
        ) : (
          <svg
            className="relative -top-[2px] -left-[2px]"
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
            />
          </svg>
        )}
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 max-h-[100vh] bg-primary rounded-none md:rounded-tl-2xl md:rounded-bl-2xl transition-all overflow-hidden flex flex-col justify-between
      ${menuOpened ? 'w-full md:w-80' : 'w-0'}`}>
        <div className="mt-10 mb-10">
          <img className="rounded-full w-48 h-48 mx-auto" src="me.jpeg" alt="Jafar Rezaei" />
        </div>
        <div className="flex items-start justify-center flex-col gap-4 px-8 inter">
          <MenuButton label="About" onClick={() => setSection(0)} />
          <MenuButton label="Skills" onClick={() => setSection(1)} />
          <MenuButton label="Books" onClick={() => setSection(2)} />
          <MenuButton label="Resume Game" onClick={() => setSection(3)} />

          <button
            {...cursorHandlers}
            onClick={() => setShowFullInformation(true)}
            className="w-full justify-center px-2 py-3 mt-3 text-md font-semibold bg-white text-gray-500 rounded  text-center transition-all hover:shadow-lg hover:shadow-amber-200 hover:text-gray-700">
            Full Information
          </button>
        </div>

        <div className="flex items-center justify-center flex-row gap-4 p-8">
          <a
            href="https://www.linkedin.com/in/jafar-rezaei/"
            target="_blank"
            {...cursorHandlers}
            title="LinkedIn"
            rel="noreferrer"
            className="text-white cursor-pointer opacity-80 hover:opacity-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              aria-label="LinkedIn"
              viewBox="0 0 512 512"
              className="w-9 h-9"
              id="linkedin">
              <rect width="512" height="512" fill="#0077b5" rx="15%"></rect>
              <circle cx="142" cy="138" r="37"></circle>
              <path stroke="#fff" strokeWidth="66" d="M244 194v198M142 194v198"></path>
              <path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"></path>
            </svg>
          </a>
          <a
            href="https://github.com/sayjeyhi"
            target="_blank"
            {...cursorHandlers}
            rel="noreferrer"
            title="GitHub"
            className="text-white cursor-pointer opacity-80 hover:opacity-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="GitHub"
              viewBox="0 0 512 512"
              className="w-9 h-9"
              id="github">
              <rect width="512" height="512" fill="#1B1817" rx="15%"></rect>
              <path
                fill="#fff"
                d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"></path>
            </svg>
          </a>
          <a
            href="https://x.com/sayjeyhi"
            target="_blank"
            {...cursorHandlers}
            rel="noreferrer"
            title="X (twitter)"
            className="text-white cursor-pointer opacity-80 hover:opacity-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 h-9"
              aria-label="Twitter"
              viewBox="0 0 512 512"
              id="twitter">
              <rect width="512" height="512" fill="#1da1f3" rx="15%"></rect>
              <path
                fill="#fff"
                d="M437 152a72 72 0 0 1-40 12 72 72 0 0 0 32-40 72 72 0 0 1-45 17 72 72 0 0 0-122 65 200 200 0 0 1-145-74 72 72 0 0 0 22 94 72 72 0 0 1-32-7 72 72 0 0 0 56 69 72 72 0 0 1-32 1 72 72 0 0 0 67 50 200 200 0 0 1-105 29 200 200 0 0 0 309-179 200 200 0 0 0 35-37"></path>
            </svg>
          </a>
          <a
            href="https://stackoverflow.com/users/4718253/sayjeyhi"
            target="_blank"
            {...cursorHandlers}
            rel="noreferrer"
            title="Stack Overflow"
            className="text-white cursor-pointer opacity-80 hover:opacity-100 transition-colors">
            <svg
              className="w-9 h-9"
              aria-label="Stack Overflow"
              viewBox="0 0 512 512"
              id="stackoverflow">
              <rect width="512" height="512" fill="#f58025" rx="15%"></rect>
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="30"
                d="M293 89l90 120zm-53 50l115 97zm-41 65l136 64zm-23 69l148 31zm-6 68h150zm-45-44v105h241V297"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export const MenuButton = props => {
  const { label, onClick, className, children } = props
  const cursorHandlers = useCursorHandlers()

  return (
    <button
      onClick={onClick}
      className={`text-xl font-bold text-white cursor-pointer hover:text-gray-700 transition-colors ${className}`}
      {...cursorHandlers}>
      {children || label}
    </button>
  )
}
