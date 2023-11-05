export function GameEducation() {
  return (
    <ol className="relative border-blue-50 border-l-4 pt-2 ml-7">
      <EducationItem
        title="K. N. Toosi University of Technology"
        subtitle="Master's degree, Computer architecture"
        date="2017 - 2019"
        description="In my involvement with various academic activities and societies, I immersed myself in the intricate world of processors and the art of designing their architecture during my enrollment in the master's degree program in computer architecture at K. N. Toosi University. Despite my dedication to the subject, I ultimately made the difficult decision to withdraw from the program after one year, failing to complete the master's degree as initially intended. This experience has left an indelible mark on my academic journey, providing me with valuable insights and a strong foundation in the realm of computer architecture, even though I did not achieve the planned degree. It continues to inform and inspire my future academic and professional pursuits, underscoring my unwavering passion for the field."
        isWithdrawal
      />
      <EducationItem
        title="Payame Noor University"
        subtitle="Bachelor's degree, Computer Engineering Technology/Technician"
        date="2014 - 2017"
        description="My academic journey revolved around obtaining a Computer Engineering degree with a specialization in IT, where I consistently garnered top grades across a spectrum of subjects, spanning programming on educational platforms, mastering operating systems, honing skills in C and C++ coding, dissecting algorithm intricacies, delving into the nuances of software engineering, and diving into the intricacies of database management. Throughout this educational voyage, I not only excelled in my coursework but also showcased a profound comprehension of these subjects, underscored by my unwavering passion for the field."
        isLast
      />
    </ol>
  )
}

function EducationItem({ title, subtitle, date, description, isWithdrawal, isLast }) {
  return (
    <li className={`ml-12 ${!isLast ? 'mb-8' : ''}`}>
      <span className="absolute flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl -left-[1.6rem] ring-8 ring-white ">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 2048 2048">
          <path
            fill="currentColor"
            d="M1582 1065q41 72 61 150t21 161v103l-640 321l-640-321q0-60 1-112t9-101t24-98t48-103L256 960v587q29 10 52 28t41 42t26 52t9 59v320H0v-320q0-30 9-58t26-53t40-42t53-28V896L0 832l1024-512l1024 512l-466 233zM256 1728q0-26-19-45t-45-19q-26 0-45 19t-19 45v192h128v-192zm30-896l738 369l738-369l-738-369l-738 369zm1250 568q0-77-15-143t-53-135l-444 222l-444-222q-33 58-50 122t-18 132v24l512 256l512-256z"
          />
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
        {title}{' '}
        {isWithdrawal && (
          <span className="bg-gray-400 text-white text-xs mr-2 px-2.5 py-0.5 rounded inter ml-3">
            Withdrawal
          </span>
        )}
      </h3>
      <h4 className="mb-2 text-base text-gray-500 font-semibold">{subtitle}</h4>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">{date}</time>
      <p className="mb-4 text-sm font-normal text-gray-500 ">{description}</p>
    </li>
  )
}
