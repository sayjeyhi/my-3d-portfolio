import { HorizontalItem } from './Items'
import { CERTIFICATIONS } from '../constants.js'

const ShowCertification = ({ link }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <button className="flex items-center justify-center w-full my-2 bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-200 hover:border-transparent rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mr-3 relative top-[-1px]"
        viewBox="0 0 20 20">
        <g fill="currentColor">
          <path d="M11 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5Z" />
          <path d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5Z" />
        </g>
      </svg>{' '}
      View certification
    </button>
  </a>
)

export function GameCertifications() {
  return (
    <ol className="items-start flex overflow-auto pb-4">
      {CERTIFICATIONS.map(cert => (
        <HorizontalItem
          key={cert.title}
          icon="cert"
          title={cert.title}
          subtitle={cert.subtitle}
          date={cert.date}
          description={cert.description}
          tags={cert.tags}
          link={cert.link}
          btn={<ShowCertification link={cert.link} />}
          image={cert.image}
          smallImage
        />
      ))}
    </ol>
  )
}
