import { VerticalItem } from './Items.jsx'

export function GameEducation() {
  return (
    <ol className="relative border-blue-50 border-l-4 pt-2 ml-7">
      <VerticalItem
        title="K. N. Toosi University of Technology"
        subtitle="Master's degree, Computer architecture"
        date="2017 - 2019"
        description="In my involvement with various academic activities and societies, I immersed myself in the intricate world of processors and the art of designing their architecture during my enrollment in the master's degree program in computer architecture at K. N. Toosi University. Despite my dedication to the subject, I ultimately made the difficult decision to withdraw from the program after one year, failing to complete the master's degree as initially intended. This experience has left an indelible mark on my academic journey, providing me with valuable insights and a strong foundation in the realm of computer architecture, even though I did not achieve the planned degree. It continues to inform and inspire my future academic and professional pursuits, underscoring my unwavering passion for the field."
        isWithdrawal
      />
      <VerticalItem
        title="Payame Noor University"
        subtitle="Bachelor's degree, Computer Engineering Technology/Technician"
        date="2014 - 2017"
        description="My academic journey revolved around obtaining a Computer Engineering degree with a specialization in IT, where I consistently garnered top grades across a spectrum of subjects, spanning programming on educational platforms, mastering operating systems, honing skills in C and C++ coding, dissecting algorithm intricacies, delving into the nuances of software engineering, and diving into the intricacies of database management. Throughout this educational voyage, I not only excelled in my coursework but also showcased a profound comprehension of these subjects, underscored by my unwavering passion for the field."
        isLast
      />
    </ol>
  )
}
