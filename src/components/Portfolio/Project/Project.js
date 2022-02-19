import React from "react"

const Project = ({ photo, cardTitle, cardText, liveDemo, sourceCode }) => {
  return (
    <>
      <div className="max-w-lg bg-clr-bg-light-offset md:mx-4 my-4 rounded-lg border border-gray-200 dark:border-0 shadow-md dark:bg-clr-bg dark:shadow-clr-bg-lightest-offset dark:border-gray-700">
        <a href={liveDemo}>
          <img className="rounded-t-lg" src={photo} alt={cardTitle} />
        </a>
        <div className="p-5">
          <a href={sourceCode}>
            <h5 className="mb-2 text-2xl md:text-3xl font-bold  tracking-tight text-gray-900 dark:text-white">
              {cardTitle}
            </h5>
          </a>
          <p className="mb-3 md:text-2xl font-normal text-gray-700 dark:text-gray-400">
            {cardText}
          </p>
          <div className="flex justify-between pt-4">
            <a
              href={liveDemo}
              className="inline-flex cursor-pointer md:text-xl items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-clr-bg-offset"
            >
              live demo
            </a>
            <a
              href={sourceCode}
              className="inline-flex cursor-pointer md:text-xl items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-clr-bg-offset"
            >
              source code
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
