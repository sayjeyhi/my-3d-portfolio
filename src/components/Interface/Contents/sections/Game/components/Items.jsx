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
  cert: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 256 256">
      <g fill="currentColor">
        <path
          d="M224 56v36.23a48 48 0 1 0-64 71.57V192H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z"
          opacity=".2"
        />
        <path d="M248 128a56 56 0 1 0-96 39.14V224a8 8 0 0 0 11.58 7.16L192 216.94l28.42 14.22A8 8 0 0 0 232 224v-56.86A55.81 55.81 0 0 0 248 128Zm-56-40a40 40 0 1 1-40 40a40 40 0 0 1 40-40Zm3.58 112.84a8 8 0 0 0-7.16 0L168 211.06v-32.47a55.94 55.94 0 0 0 48 0v32.47ZM136 192a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16a8 8 0 0 1-16 0H40v128h88a8 8 0 0 1 8 8Zm-16-56a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Zm0-32a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Z" />
      </g>
    </svg>
  ),
  default: (
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
    </svg>
  )
}

export function HorizontalItem({
  title,
  image,
  subtitle,
  date,
  description,
  tags,
  link,
  icon,
  smallImage,
  btn
}) {
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
          {!!image && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="">
              <div
                className={`w-full my-2 overflow-hidden rounded-lg border-2 border-gray-200 flex items-center justify-center ${
                  smallImage ? 'h-32' : 'h-48'
                }`}>
                <img src={image} alt={title} />
              </div>
            </a>
          )}
          <div className="flex flex-wrap mt-2 gap-1">
            {tags.map(skill => (
              <span
                key={skill}
                className="bg-gray-400 text-white text-xs px-2.5 py-0.5 rounded inter hover:bg-gray-600 transition-all">
                {skill}
              </span>
            ))}
          </div>
          {!!btn && btn}
        </div>
      </div>
    </li>
  )
}

export function VerticalItem({ title, subtitle, date, description, isWithdrawal, isLast }) {
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
