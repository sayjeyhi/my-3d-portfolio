import React from 'react'

const NameWithRandomTailwindColors = () => {
  // const name = 'Jafar Rezaei'
  //
  // // Array of Tailwind color classes (400 - 700) for specified colors
  // const colors = [
  //   'text-red-400',
  //   'text-red-500',
  //   'text-red-600',
  //   'text-red-700',
  //   'text-blue-400',
  //   'text-blue-500',
  //   'text-blue-600',
  //   'text-blue-700',
  //   'text-rose-400',
  //   'text-rose-500',
  //   'text-rose-600',
  //   'text-rose-700',
  //   'text-pink-400',
  //   'text-pink-500',
  //   'text-pink-600',
  //   'text-pink-700',
  //   'text-purple-400',
  //   'text-purple-500',
  //   'text-purple-600',
  //   'text-purple-700',
  //   'text-green-400',
  //   'text-green-500',
  //   'text-green-600',
  //   'text-green-700',
  //   'text-lime-400',
  //   'text-lime-500',
  //   'text-lime-600',
  //   'text-lime-700',
  //   'text-yellow-400',
  //   'text-yellow-500',
  //   'text-yellow-600',
  //   'text-yellow-700'
  // ]
  //
  // // Function to pick a random color class
  // const getRandomColorClass = () => {
  //   const randomIndex = Math.floor(Math.random() * colors.length)
  //   return colors[randomIndex]
  // }

  return (
    <span className="md:text-3xl sm:text-2xl lg:text-4xl text-base font-extrabold mt-1 px-2">
      <span className="text-blue-500">J</span>
      <span className="text-lime-600">a</span>
      <span className="text-yellow-500">f</span>
      <span className="text-blue-400">a</span>
      <span className="text-red-600">r</span>
      <span className="text-lime-600"> </span>
      <span className="text-blue-600">R</span>
      <span className="text-blue-400">e</span>
      <span className="text-pink-600">z</span>
      <span className="text-lime-500">a</span>
      <span className="text-rose-500">e</span>
      <span className="text-yellow-400">i</span>
    </span>
  )
}

export default NameWithRandomTailwindColors
