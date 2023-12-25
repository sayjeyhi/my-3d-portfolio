import { EXPERIENCES } from '../constants.js'
import { HorizontalItem, icons } from './Items'

export function GameExperience() {
  return (
    <ol className="items-start flex overflow-auto pb-5">
      {EXPERIENCES.map((experience, index) => {
        /**
         * Sample experience data: Feb 2023 - Apr 2023
         */
        let [startDataString, endDateString] = experience.date.split(' - ')
        if (endDateString === 'Present') {
          endDateString = new Date().toISOString().split('T')[0]
        }
        const startDate = new Date(startDataString)
        const endDate = new Date(endDateString)

        /*
        Create a string like 1 year and 2 months or 2 years and 8 month
         */
        const diffInYearsAndMonths = () => {
          const diffInMonths =
            (endDate.getFullYear() - startDate.getFullYear()) * 12 +
            (endDate.getMonth() - startDate.getMonth())
          const years = Math.floor(diffInMonths / 12)
          const months = diffInMonths % 12
          return `${years > 0 ? `${years} year${years > 1 ? 's' : ''} and` : ''} ${months} month${
            months > 1 ? 's' : ''
          }`
        }

        return (
          <HorizontalItem
            key={experience.title}
            title={experience.title}
            subtitle={experience.subtitle}
            date={experience.date}
            description={experience.description}
            tags={experience.skills}
            link={experience.link}
            defaultIcon={
              <div className="overflow-hidden rounded-lg flex items-center justify-center h-12 w-12 border-2 border-blue-50">
                {experience.logo && <img src={experience.logo} alt={experience.title} />}
              </div>
            }
            beforeTags={
              <div className="flex items-center gap-3 text-xs text-gray-500 justify-center my-4 border rounded-xl">
                For <span className="font-semibold inter">{diffInYearsAndMonths()}</span> in{' '}
                {icons[experience.country]} {experience.country}
              </div>
            }
          />
        )
      })}
    </ol>
  )
}
