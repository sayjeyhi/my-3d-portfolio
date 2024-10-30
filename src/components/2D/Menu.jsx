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

  const handleAudioMute = e => {
    e.stopPropagation()
    setIsMusicEnabled(a => !a)
  }
  return (
    <>
      <button
        id="menu-button"
        onClick={e => {
          e.stopPropagation()
          setMenuOpened(!menuOpened)
        }}
        className={`z-20 focus:outline-lime-700 fixed top-4 p-3 w-12 h-12 rounded-xl ${
          menuOpened
            ? 'scale-75 outline-squircle right-[330px] [&>*]:bg-primary'
            : 'bg-primary right-4'
        }`}
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
        className="z-10 fixed text-white focus:outline-lime-700 top-4 right-16 mr-2 p-3 bg-primary w-12 h-12 rounded-2xl"
        {...cursorHandlers}>
        {!isMusicEnabled ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7.016 17.042C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.215 3.215 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17.127 17.127 0 0 1 1.5 12c0-.323.013-.671.035-1.029c.073-1.208.11-1.813.424-2.394a3.215 3.215 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.835.587.972 1.879 1.094 4.357" />
              <path
                d="M15.5 8.5V12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.317 2.317 0 0 1-.58.295c-.967.33-2.102-.328-4.2-1.702C8.833 17.915 7.4 17 7 17"
                opacity=".5"
                className=""
              />
              <path
                strokeLinecap="round"
                d="M20 18s1.5-1.8 1.5-6c0-2.433-.503-4.061-.927-5M18 15s.5-.9.5-3c0-.862-.084-1.522-.183-2"
                opacity=".5"
              />
              <path strokeLinecap="round" d="M22 2L2 22" />
            </g>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1.535 10.971c.073-1.208.11-1.813.424-2.394a3.215 3.215 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.922.648.993 2.157 1.133 5.174A68.21 68.21 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.314 2.314 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.215 3.215 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17.127 17.127 0 0 1 1.5 12c0-.323.013-.671.035-1.029Z" />
              <path strokeLinecap="round" d="M20 6s1.5 1.8 1.5 6s-1.5 6-1.5 6" opacity=".4" />
              <path strokeLinecap="round" d="M18 9s.5.9.5 3s-.5 3-.5 3" opacity=".7" />
            </g>
          </svg>
        )}
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 max-h-[100vh] bg-gray-50 rounded-none transition-all overflow-hidden flex flex-col justify-between
      ${menuOpened ? 'w-full md:w-80' : 'w-0'}`}>
        <div className="mt-10 mb-10 flex align-center justify-center">
          <svg
            {...cursorHandlers}
            className="w-48 [&:hover]:scale-110 transition-all [&:hover]:grayscale"
            viewBox="0 0 200 200">
            <defs>
              <pattern id="squircle" patternUnits="userSpaceOnUse" width="200" height="200">
                <image xlinkHref="/me.jpeg" x="0" y="0" width="200" height="200"></image>
              </pattern>
            </defs>

            <path
              d="M100,200c43.8,0,68.2,0,84.1-15.9C200,168.2,200,143.8,200,100s0-68.2-15.9-84.1C168.2,0,143.8,0,100,0S31.8,0,15.9,15.9C0,31.8,0,56.2,0,100s0,68.2,15.9,84.1C31.8,200,56.2,200,100,200z"
              fill="url(#squircle)"
            />
          </svg>
        </div>
        <div className="flex items-start justify-center flex-col gap-4 px-8 inter">
          <MenuButton label="About" onClick={() => setSection(0)} />
          <MenuButton label="Skills" onClick={() => setSection(1)} />
          <MenuButton label="Books" onClick={() => setSection(2)} />
          <MenuButton label="Resume Game" onClick={() => setSection(3)} />

          <button
            {...cursorHandlers}
            onClick={() => setShowFullInformation(true)}
            className="outline-squircle w-full justify-center px-2 py-3 mt-12 block text-md font-bold text-primary border-primary rounded text-xl text-center transition-all">
            Quick look
          </button>
        </div>

        <div className="flex items-center justify-center flex-row gap-4 p-8">
          <a
            href="https://www.linkedin.com/in/jafar-rezaei/"
            target="_blank"
            {...cursorHandlers}
            title="LinkedIn"
            rel="noreferrer"
            className="text-white cursor-pointer">
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
            className="text-white cursor-pointer">
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
            className="text-white cursor-pointer">
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
            className="text-white cursor-pointer">
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
      className={`text-xl text-black cursor-pointer transition-colors ${className}`}
      {...cursorHandlers}>
      {children || label}
    </button>
  )
}
