import { HorizontalItem } from './Items.jsx'

export function GameTalks() {
  return (
    <ol className="items-start flex overflow-auto">
      <HorizontalItem
        title="React Server Components"
        subtitle="New era for React!"
        date="April 2023"
        description="I gave this talk at iO cowen of wisdom conference and I talked about React Server Components and how to use them in your project."
        image="./talks/io-cow.jpg"
        tags={['React', 'Server', 'Components', 'RSC']}
        link="https://rsc.sayjeyhi.com/"
      />
      <HorizontalItem
        title="NX vs Turbo repo"
        subtitle="Which one should I use?"
        date="May 2023"
        description="I gave this talk at iO consultancy meetups and I explained each of these tools in details, how they works and then I compared them with each other."
        image="./talks/nx-turbo.png"
        tags={['NX', 'Turborepo', 'monorepo']}
        link="https://nx-turbo.sayjeyhi.com/"
      />
      <HorizontalItem
        title="3D Rendering in React"
        subtitle="Is that magic?"
        date="Jan 2024"
        description="I will talk about how to use React Three Fiber and how to create 3D scenes in React and how to use it in your project."
        image="./talks/3d.png"
        tags={['3d', 'react', 'threejs', 'r3f']}
        link="https://nx-turbo.sayjeyhi.com/"
      />
    </ol>
  )
}
