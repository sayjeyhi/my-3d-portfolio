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

const icons = {
  game: (
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.667 6.134l-.502-.355A4.241 4.241 0 0 0 7.715 5h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 20a2.74 2.74 0 0 0 1.53-.437c.41-.268.77-.616 1.13-.964c.444-.43.888-.86 1.424-1.138a4.106 4.106 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46c.536.279.98.709 1.425 1.139c.36.348.72.696 1.128.964c.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 5.025 17.3 5 16.897 5h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.308 2.308 0 0 1-2.666 0ZM16.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Zm-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V13a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V10a.75.75 0 0 1 .75-.75Zm11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  website: (
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2">
        <path d="M19.5 7A9 9 0 0 0 12 3a8.991 8.991 0 0 0-7.484 4" />
        <path d="M11.5 3a16.989 16.989 0 0 0-1.826 4M12.5 3a16.989 16.989 0 0 1 1.828 4M19.5 17a9 9 0 0 1-7.5 4a8.991 8.991 0 0 1-7.484-4" />
        <path d="M11.5 21a16.989 16.989 0 0 1-1.826-4m2.826 4a16.989 16.989 0 0 0 1.828-4M2 10l1 4l1.5-4L6 14l1-4m10 0l1 4l1.5-4l1.5 4l1-4M9.5 10l1 4l1.5-4l1.5 4l1-4" />
      </g>
    </svg>
  ),
  bash: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M5 9h2.31l.32-3h2l-.32 3h2l.32-3h2l-.32 3H15v2h-1.9l-.2 2H15v2h-2.31l-.32 3h-2l.32-3h-2l-.32 3h-2l.32-3H5v-2h1.9l.2-2H5V9m4.1 2l-.2 2h2l.2-2M19 6h-2v8h2m0 2h-2v2h2Z"
      />
    </svg>
  ),
  github: (
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M5.315 2.1c.791-.113 1.9.145 3.333.966l.272.161l.16.1l.397-.083a13.3 13.3 0 0 1 4.59-.08l.456.08l.396.083l.161-.1c1.385-.84 2.487-1.17 3.322-1.148l.164.008l.147.017l.076.014l.05.011l.144.047a1 1 0 0 1 .53.514a5.2 5.2 0 0 1 .397 2.91l-.047.267l-.046.196l.123.163c.574.795.93 1.728 1.03 2.707l.023.295L21 9.5c0 3.855-1.659 5.883-4.644 6.68l-.245.061l-.132.029l.014.161l.008.157l.004.365l-.002.213L16 21a1 1 0 0 1-.883.993L15 22H9a1 1 0 0 1-.993-.883L8 21v-.734c-1.818.26-3.03-.424-4.11-1.878l-.535-.766c-.28-.396-.455-.579-.589-.644l-.048-.019a1 1 0 0 1 .564-1.918c.642.188 1.074.568 1.57 1.239l.538.769c.76 1.079 1.36 1.459 2.609 1.191L8 17.562l-.018-.168a5.03 5.03 0 0 1-.021-.824l.017-.185l.019-.12l-.108-.024c-2.976-.71-4.703-2.573-4.875-6.139l-.01-.31L3 9.5a5.6 5.6 0 0 1 .908-3.051l.152-.222l.122-.163l-.045-.196a5.2 5.2 0 0 1 .145-2.642l.1-.282l.106-.253a1 1 0 0 1 .529-.514l.144-.047l.154-.03z"
        />
      </g>
    </svg>
  ),
  default: (
    <svg
      className="w-3 h-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
    </svg>
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
