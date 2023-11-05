export function GameProjects() {
  return (
    <ol className="items-start flex overflow-auto">
      <ProjectItem
        title="Pulse Monitor"
        subtitle="Github action free monitoring tool"
        date="Jun 2023 - Present"
        description="⚡️ A fast bun-based checker/crawler/monitor tool that runs for free on Github actions"
        skills={['REST APIs', 'CI/CD', 'GraphQL', 'Node.js', 'Bun.js', 'graphQL', 'monitoring']}
        image="./projects/Pulse-monitor.png"
        link="https://github.com/sayjeyhi/pulse-monitor"
        icon="github"
      />
      <ProjectItem
        title="Iconbox"
        subtitle="A tool to manage your icons and SVGs"
        date="Apr 2020 - Present"
        description="First made this project to be used in Snappmarket projects then I make it bigger and better then it became to Iconbox project."
        skills={['React.js', 'Redux.js', 'Node.js', 'svgo', 'svgr']}
        image="./projects/Icon-Box-App.png"
        link="https://app.iconbox.sayjeyhi.com/"
        icon="website"
      />
      <ProjectItem
        title="Mariotek organization"
        subtitle="A group of open-source book writers for Javascript."
        date="Feb 2019 - Present"
        description="Github organization to write open-source books in markdown and generate books with different formats in CI"
        skills={['Github', 'Software Development', 'Team Leadership']}
        image="./projects/Mariotek.png"
        link="https://github.com/Mariotek"
        icon="github"
      />
      <ProjectItem
        title="SuperMario bros game"
        subtitle="Mario bros game made with react.js and typescript"
        date="Mar 2021 - Mar 2021"
        description="I developed SuperMario Bros level 1-1 fully with react.js and typescript. Play the game at the project URL."
        skills={[
          'React.js',
          'Phaser.js',
          'canvas',
          'TypeScript',
          'styled-components',
          'Game Development'
        ]}
        image="./projects/Super-Mario.png"
        link="https://mariotek.ir/"
        icon="game"
      />
      <ProjectItem
        title="Snapp market new website"
        subtitle="with react, redux-saga and express serving ~2 million users"
        date="Dec 2019 - Nov 2020"
        description="We created the v2 website for SnappMarket; I led a team of 4 developers to create this SSR marketplace; we created a mono repo and separated re-usable logic to be published on NPM and GitHub."
        skills={['React.js', 'Redux.js', 'Node.js']}
        image="./projects/Snapp-Market.png"
        link="https://snapp.market/"
        icon="website"
      />
      <ProjectItem
        title="Chanjelog"
        subtitle="Sem-ver managing shell script helps generating changelogs"
        date="Sep 2020 - Sep 2020"
        description="I created this tool as part of our development cycle in Snappmarket to help us generate changelogs for our projects as part of our CI/CD process. Since it was written in bash, it was fast and easy to use."
        skills={['Bash scripting', 'CI/CD', 'Web Development']}
        image="./projects/Bash-terminal.png"
        link="https://chanjelog.sayjeyhi.com/"
        icon="bash"
      />
      <ProjectItem
        title="Citygram"
        subtitle="A startup that I founded with my friends"
        date="Oct 2015 - Aug 2020"
        description="an introduction website to help business owners and other people find the best result for their life needs, it works like its name, CITY GRAM"
        skills={[
          'PHP',
          'Project Management',
          'jQuery',
          'Adobe Photoshop',
          'AJAX',
          'Full-Stack',
          '.htaccess'
        ]}
        image="./projects/Citygram-home.png"
        link="https://web.archive.org/web/20170119184624/http://www.citygram.ir/"
        icon="website"
      />
      <ProjectItem
        title="Frontend toolbox"
        subtitle="An open-source project to help frontend developers"
        date="Oct 2019 - Jul 2020"
        description="We did this project as part of our development cycle for the Snapp market website v2, as a reusable tool that helps developers develop frontend apps, it has a bunch of UI components, Helpers, and React Hooks, with hard-crafted test cases."
        skills={['React.js', 'CI/CD']}
        link="https://github.com/snappmarket/frontend-toolbox"
        image="./projects/fe-toolbox.png"
        icon="github"
      />
      <ProjectItem
        title="Snake and ladders game"
        subtitle="Snake and ladders game made with gatsby and canvas"
        date="Oct 2019 - Oct 2019"
        description="I made this game using gatsby and canvas from scratch, it was a fun project to learn more about canvas and game development."
        skills={['React.js', 'Redux.js', 'saga', 'canvas', 'Game Development']}
        link="https://snake.sayjeyhi.com/"
        image="./projects/Snake-And-Ladders.png"
        icon="game"
      />
      <ProjectItem
        title="My old website"
        subtitle="Old creative website made with my own js library"
        date="Jun 2018 - Aug 2018"
        description="My old creative website which I created using my own js library called jRun, it was a mini library like AMD and Require.js"
        skills={['JavaScript', 'jQuery', 'CSS']}
        link="https://old.sayjeyhi.com/"
        image="./projects/Old-website.png"
        icon="website"
      />
      <ProjectItem
        title="Jurchin"
        subtitle="A complete website maker with drag&drop"
        date="Nov 2016 - Nov 2017"
        description="a complete website maker, including Drag&Drop UI maker and a new backend framework to allow the websites to be made easily. It was called Jamework, which was a mini framework for PHP language."
        skills={['REST APIs', 'PHP', 'jQuery', 'CSS', '.htaccess']}
        link="https://web.archive.org/web/20171014045925/http://www.jurchin.com/"
        image="./projects/Jurchin-Landing-Top.png"
        icon="website"
      />
    </ol>
  )
}

function ProjectItem({ title, image, subtitle, date, description, skills, link, icon }) {
  return (
    <li className={`relative sm:mb-0 shrink-0 w-96`}>
      <div className="flex items-center">
        <div className="z-10 flex items-center text-blue-500 justify-center w-12 h-12 bg-blue-50 rounded-xl ring-8 ring-white shrink-0">
          {icons[icon] || icons.default}
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
            {skills.map(skill => (
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
