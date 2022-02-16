import React from "react"
import BlogSnippets from "./BlogSnippets/BlogSnippets"
import blogSnippets from "../../assets/blogs/blogSnippets"

const reverseOrderofBlogSnippets = blogSnippets
  .slice(0)
  .reverse()
  .map((blogSnippet, i) => {
    return (
      <React.Fragment key={i}>
        <BlogSnippets
          i={blogSnippet.id}
          image={blogSnippet.image}
          title={blogSnippet.title}
          text={blogSnippet.tagline}
        />
      </React.Fragment>
    )
  })

const Blogs = () => {
  return (
    <div className="blogs relative flex justify-center items-start h-full w-screen">
      <div className="w-9/12 flex flex-col">
        <h1 className="text-5xl dark:text-white text-clr-bg hero-header py-7">
          musings
        </h1>
        <hr className="w-full border-2 border-clr-skin" />
        <div className="flex flex-wrap justify-center py-10 pr-6">
          {reverseOrderofBlogSnippets}
        </div>
      </div>
    </div>
  )
}

export default Blogs
