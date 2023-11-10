import { VerticalItem } from './Items'
import { EDUCATIONS } from '../constants.js'

export function GameEducation() {
  return (
    <ol className="relative border-blue-50 border-l-4 pt-2 ml-7">
      {EDUCATIONS.map((education, index) => (
        <VerticalItem
          key={index}
          title={education.title}
          subtitle={education.subtitle}
          date={education.date}
          description={education.description}
          isWithdrawal={education.isWithdrawal}
          isLast={index === EDUCATIONS.length - 1}
        />
      ))}
    </ol>
  )
}
