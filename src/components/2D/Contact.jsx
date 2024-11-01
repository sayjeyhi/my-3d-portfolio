import { Section } from './Section'
import { useCursorHandlers } from './Cursor'

export const ContactSection = () => {
  return (
    <Section key="contact-me" className="mt-[10rem] ml-2 lg:mt-[16rem] lg:ml-24 max-w-screen-2xl">
      <div className="flex gap-3 py-1">
        <SocialButton title="Linkedin" link="https://www.linkedin.com/in/jafar-rezaei/">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39Zm1 7.516V6.234h-2v6.579h2ZM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234Z"
              clipRule="evenodd"
            />
          </svg>
        </SocialButton>
        <SocialButton title="Github" link="https://github.com/sayjeyhi">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15">
            <path
              fill="#fff"
              d="M9.358 2.145a8.209 8.209 0 0 0-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.17 2.17 0 0 0-.51-.053a1.258 1.258 0 0 0-.232.028l-.01.002l-.004.002h-.003l.137.481l-.137-.48a.5.5 0 0 0-.32.276a3.12 3.12 0 0 0-.159 2.101A3.354 3.354 0 0 0 2 5.93c0 1.553.458 2.597 1.239 3.268c.547.47 1.211.72 1.877.863a2.34 2.34 0 0 0-.116.958v.598c-.407.085-.689.058-.89-.008c-.251-.083-.444-.25-.629-.49a4.798 4.798 0 0 1-.27-.402l-.057-.093a9.216 9.216 0 0 0-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127l-.254.968l.484.127c.08.02.184.095.355.346a7.2 7.2 0 0 1 .19.302l.068.11c.094.152.202.32.327.484c.253.33.598.663 1.11.832c.35.116.748.144 1.202.074V14.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.563c0-.315-.014-.604-.103-.873c.663-.14 1.322-.39 1.866-.86c.78-.676 1.237-1.73 1.237-3.292v-.001a3.354 3.354 0 0 0-.768-2.125a3.12 3.12 0 0 0-.159-2.1a.5.5 0 0 0-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001l-.004-.002l-.009-.002a.671.671 0 0 0-.075-.015a1.261 1.261 0 0 0-.158-.013a2.172 2.172 0 0 0-.51.053c-.391.084-.93.283-1.636.716Z"
            />
          </svg>
        </SocialButton>
        <SocialButton title="Stackoverflow" link="https://stackoverflow.com/users/4718253/sayjeyhi">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            <path fill="#fff" d="M392 440V320h40v160H64V320h40v120Z" />
            <path
              fill="#fff"
              d="m149.1 308.77l198.57 40.87l8.4-39.32l-198.57-40.87Zm26.27-93.12L359.22 300L376 263.76l-183.82-84.84Zm50.95-89l156 127.78l25.74-30.52l-156-127.78ZM328 32l-33.39 23.8l120.82 160.37L448 192ZM144 400h204v-40H144Z"
            />
          </svg>
        </SocialButton>
        <SocialButton title="Mail" link="mailto:sayjeyhi@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.313t.1-.412q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037Z"
            />
          </svg>
        </SocialButton>
      </div>

      <div className="flex flex-col text-xs items-start text-gray-700 backdrop-blur-sm p-2 lg:p-5 rounded-lg ml-1">
        <div>
          3D Models: &nbsp;
          <a href="https://iconscout.com" target="_blank" rel="noreferrer">
            IconScout
          </a>
          &nbsp; and &nbsp;
          <a href="https://sketchfab.com/IgorYerm" target="_blank" rel="noreferrer">
            Igor Yeram
          </a>
          &nbsp;
          <br />
          SVG icons: &nbsp;
          <a href="https://icones.js.org/" target="_blank" rel="noreferrer">
            icones.js
          </a>{' '}
          And Sound effects by &nbsp;
          <a href="https://pixabay.com/service/license-summary/" target="_blank" rel="noreferrer">
            Pixabay
          </a>
        </div>
        <div className="flex items-center ">
          Designed and developed by Me in <strong className="mx-1">Amsterdam</strong>
        </div>
      </div>
    </Section>
  )
}

const SocialButton = props => {
  const cursorHandlers = useCursorHandlers()

  return (
    <a
      role="button"
      title={props.title}
      href={props.link}
      target="_blank"
      className="skip-squircle"
      rel="noreferrer"
      {...cursorHandlers}>
      <button className="px-3 skip-squircle py-3 rounded-2xl bg-primary shadow-2xl scale-[0.80] ring-primary shadow-primary text-xl text-white outline-none focus:ring-4 transform transition-transform hover:scale-95">
        {props.children}
      </button>
    </a>
  )
}
