import { isMusicEnabledAtom } from '@/atoms/audio'
import { useAtom } from 'jotai'
import { useCursorHandlers } from './Cursor'

export const Menu = props => {
  const { onSectionChange, menuOpened, setMenuOpened } = props

  const [isMusicEnabled, setIsMusicEnabled] = useAtom(isMusicEnabledAtom)
  const cursorHandlers = useCursorHandlers()

  const handleAudioMute = () => {
    setIsMusicEnabled(a => !a)
  }
  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 p-3 bg-primary w-12 h-12 rounded-2xl"
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
        className="z-20 fixed top-16 mt-2 right-4 p-3 bg-primary w-12 h-12 rounded-2xl"
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
        className={`z-10 fixed top-0 right-0 bottom-0 bg-primary rounded-tl-3xl transition-all overflow-hidden flex flex-col
      ${menuOpened ? 'w-80' : 'w-0'}`}>
        <div className="mt-20 mb-20">
          <img
            className="rounded-full w-48 h-48 mx-auto"
            src="https://media.licdn.com/dms/image/D4E03AQFKQ2rvsNmmiA/profile-displayphoto-shrink_400_400/0/1695999543181?e=1703721600&v=beta&t=ap6PGDmg-jt4TxyHxKMQDPMbRQggzKK3wsw0KQQo6dM"
            alt="Jafar Rezaei"
          />
        </div>

        <div className="flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  )
}

const MenuButton = props => {
  const { label, onClick } = props
  const cursorHandlers = useCursorHandlers()

  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold text-white cursor-pointer hover:text-secondary transition-colors"
      {...cursorHandlers}>
      {label}
    </button>
  )
}
