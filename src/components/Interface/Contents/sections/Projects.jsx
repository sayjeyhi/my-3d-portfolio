import { useAtom } from 'jotai'
import { currentProjectAtom, projects } from '../components/Projects.jsx'
import { Section } from '../components/Section.jsx'

export const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom)

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length)
  }

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length)
  }

  return (
    <Section>
      <h3 className="text-5xl font-bold -mt-12">Projects</h3>

      <div className="flex w-full h-full gap-8 items-center justify-center -mb-32">
        <button
          className="px-6 py-4 mt-8 rounded-3xl bg-primary shadow-2xl ring-primary shadow-primary text-lg text-white outline-none focus:ring-4 transform active:scale-90 transition-transform"
          onClick={previousProject}>
          ← Previous
        </button>
        <button
          className="px-6 py-4 mt-8 rounded-3xl bg-primary shadow-2xl ring-primary shadow-primary text-lg text-white outline-none focus:ring-4 transform active:scale-90 transition-transform"
          onClick={nextProject}>
          Next →
        </button>
      </div>
    </Section>
  )
}
