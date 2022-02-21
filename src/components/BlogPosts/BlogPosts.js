import React from "react"
import { useParams } from "react-router-dom"
import blogSnippets from "../../assets/blogs/blogSnippets.js"
import blogText from "../../assets/blogs/blogText.js"
import Lost from "../Lost/Lost.js"

import "./BlogPosts"

const renderBlog = (id, currentBlog) => {
  return (
    <div className="relative flex flex-row justify-center items-start h-full min-h-screen w-screen dark:bg-clr-bg">
      <div className="text-clr-bg dark:text-white py-6 flex flex-col w-9/12 ">
        <h1 className="text-4xl md:text-3xl font-semibold py-8 pr-4">
          {currentBlog.title}
        </h1>
        <div className="row"></div>
        <div className="">
          <ul className="flex flex-col md:flex-row">
            <li className="pr-6 md:after:content-['|'] md:text-lg after:text-clr-skin after:ml-5">
              {currentBlog.topic}
            </li>
            <li className="pr-6 md:after:content-['|'] md:text-lg after:text-clr-skin after:ml-5">
              {currentBlog.date}
            </li>
            <li className="pr-6 md:text-lg">{currentBlog.readTime}</li>
          </ul>
        </div>
        <hr className="border-4 border-clr-skin bg-clr-skin mt-2 mb-8" />
        {blogText(id)}
      </div>
    </div>
  )
}
const BlogPosts = () => {
  const params = useParams()
  const id = params.id
  const currentBlog = blogSnippets[id]
  return currentBlog ? renderBlog(id, currentBlog) : <Lost />
}

export default BlogPosts
