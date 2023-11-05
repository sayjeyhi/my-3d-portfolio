/*
React Server Components
How to use React Server Components in your project
React Server Components is an experimental feature that lets you write React components that are rendered on the server and rehydrated on the client. This allows you to use React components in your existing server-side code, leading to a better user experience and developer experience.
April 2023
https://rsc.sayjeyhi.com/


NX vs Turbo repo
What is the difference between NX and Turbo?
NX is a set of extensible dev tools for monorepos, which helps you develop like Google, Facebook, and Microsoft. Turbo is a set of tools for building and deploying serverless functions and static sites.
May 2023
https://nx-turbo.sayjeyhi.com/
 */

export function GameTalks() {
  return (
    <ol className="items-start flex overflow-auto">
      <Talk
        title="React Server Components"
        subtitle="New era for React!"
        date="April 2023"
        description="I gave this talk at iO cowen of wisdom conference and I talked about React Server Components and how to use them in your project."
        image="./talks/io-cow.jpg"
        tags={['React', 'Server', 'Components', 'RSC']}
        link="https://rsc.sayjeyhi.com/"
      />
      <Talk
        title="NX vs Turbo repo"
        subtitle="Which one should I use?"
        date="May 2023"
        description="I gave this talk at iO consultancy meetups and I explained each of these tools in details, how they works and then I compared them with each other."
        image="./talks/nx-turbo.png"
        tags={['NX', 'Turborepo', 'monorepo']}
        link="https://nx-turbo.sayjeyhi.com/"
      />
      <Talk
        title="3D Rendering in React"
        subtitle="Is that magic?"
        date="Jan 2024"
        description="I will talk about how to use React Three Fiber and how to create 3D scenes in React and how to use it in your project."
        image="./talks/new.jpg"
        tags={['3d', 'react', 'threejs', 'r3f']}
        link="https://nx-turbo.sayjeyhi.com/"
      />
    </ol>
  )
}

function Talk({ title, image, subtitle, date, description, tags, link }) {
  return (
    <li className={`relative sm:mb-0 shrink-0 w-96`}>
      <div className="flex items-center">
        <div className="z-10 flex items-center text-blue-500 justify-center w-12 h-12 bg-blue-50 rounded-xl ring-8 ring-white shrink-0">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <div className="hidden sm:flex w-full bg-gray-50 h-1"></div>
      </div>
      <div className="mt-3 sm:pr-8 ">
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="">
            <h3 className="text-lg font-semibold text-gray-900 ">{title}</h3>
            <h4 className="mb-2 text-xs text-gray-500">{subtitle}</h4>
          </a>

          <time className="block mb-2 text-xs font-normal leading-none text-gray-400 ">{date}</time>
          <p className="text-sm font-normal text-gray-500 ">{description}</p>
        </div>
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="">
            <div className="w-full h-48 my-2 overflow-hidden rounded-lg border-2 border-gray-200">
              <img src={image} alt={title} />
            </div>
          </a>
          <div className="flex flex-wrap mt-2 gap-1">
            {tags.map(skill => (
              <span
                key={skill}
                className="bg-gray-400 text-white text-xs px-2.5 py-0.5 rounded inter hover:bg-gray-600 transition-all">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </li>
  )
}
