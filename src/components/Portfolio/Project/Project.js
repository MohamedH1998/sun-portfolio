import React from "react"

const Project = ({ photo, cardTitle, cardText, liveDemo, sourceCode }) => {
  return (
    <>
      <div class="max-w-sm clr-bg-cream-offset md:mx-4 my-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href={liveDemo}>
          <img class="rounded-t-lg" src={photo} alt={cardTitle} />
        </a>
        <div class="p-5">
          <a href={sourceCode}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {cardTitle}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {cardText}
          </p>
          <div className="flex justify-between pt-4">
            <a
              href={liveDemo}
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-clr-bg-offset"
            >
              live demo
            </a>
            <a
              href={sourceCode}
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-clr-bg-offset"
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
