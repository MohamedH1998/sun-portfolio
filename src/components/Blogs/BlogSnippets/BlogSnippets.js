import React from "react"
import { Link } from "react-router-dom"

const BlogSnippets = ({ i, title, text, image }) => {
  return (
    <div className="max-w-sm bg-clr-bg-light-offset md:mx-4 my-4 rounded-lg border border-gray-200 shadow-md dark:bg-clr-bg dark:shadow-clr-bg-lightest-offset dark:border-gray-700">
      <Link to="#">
        <img className="rounded-t-lg" src={image} alt={title} />
      </Link>
      <div className="p-5">
        <Link to="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {text}
        </p>
        <Link
          to="#"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-clr-bg-offset dark:bg-clr-bg dark:border-[1px] dark:border-clr-bg-lightest-offset"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

export default BlogSnippets
