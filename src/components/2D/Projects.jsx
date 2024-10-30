import { Section } from './Section'
import { motion } from 'framer-motion'

export const ProjectsSection = () => {
  return (
    <Section key="projects" className="-mt-48">
      <h3 className="-mt-0 lg:-mt-8 pl-2 text-3xl lg:text-5xl font-bold text-primary pb-3 lg:pb-6 ">
        Books
      </h3>
      <div className="flex mb-2 overflow-x-auto overflow-y-visible w-full lg:pb-8 items-center">
        <BookCard
          name="Javascript fundamentals"
          subtitle="(250 pages)"
          img="books/javascript.jpg"
          url="https://github.com/Mariotek/better-understanding-of-javascript"
        />
        <BookCard
          name="React.js Interview questions"
          subtitle="420 questions"
          img="books/react.jpeg"
          url="https://github.com/Mariotek/reactjs-persian-interview-questions"
        />
        <BookCard
          name="Javascript Interview questions"
          subtitle="Helped with translation"
          img="books/js-questions.jpg"
          url="https://github.com/Mariotek/javascript-persian-interview-questions"
        />

        <WhatElseCard />
      </div>
    </Section>
  )
}

export const BookCard = ({ name, url, img, subtitle }) => {
  return (
    <a href={url} target="_blank" rel="nofollow noreferrer">
      <div className="w-48 lg:w-80 relative p-1 lg:p-2 mx-2 flex flex-col rounded-lg border border-gray-100 bg-white shadow-md">
        <img className="rounded-md" src={img} alt={name} />
        <h4 className="text-sm lg:text-base font-bold text-slate-900 mt-2">{name}</h4>
        <h5 className="text-xs font-medium text-slate-400 mb-1">{subtitle}</h5>
      </div>
    </a>
  )
}

export const WhatElseCard = () => {
  return (
    <motion.a
      className="hidden lg:flex items-center group align-middle justify-center relative p-2 ml-6 max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl w-60 h-60"
      initial={{
        opacity: 0,
        x: 120
      }}
      exit={{
        opacity: 0,
        x: 50
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
          delay: 1.2
        }
      }}
      href="https://github.com/Mariotek"
      target="_blank"
      rel="nofollow noreferrer">
      <div className="border-gray-100 group-hover:border-gray-200 transition-all border-2 rounded-lg p-8 border-dashed h-full w-full flex flex-col items-center justify-center">
        <p className="text-xl mt-12 text-center font-bold text-primary">Looks interesting?</p>
        <div className="flex relative w-1/2">
          <button className="mt-4 skip-squircle py-2 px-3 stylish rounded-xl bg-primary text-xl text-white outline-none focus:ring-4 transform group-hover:scale-95 transition-transform">
            Github
          </button>

          {/* Game */}
          <svg
            className="text-primary absolute -top-24 -left-[10px] -translate-x-1/2 opacity-30 -rotate-[28deg]"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 0 0 352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 0 0-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0 0 18.64 3.22c29.93 0 53.93-24.93 70.33-45.34c18.53-23.1 40.22-34.82 107.34-34.82c59.95 0 84.76 8.13 106.19 34.82c13.47 16.78 26.2 28.52 38.9 35.91c16.89 9.82 33.77 12 50.16 6.37c25.82-8.81 40.62-32.1 44-69.24c2.57-28.48-1.39-65.89-12.12-114.37ZM208 240h-32v32a16 16 0 0 1-32 0v-32h-32a16 16 0 0 1 0-32h32v-32a16 16 0 0 1 32 0v32h32a16 16 0 0 1 0 32Zm84 4a20 20 0 1 1 20-20a20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288Zm0-88a20 20 0 1 1 20-20a20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-20a20 20 0 0 1-20 20Z"
            />
          </svg>

          {/* Github */}
          <svg
            className="text-primary absolute -top-24 right-[-25px] opacity-25 rotate-[28deg]"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="M216 104v8a56.06 56.06 0 0 1-48.44 55.47A39.8 39.8 0 0 1 176 192v40a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-16H72a40 40 0 0 1-40-40a24 24 0 0 0-24-24a8 8 0 0 1 0-16a40 40 0 0 1 40 40a24 24 0 0 0 24 24h24v-8a39.8 39.8 0 0 1 8.44-24.53A56.06 56.06 0 0 1 56 112v-8a58.14 58.14 0 0 1 7.69-28.32A59.78 59.78 0 0 1 69.07 28A8 8 0 0 1 76 24a59.75 59.75 0 0 1 48 24h24a59.75 59.75 0 0 1 48-24a8 8 0 0 1 6.93 4a59.74 59.74 0 0 1 5.37 47.68A58 58 0 0 1 216 104Z"
            />
          </svg>

          {/* Star */}
          <svg
            className="text-primary absolute -top-[130px] -translate-x-1/2 left-1/2 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m12 18.275l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.438t-.05-.587l1.1-4.725L3.775 11.8q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15l-4.15-2.5Z"
            />
          </svg>

          {/* Arrow */}
          <svg
            className="text-gray-200 absolute top-full left-1/2 group-hover:text-gray-300 transition-all -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            key="1"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"
            />
          </svg>
        </div>
      </div>
    </motion.a>
  )
}
