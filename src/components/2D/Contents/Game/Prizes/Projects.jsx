import { HorizontalItem } from './Items'
import { PROJECTS } from '../constants.js'

export function GameProjects() {
  return (
    <ol className="items-start flex overflow-auto pb-4">
      {PROJECTS.map(project => (
        <HorizontalItem
          key={project.title}
          title={project.title}
          subtitle={project.subtitle}
          date={project.date}
          description={project.description}
          tags={project.skills}
          link={project.link}
          image={project.image}
          icon={project.icon}
        />
      ))}
    </ol>
  )
}
