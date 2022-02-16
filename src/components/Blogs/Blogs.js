import React from "react"
import BlogSnippets from "./BlogSnippets/BlogSnippets"
import blogSnippets from "../../assets/blogs/blogSnippets"

const reverseOrderofBlogSnippets = blogSnippets
  .slice(0)
  .reverse()
  .map((blogSnippet, i) => {
    return (
      <BlogSnippets
        key={blogSnippet.id}
        i={blogSnippet.id}
        image={blogSnippet.image}
        title={blogSnippet.title}
        text={blogSnippet.tagline}
      />
    )
  })

const Blogs = () => {
  return (
    <div className="blogs relative flex flex-col items-start justify-center min-h-full pl-10 pr-1 mt-10 h-fit">
      <h1 className="text-5xl dark:text-white text-clr-bg hero-header py-7">
        musings
      </h1>
      <hr className="w-full border-2 border-clr-skin" />
      <div className="flex flex-wrap justify-center py-10 pr-6">
        {reverseOrderofBlogSnippets}
      </div>
    </div>
  )
}

export default Blogs
