import React from "react"
import { Link } from "react-router-dom"

const BlogSnippets = ({ i, title, text, image }) => {
  return (
    <div
      key={i}
      class="max-w-sm bg-clr-bg-light-offset md:mx-4 my-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <Link to="#">
        <img class="rounded-t-lg" src={image} alt={title} />
      </Link>
      <div class="p-5">
        <Link to="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
        <Link
          to="#"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-clr-bg-offset"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

export default BlogSnippets
