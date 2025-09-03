import { Section } from './Section'
import { motion } from 'framer-motion'

export const ProjectsSection = () => {
  return (
    <Section key="projects" className="-mt-48 max-w-screen-2xl">
      <h3 className="-mt-0 lg:-mt-8 pl-2 text-3xl lg:text-5xl font-bold text-primary pb-3 lg:pb-6 ">
        Books
      </h3>
      <div className="flex justify-center mb-2 py-24 overflow-x-auto overflow-y-visible w-full lg:pb-8 items-center">
        <BookCard
          name="Javascript fundamentals"
          subtitle="(250 pages)"
          img="books/js-book-cover.jpeg"
          className="js-book"
          url="https://github.com/Mariotek/better-understanding-of-javascript"
        />
        <BookCard
          name="React.js top question/answers"
          subtitle="(420 questions)"
          img="books/react-cover.jpg"
          className="react"
          url="https://github.com/Mariotek/reactjs-persian-interview-questions"
        />
        <BookCard
          name="Javascript top question/answers"
          subtitle="(Helped with translation)"
          img="books/js-cover.jpeg"
          className="js-qa"
          url="https://github.com/Mariotek/javascript-persian-interview-questions"
        />

        <WhatElseCard />
      </div>

      <div className="m-20 relative top-12">
        <div className="w-max grid">
          <div className="px-8 py-4 bg-gray-200 rounded-3xl rounded-tl-none justify-start  items-center gap-3 inline-flex">
            <h5 className="text-gray-900 text-sm font-normal leading-snug">
              I wrote them when AI was not able to make a book for you in minutes!
            </h5>
          </div>
        </div>
      </div>
    </Section>
  )
}

export const BookCard = ({ className, name, url, img, subtitle }) => {
  return (
    <a href={url} target="_blank" rel="nofollow noreferrer" className="book-container">
      <div className={`book ${className}`}>
        <img alt={name} src={img} />
      </div>
      <div className="absolute -bottom-20 text-center">
        <h4 className="text-sm lg:text-base font-bold text-slate-800">{name}</h4>
        <p className="mt-2 text-xs font-light text-slate-400">{subtitle}</p>
      </div>
    </a>
  )
}

export const WhatElseCard = () => {
  return (
    <motion.a
      className="hidden lg:flex items-center group align-middle justify-center relative p-2 ml-6 max-w-xs flex-col overflow-hidden rounded-lg  w-60 h-60"
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
      <div className="group-hover:border-gray-200 transition-all rounded-lg p-8 h-full w-full flex flex-col items-center justify-center">
        <p className="text-xl mt-12 text-center font-bold text-primary">Looks interesting?</p>
        <div className="flex relative w-1/2">
          <button className="flex items-center gap-2 border mt-12 border-black rounded pr-2 skip-squircle font-semibold text-black text-base outline-none focus:ring-4 transform group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24">
              <path
                fill="currentColor"
                d="M18.88 1.099Q17.78-.001 16.233 0H3.746Q2.198 0 1.099 1.099Q-.001 2.199 0 3.746v12.487q0 1.548 1.099 2.647q1.1 1.1 2.647 1.099H6.66q.285 0 .429-.02a.5.5 0 0 0 .286-.169q.143-.15.143-.435l-.007-.885q-.006-.846-.006-1.34l-.3.052q-.285.052-.721.046a5.6 5.6 0 0 1-.904-.091a2 2 0 0 1-.872-.39a1.65 1.65 0 0 1-.572-.8l-.13-.3a3.3 3.3 0 0 0-.41-.663q-.28-.364-.566-.494l-.09-.065a1 1 0 0 1-.17-.156a.7.7 0 0 1-.117-.182q-.039-.092.065-.15q.104-.06.378-.059l.26.04q.26.051.643.311a2.1 2.1 0 0 1 .631.677q.3.532.722.813q.423.28.852.28t.742-.065a2.6 2.6 0 0 0 .585-.196q.117-.871.637-1.34a9 9 0 0 1-1.333-.234a5.3 5.3 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872q-.416-.52-.683-1.365q-.266-.846-.266-1.952q0-1.573 1.027-2.68q-.48-1.183.091-2.652q.378-.118 1.119.175t1.086.5q.345.21.553.352a9.2 9.2 0 0 1 2.497-.338q1.288 0 2.498.338l.494-.312a7 7 0 0 1 1.197-.572q.689-.26 1.054-.143q.585 1.47.103 2.653q1.028 1.105 1.028 2.68q0 1.106-.267 1.957q-.266.852-.689 1.366a3.7 3.7 0 0 1-1.053.865q-.63.351-1.223.507a9 9 0 0 1-1.333.235q.675.585.676 1.846v3.11q0 .22.065.357a.36.36 0 0 0 .208.189q.143.052.254.064q.111.014.318.013h2.914q1.548 0 2.647-1.099t1.099-2.647V3.746q0-1.548-1.1-2.647z"
              />
            </svg>
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

          {/* Mario */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            className="text-primary absolute -top-24 right-[-25px] opacity-25 rotate-[28deg]"
            viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              color="currentColor">
              <path d="M5.008 16.706c-.037-.38.049-.534.373-.75c3.928-2.61 10.295-2.608 13.337.009c.239.205.302.352.277.659c-.12 1.498-.524 3.228-1.78 4.21c-1.994 1.557-8.446 1.553-10.434 0c-1.243-.972-1.631-2.652-1.773-4.128M9.009 18H9m6 0h-.009" />
              <path d="M5 18c-2-1-3-3.749-3-6C2 6.477 6.477 2 12 2s10 4.477 10 10c0 2.251-1 5-3 6" />
              <circle cx="12" cy="7" r="3" />
              <path d="M3.37 7c1.299.314 1.957 1.9 1.47 3.542c-.44 1.476-1.656 2.496-2.84 2.457M20.632 7c-1.3.314-1.959 1.9-1.471 3.542c.438 1.476 1.653 2.495 2.839 2.457" />
            </g>
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
            className="text-gray-200 absolute top-0 left-1/2 group-hover:text-gray-300 transition-all -translate-x-1/2"
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
