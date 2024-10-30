import { EXPERIENCES } from '../constants.js'
import { HorizontalItem, icons } from './Items'
import { useCursorHandlers } from '@/components/2D/Cursor.jsx'

export function GameExperience() {
  const cursorHandlers = useCursorHandlers()

  return (
    <ol className="items-start flex overflow-auto pb-5">
      {EXPERIENCES.map((experience, index) => {
        /**
         * Sample experience data: Feb 2023 - Apr 2023
         */
        let [startDataString, endDateString] = experience.date.split(' - ')
        if (endDateString === 'Present') {
          endDateString = new Date().toISOString().split('T')[0]
        } else {
          const [endMonth, endYear] = endDateString.split(' ')
          endDateString = `${endMonth} 1, ${endYear}`
        }
        /**
         * Fix issue with safari!
         */
        const [month, year] = startDataString.split(' ')
        startDataString = `${month} 1, ${year}`
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
              <div
                {...cursorHandlers}
                className="flex items-center gap-2 text-xs text-gray-700 justify-center my-4 border rounded-xl">
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
