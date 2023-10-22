import { useAtom } from 'jotai'
import { Section } from '../Section.jsx'

export const ProjectsSection = () => {
  // const [currentProject, setCurrentProject] = useAtom(currentProjectAtom)
  //
  const nextProject = () => {
    // setCurrentProject((currentProject + 1) % projects.length)
  }

  const previousProject = () => {
    // setCurrentProject((currentProject - 1 + projects.length) % projects.length)
  }

  return (
    <Section className="-mt-48">
      <h3 className="text-5xl font-bold -mt-8 pb-6 pl-2">Books</h3>
      <div className="flex items-center align-middle justify-center mb-2">
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
      </div>
    </Section>
  )
}

export const BookCard = ({ name, url, img, subtitle }) => {
  return (
    <a href={url} target="_blank" rel="nofollow noreferrer">
      <div className="relative p-2 mx-2 flex max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <img className="rounded-md" src={img} alt={name} />
        <h4 className="text-md font-bold text-slate-900 mt-2">{name}</h4>
        <h5 className="text-xs font-medium text-slate-400 mb-1">{subtitle}</h5>
      </div>
    </a>
  )
}
