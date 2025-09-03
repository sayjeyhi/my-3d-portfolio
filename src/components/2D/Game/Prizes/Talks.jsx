import { HorizontalItem } from './Items'
import { TALKS } from '../constants.js'

export function GameTalks() {
  return (
    <ol className="items-start flex overflow-auto pb-4">
      {TALKS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(talk => (
        <HorizontalItem
          key={talk.title}
          title={talk.title}
          subtitle={talk.subtitle}
          date={talk.date}
          description={talk.description}
          tags={talk.tags}
          link={talk.link}
          image={talk.image}
          icon={talk.icon}
        />
      ))}
    </ol>
  )
}
