import { HorizontalItem } from './Items.jsx'

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
    <ol className="items-start flex overflow-auto">
      <HorizontalItem
        icon="cert"
        title="Software Architecture Foundation Level"
        subtitle="iSAQB® – International Software Architecture Qualification"
        date="Sep 2023"
        description="iSAQB® Certified Professional for Software Architecture Foundation Level"
        tags={['Software Architecture', 'iSAQB']}
        link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/https://www.isaqb.org/en/"
        btn={
          <ShowCertification link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/" />
        }
        image="./certifications/isaqb.png"
        smallImage
      />
      <HorizontalItem
        icon="cert"
        title="Advanced Terraform"
        subtitle="LinkedIn"
        date="Nov 2022"
        description="I passed the exam and got the certificate for Advanced Terraform"
        tags={['Terraform', 'DevOps', 'Infrastructure as Code']}
        link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/https://www.linkedin.com/in/sayjeyhi/"
        btn={
          <ShowCertification link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/" />
        }
        image="./certifications/tf.png"
        smallImage
      />
      <HorizontalItem
        icon="cert"
        title="K8s: Microservices"
        subtitle="LinkedIn"
        date="Nov 2022"
        description="I passed the exam and got the certificate for Kubernetes: Microservices"
        tags={['K8s', 'Microservices', 'DevOps']}
        link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/https://www.linkedin.com/in/sayjeyhi/"
        btn={
          <ShowCertification link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/" />
        }
        image="./certifications/k8s.png"
        smallImage
      />
      <HorizontalItem
        icon="cert"
        title="K8s: Pkg Management with Helm"
        subtitle="LinkedIn"
        date="Nov 2022"
        description="I passed the exam and got the certificate for Kubernetes: Package Management with Helm"
        tags={['Kubernetes', 'Helm', 'DevOps']}
        link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/https://www.linkedin.com/in/sayjeyhi/"
        btn={
          <ShowCertification link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/" />
        }
        image="./certifications/k8s.png"
        smallImage
      />
      <HorizontalItem
        icon="cert"
        title="Tailwind CSS"
        subtitle="LinkedIn"
        date="Nov 2022"
        description="I passed the exam and got the certificate for Tailwind CSS"
        tags={['Tailwind', 'CSS', 'Frontend']}
        link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/https://www.linkedin.com/in/sayjeyhi/"
        btn={
          <ShowCertification link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/" />
        }
        image="./certifications/tailwind.png"
        smallImage
      />
      <HorizontalItem
        icon="cert"
        title="NGINX Web Server"
        subtitle="LinkedIn"
        date="Oct 2022"
        description="I passed the exam and got the certificate for NGINX Web Server"
        tags={['NGINX', 'Web Server', 'DevOps']}
        link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/https://www.linkedin.com/in/sayjeyhi/"
        btn={
          <ShowCertification link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/" />
        }
        image="./certifications/nginx.jpg"
        smallImage
      />
      <HorizontalItem
        icon="cert"
        title="Python Essentials"
        subtitle="LinkedIn"
        date="Oct 2022"
        description="I passed the exam and got the certificate for Python Essentials"
        tags={['Python', 'Backend', 'DevOps']}
        link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/https://www.linkedin.com/in/sayjeyhi/"
        btn={
          <ShowCertification link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/" />
        }
        image="./certifications/python.png"
        smallImage
      />
      <HorizontalItem
        icon="cert"
        title="Terraform"
        subtitle="LinkedIn"
        date="Oct 2022"
        description="I passed the exam and got the certificate for Terraform"
        tags={['Terraform', 'DevOps', 'Infrastructure as Code']}
        link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/https://www.linkedin.com/in/sayjeyhi/"
        btn={
          <ShowCertification link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/" />
        }
        image="./certifications/tf.png"
        smallImage
      />
      <HorizontalItem
        icon="cert"
        title="SEO manager"
        subtitle="Issued May 2017"
        date="May 2017"
        description="I passed the exam and got the certificate for SEO manager"
        tags={['SEO', 'Marketing']}
        link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/https://www.linkedin.com/in/sayjeyhi/"
        btn={
          <ShowCertification link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/" />
        }
        image="./certifications/seo.png"
        smallImage
      />
      <HorizontalItem
        icon="cert"
        title="PHP secure coding"
        subtitle="Issued Oct 2016"
        date="Oct 2016"
        description="I passed the exam and got the certificate for PHP secure coding"
        tags={['PHP', 'Backend']}
        link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/https://www.linkedin.com/in/sayjeyhi/"
        btn={
          <ShowCertification link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/" />
        }
        image="./certifications/php.png"
        smallImage
      />
      <HorizontalItem
        icon="cert"
        title="C# window application programmer"
        subtitle="Issued Oct 2016"
        date="Oct 2016"
        description="I passed the exam and got the certificate for C# window application programmer"
        tags={['C#', 'Backend']}
        link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/https://www.linkedin.com/in/sayjeyhi/"
        btn={
          <ShowCertification link="https://www.linkedin.com/in/jafar-rezaei/details/certifications/" />
        }
        image="./certifications/csharp.png"
        smallImage
      />
    </ol>
  )
}
